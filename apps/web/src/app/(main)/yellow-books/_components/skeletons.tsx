export function YellowBooksListSkeleton() {
  return (
    <div className="p-2 xl:p-0 w-full mt-10 flex flex-col gap-5 animate-pulse">
      <div className="h-8 w-64 bg-gray-200 rounded"></div>
      <div className="h-10 w-full bg-gray-200 rounded"></div>
      <div className="flex md:flex-row flex-col gap-10 items-start justify-between">
        <div className="flex-1">
          <div className="h-6 w-48 bg-gray-200 rounded mb-5"></div>
          <div className="flex pt-5 flex-col gap-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="border-b border-border px-2 py-5 flex flex-row gap-5"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-5 w-48 bg-gray-200 rounded"></div>
                  <div className="h-4 w-64 bg-gray-200 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SideMenuSkeleton />
      </div>
    </div>
  );
}

export function SideMenuSkeleton() {
  return (
    <div className="border w-full max-w-xs border-border rounded-xl p-4 animate-pulse">
      <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
      <div className="flex flex-col gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-row gap-3 items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
            <div className="flex flex-col gap-1">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BusinessProfileSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-xl">
        <div className="w-32 h-32 bg-gray-200 rounded-xl"></div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function BusinessReviewsSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border border-border rounded-xl p-4">
          <div className="flex gap-4 mb-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

export function SearchResultsSkeleton() {
  return (
    <div className="p-2 xl:p-0 w-full mt-10 flex flex-col gap-5 animate-pulse">
      <div className="h-10 w-64 bg-gray-200 rounded"></div>
      <div className="flex pt-5 flex-col gap-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="border-b border-border px-2 py-5 flex flex-row gap-5"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
              <div className="h-4 w-64 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded mt-2"></div>
            </div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

