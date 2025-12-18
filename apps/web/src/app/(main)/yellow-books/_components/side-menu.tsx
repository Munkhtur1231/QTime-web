import { BusinessCategoryListResponse } from '@businessdirectory/database';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

export default async function SideMenu({
  parentCategoryId,
}: {
  parentCategoryId: number;
}) {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/business-categories?parentCategoryId=${parentCategoryId}`,
    {
      next: { revalidate: 60, tags: ['categories-sidebar'] },
    }
  );
  const categoriesData: BusinessCategoryListResponse[] = (
    await categories.json()
  ).data;
  return (
    <div className="border w-full max-w-xs border-border rounded-xl p-4">
      <div className="flex flex-row gap-4 justify-between items-center">
        <span className="ml-2">Бусад холбоотой</span>
        <Link
          href={`/yellow-books/categories`}
          className="text-sm text-secondary hover:text-primary duration-300"
        >
          Бүгд
        </Link>
      </div>
      <div className="mt-2 flex-flex-col gap-2 items-start">
        {categoriesData.map((category) => {
          const Icon =
            FaIcons[category.icon as keyof typeof FaIcons] ||
            FaIcons.FaRegSquare;
          return (
            <div
              className="flex flex-row gap-3 pb-2 items-center"
              key={category.id}
            >
              <Icon className="size-8 border border-border rounded-lg p-1 text-muted" />
              <div className="flex flex-col leading-none">
                <Link
                  href={`/yellow-books?categoryId=${category.id}`}
                  className="text-sm hover:text-secondary duration-300"
                >
                  {category.name}
                </Link>
                <span className="text-xs text-muted">
                  {category.parentCategory.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
