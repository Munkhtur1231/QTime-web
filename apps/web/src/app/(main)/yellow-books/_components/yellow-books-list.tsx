'use server';
import { FaChevronRight, FaChevronDown, FaFilter } from 'react-icons/fa';
import { BusinessWithExtras } from '@businessdirectory/database';
import Link from 'next/link';
import { Suspense } from 'react';
import SideMenu from './side-menu';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SideMenuSkeleton } from './skeletons';
export default async function YellowBooksList({
  categoryId,
  parentCategoryId,
}: {
  categoryId: string;
  parentCategoryId: string;
}) {
  const categoryType = categoryId
    ? 'categoryId'
    : parentCategoryId
    ? 'parentCategoryId'
    : null;
  const categoryValue = categoryId || parentCategoryId;
  const businesses = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?limit=50&${
      categoryType ? `${categoryType}=${categoryValue}` : ''
    }`,
    {
      next: { revalidate: 60, tags: ['businesses-list'] },
    }
  );
  const businessesData: BusinessWithExtras[] = (await businesses.json()).data;
  if (businessesData.length === 0) {
    notFound();
  }

  return (
    <div className="p-2 xl:p-0 w-full mt-10 flex flex-col gap-5">
      {categoryType === 'categoryId' && categoryValue && (
        <div className="text-2xl flex flex-wrap flex-row gap-5 items-baseline font-bold">
          {businessesData[0].category.parentCategory.name}
          <FaChevronRight className="size-4" />
          <span className="text-muted text-sm">
            {businessesData[0].category.name}
          </span>
        </div>
      )}
      <h2 className="text-4xl mt-5 font-bold">
        {businessesData[0].category.name}-т шилдгүүд
      </h2>
      <div className="flex flex-row gap-2 border-b border-border pb-10 items-center">
        <div className="border flex flex-row gap-2 items-center justify-center border-border rounded-xl p-4">
          <FaFilter className="size-5 text-muted" />
          <span className=" text-sm">Филтерүүд</span>
        </div>
        <div className="border flex flex-row gap-2 items-center justify-center border-border rounded-xl p-4">
          <FaFilter className="size-5 text-muted" />
          <span className=" text-sm">Үнэлгээнүүд</span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-10 items-start justify-between">
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row flex-wrap text-lg justify-between items-center">
              Компаниуд ({businessesData.length})
              <div className="flex flex-row gap-2 items-baseline  ">
                Эрэмбэ (Хамгийн алдартай){' '}
                <FaChevronDown className="size-4" />
              </div>
            </div>
          </div>
          <div className="flex pt-5 flex-col ">
            {businessesData.map((business) => {
              return (
                <div
                  className="border-b border-border px-2 py-5 last:border-b-0"
                  key={business.id}
                >
                  <div className="flex flex-row flex-wrap justify-between items-center">
                    <div className="flex flex-row  gap-5 ">
                      <Link
                        className="mt-2"
                        href={`/yellow-books/${business.id}`}
                      >
                        <Image
                          src={business.photo}
                          alt={business.name}
                          width={100}
                          height={100}
                          className="rounded-xl border-2 size-20 object-cover border-border"
                        />
                      </Link>

                      <div className="flex flex-col gap-1">
                        <Link
                          href={`/yellow-books/${business.id}`}
                          className="hover:text-secondary duration-300 hover:underline"
                        >
                          {business.name}
                        </Link>
                        {business.link && (
                          <Link
                            href={business.link}
                            className="text-sm text-muted"
                          >
                            {business.link}
                          </Link>
                        )}
                        <div className="flex flex-row flex-wrap gap-8 items-center">
                          <span>{business.averageReviewRating}</span>
                          <span className="text-xs text-muted">
                            {business._count.reviews} сэтгэгдлүүд
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>{business.addresses[0].address}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Suspense fallback={<SideMenuSkeleton />}>
          <SideMenu
            parentCategoryId={businessesData[0].category.parentCategory.id}
          />
        </Suspense>
      </div>
    </div>
  );
}
