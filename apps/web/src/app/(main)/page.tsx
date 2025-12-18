import CategoryRecommendation from '../_components/category-recommendation';
import FirstSearch from '../_components/first-search';
import NewComments from '../_components/new-comments';
import TryOurBusiness from '../_components/try-our-business';
import BestInCategories from '../_components/best-in-categories';
import { Suspense } from 'react';

// Force dynamic rendering - skip SSG to avoid build-time API fetch issues
// The page will be rendered on each request with fresh data
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="">
      <FirstSearch />
      <div className="flex justify-center  items-center mb-10 flex-col w-full">
        <div className="w-full max-w-7xl space-y-10  mx-auto">
          <Suspense fallback={<CategoryRecommendationSkeleton />}>
            <CategoryRecommendation />
          </Suspense>

          {/* Static content - no Suspense needed */}
          <TryOurBusiness />

          <Suspense fallback={<BestInCategoriesSkeleton />}>
            <BestInCategories />
          </Suspense>

          <Suspense fallback={<NewCommentsSkeleton />}>
            <NewComments />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function CategoryRecommendationSkeleton() {
  return (
    <div className="w-full mt-10 flex flex-col gap-10 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="flex items-center gap-2">
          <div className="size-8 bg-gray-200 rounded-full"></div>
          <div className="size-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            <div className="size-8 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BestInCategoriesSkeleton() {
  return (
    <div className="w-full mt-10 flex flex-col gap-10 animate-pulse">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="h-8 w-48 bg-gray-200 rounded"></div>
            <div className="flex items-center gap-2">
              <div className="size-8 bg-gray-200 rounded-full"></div>
              <div className="size-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="rounded-xl border border-border p-4">
                <div className="w-full h-24 bg-gray-200 rounded-xl mb-2"></div>
                <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NewCommentsSkeleton() {
  return (
    <div className="flex flex-col gap-10 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="flex items-center gap-2">
          <div className="size-8 bg-gray-200 rounded-full"></div>
          <div className="size-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border p-4">
            <div className="flex gap-2 mb-2">
              <div className="size-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-12 bg-gray-200 rounded mb-2"></div>
            <div className="border-t border-border pt-2 flex gap-2 items-center">
              <div className="size-10 bg-gray-200 rounded-xl"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
