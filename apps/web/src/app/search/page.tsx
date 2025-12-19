// 'use server';
import { searchList } from './_lib/search';
import FiltersClient from './_components/filters-client';
import ResultsServer from './_components/results-server';
import MapIsland from './_components/map-island';

// SSR: Server-side render on each request for fresh search results
export const dynamic = 'force-dynamic';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    categoryId?: string;
    parentCategoryId?: string;
    isActive?: string;
    isInsideMall?: string;
  }>;
}) {
  const params = await searchParams;
  const results = await searchList(params);

  // Extract locations for map (all addresses from all businesses)
  const locations = results
    .filter((business) => business.addresses && business.addresses.length > 0)
    .flatMap((business) =>
      business.addresses.map((addr) => ({
        id: `${business.id}-${addr.id}`, // Use composite key.
        businessId: business.id,
        name: business.name,
        photo: business.photo,
        latitude: addr.latitude,
        longitude: addr.longitude,
        address: addr.address,
      }))
    );

  return (
    <div className="flex mb-10 mt-10 justify-center items-center flex-col w-full">
      <div className="w-full max-w-7xl space-y-10 mx-auto">
        <FiltersClient initial={params} />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Search Results - SSR */}
          <div className="flex-1">
            <ResultsServer data={results} />
          </div>

          {/* Map Island - Client Component */}
          <div className="w-full md:w-96 sticky top-4">
            <MapIsland points={locations} />
          </div>
        </div>
      </div>
    </div>
  );
}
