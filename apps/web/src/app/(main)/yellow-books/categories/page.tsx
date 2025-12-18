import CategoriesGrid from './_components/categories-grid';
import CategoriesSearch from './_components/categories-search';

import { Suspense } from 'react';

// Force dynamic rendering - skip SSG to avoid build-time API fetch issues
export const dynamic = 'force-dynamic';
export default function HomePage() {
  return (
    <div className="">
      <CategoriesSearch />
      <div className="flex mb-10 justify-center  items-center flex-col w-full">
        <div className="w-full max-w-7xl space-y-10  mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <CategoriesGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
