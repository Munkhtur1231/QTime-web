import BusinessProfile from './_components/business-profile';
import BusinessReviews from './_components/business-reviews';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  BusinessProfileSkeleton,
  BusinessReviewsSkeleton,
} from '../_components/skeletons';

// Force dynamic rendering - skip SSG to avoid build-time API fetch issues
export const dynamic = 'force-dynamic';

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let businessData;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      notFound();
    }

    const response = await fetch(`${baseUrl}/businesses/${id}`, {
      next: {
        revalidate: false, // SSG: no time-based revalidation
        tags: [`business-${id}`], // On-demand revalidation via tag
      },
    });

    if (!response.ok) {
      notFound();
    }

    const data = await response.json();
    businessData = data?.data;

    if (!businessData) {
      notFound();
    }
  } catch (error) {
    // If fetch fails during build, show 404
    console.error('Error fetching business data:', error);
    notFound();
  }

  return (
    <div className="flex mb-10 justify-center items-center flex-col w-full">
      <div className="w-full max-w-7xl space-y-10 mx-auto">
        {/* Profile - streamed separately */}
        <Suspense fallback={<BusinessProfileSkeleton />}>
          <BusinessProfile businessData={businessData} />
        </Suspense>
        {/* Reviews - streamed separately with ISR */}
        <Suspense fallback={<BusinessReviewsSkeleton />}>
          <BusinessReviews id={Number(id)} />
        </Suspense>
      </div>
    </div>
  );
}
