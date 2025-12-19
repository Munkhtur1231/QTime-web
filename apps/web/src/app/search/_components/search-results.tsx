'use server';
import { BusinessWithExtras } from '@businessdirectory/database';
import Link from 'next/link';
import Image from 'next/image';

export default async function SearchResults({ query }: { query?: string }) {
  // SSR: Fetch fresh data on each request
  const searchUrl = query
    ? `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/businesses?search=${encodeURIComponent(query)}&limit=20`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?limit=20`;

  const response = await fetch(searchUrl, {
    cache: 'no-store', // SSR: No caching, always fresh
  });

  if (!response.ok) {
    return (
      <div className="p-4">
        <p className="text-red-500">Error loading search results</p>
      </div>
    );
  }

  const businessesData: BusinessWithExtras[] = (await response.json()).data;

  if (businessesData.length === 0) {
    return (
      <div className="p-4">
        <p className="text-muted">
          No businesses found{query && ` for "${query}"`}
        </p>
      </div>
    );
  }

  return (
    <div className="p-2 xl:p-0 w-full mt-10 flex flex-col gap-5">
      <h2 className="text-4xl mt-5 font-bold">
        Search Results {query && `for "${query}"`} ({businessesData.length})
      </h2>
      <div className="flex pt-5 flex-col gap-5">
        {businessesData.map((business) => (
          <div
            className="border-b border-border px-2 py-5 last:border-b-0"
            key={business.id}
          >
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="flex flex-row gap-5">
                <Link className="mt-2" href={`/yellow-books/${business.id}`}>
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
                    <Link href={business.link} className="text-sm text-muted">
                      {business.link}
                    </Link>
                  )}
                  <div className="flex flex-row flex-wrap gap-8 items-center">
                    <span>{business.averageReviewRating}</span>
                    <span className="text-xs text-muted">
                      {business._count.reviews} сэтгэгдлүүд
                    </span>
                  </div>
                  {business.summary && (
                    <p className="text-sm text-muted mt-2">
                      {business.summary}
                    </p>
                  )}
                </div>
              </div>
              {business.addresses[0] && (
                <div className="text-sm text-muted">
                  {business.addresses[0].address}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
