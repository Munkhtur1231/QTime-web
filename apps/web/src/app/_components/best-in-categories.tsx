'use server';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import Image from 'next/image';
import {
  BusinessWithExtras,
  BusinessCategoryListResponse,
} from '@businessdirectory/database';
import Link from 'next/link';
export default async function BestInCategories() {
  try {
    const businessCategories = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/business-categories?limit=50`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
          tags: ['categories'], // Cache tag for on-demand revalidation
        },
      }
    );
    const businessCategoriesData: BusinessCategoryListResponse[] =
      (await businessCategories.json())?.data || [];

    if (!businessCategoriesData || businessCategoriesData.length === 0) {
      return null;
    }

    const twoMostBusinessCategories = businessCategoriesData
      .sort((a, b) => (b._count?.businesses || 0) - (a._count?.businesses || 0))
      .slice(0, 2);

    if (twoMostBusinessCategories.length === 0) {
      return null;
    }

    const businesses: BusinessWithExtras[][] = await Promise.all(
      twoMostBusinessCategories.map(async (category) => {
        try {
          const businesses = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?limit=50&categoryId=${category.id}`,
            {
              next: {
                revalidate: 60, // Revalidate every 60 seconds
                tags: ['businesses-list', `businesses-category-${category.id}`], // Cache tags
              },
            }
          );
          return (await businesses.json())?.data || [];
        } catch {
          return [];
        }
      })
    );

    if (!businesses || businesses.length === 0) {
      return null;
    }

    return (
      <div className="w-full mt-10 ">
        <div className="flex flex-col gap-10">
          {businesses.map((business, i) =>
            business && business.length > 0 ? (
              <BusinessList key={i} businesses={business} />
            ) : null
          )}
        </div>
      </div>
    );
  } catch {
    return null;
  }
}
function BusinessList({ businesses }: { businesses: BusinessWithExtras[] }) {
  if (!businesses || businesses.length === 0 || !businesses[0]?.category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h3>{businesses[0].category.name}-т шилдгүүд</h3>
        <div className="flex items-center gap-2">
          <CiCircleChevLeft className="size-8 cursor-pointer hover:scale-110 transition-all duration-300 xl:size-10" />
          <CiCircleChevRight className="size-8 cursor-pointer hover:scale-110 transition-all duration-300 xl:size-10" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="rounded-xl border border-border p-4"
          >
            <div className="flex flex-col gap-2">
              <div>
                <Link href={`/yellow-books/${business.id}`}>
                  <Image
                    className="rounded-xl  border-border border-2"
                    src={business.photo}
                    alt={business.name}
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
            <h4 className=" text-base font-semibold">
              <Link href={`/yellow-books/${business.id}`}>{business.name}</Link>
            </h4>
            <Link className="text-muted text-xs" href={`${business.link}`}>
              {business.link}
            </Link>
            <div className="flex flex-row items-center gap-2">
              <span className="font-semibold">
                {business.averageReviewRating}
              </span>
              <span className="text-muted text-xs">
                ({business._count.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
