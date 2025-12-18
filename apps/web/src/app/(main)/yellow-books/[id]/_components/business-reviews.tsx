'use server';
import * as FaIcons from 'react-icons/fa';
import { ReviewsListResponse } from '@businessdirectory/database';
export default async function BusinessReviews({ id }: { id: number }) {
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/reviews?businessId=${id}`,
    {
      next: {
        revalidate: 60, // ISR: Revalidate reviews every 60 seconds
        tags: [`reviews-${id}`],
      },
    }
  );
  const reviewsData: ReviewsListResponse[] = (await reviews.json()).data;
  const totalReviews = reviewsData.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviewsData.reduce((sum, review) => sum + review.rating, 0) /
          totalReviews
        ).toFixed(1)
      : '0.0';

  return (
    <div className="mt-10 space-y-5">
      <h3 className="text-4xl font-bold">{averageRating}</h3>
      <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
        <div className="flex flex-col max-w-sm w-full gap-4">
          <span className="text-lg font-semibold">Бүх сэтгэгдэл</span>
          <div className="gap-2 flex flex-row flex-wrap">
            <span className="text-muted text-sm">Нийт {totalReviews}</span>
            <span className="text-sm text-secondary pointer-cursor hover:text-blue-800 hover:underline">
              Сэтгэгдэл бичих
            </span>
          </div>
          <SideReviews reviewsData={reviewsData} />
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-between flex-wrap border-b border-border pb-5 items-center gap-3">
            <div className="border flex flex-row gap-2 items-center justify-center border-border rounded-xl p-4">
              <FaIcons.FaFilter className="size-5 text-muted" />
              <span className=" text-sm">Филтерүүд</span>
            </div>
            <div className="flex flex-row gap-2 items-baseline  ">
              Эрэмбэ (Хамгийн алдартай){' '}
              <FaIcons.FaChevronDown className="size-4" />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function SideReviews({
  reviewsData,
}: {
  reviewsData: ReviewsListResponse[];
}) {
  // Calculate rating statistics from reviews data
  const totalReviews = reviewsData.length;

  const ratingDistribution = {
    oneStar: reviewsData.filter((r) => r.rating === 1).length,
    twoStar: reviewsData.filter((r) => r.rating === 2).length,
    threeStar: reviewsData.filter((r) => r.rating === 3).length,
    fourStar: reviewsData.filter((r) => r.rating === 4).length,
    fiveStar: reviewsData.filter((r) => r.rating === 5).length,
  };

  const ratingPercentages = {
    oneStar:
      totalReviews > 0 ? (ratingDistribution.oneStar / totalReviews) * 100 : 0,
    twoStar:
      totalReviews > 0 ? (ratingDistribution.twoStar / totalReviews) * 100 : 0,
    threeStar:
      totalReviews > 0
        ? (ratingDistribution.threeStar / totalReviews) * 100
        : 0,
    fourStar:
      totalReviews > 0 ? (ratingDistribution.fourStar / totalReviews) * 100 : 0,
    fiveStar:
      totalReviews > 0 ? (ratingDistribution.fiveStar / totalReviews) * 100 : 0,
  };

  return (
    <div className="border w-full max-w-xs border-border rounded-xl py-4">
      <div className="flex flex-col gap-3 p-4">
        {/* 5 stars */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <span className="text-xs font-medium w-8">5 од</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            {ratingPercentages.fiveStar > 0 && (
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, ratingPercentages.fiveStar)
                  )}%`,
                }}
              ></div>
            )}
          </div>
          <span className="text-xs text-muted-foreground w-12 text-right">
            {ratingPercentages.fiveStar.toFixed(0)}%
          </span>
        </div>

        {/* 4 stars */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <span className="text-xs font-medium w-8">4 од</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            {ratingPercentages.fourStar > 0 && (
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, ratingPercentages.fourStar)
                  )}%`,
                }}
              ></div>
            )}
          </div>
          <span className="text-xs text-muted-foreground w-12 text-right">
            {ratingPercentages.fourStar.toFixed(0)}%
          </span>
        </div>

        {/* 3 stars */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <span className="text-xs font-medium w-8">3 од</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            {ratingPercentages.threeStar > 0 && (
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, ratingPercentages.threeStar)
                  )}%`,
                }}
              ></div>
            )}
          </div>
          <span className="text-xs text-muted-foreground w-12 text-right">
            {ratingPercentages.threeStar.toFixed(0)}%
          </span>
        </div>

        {/* 2 stars */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <span className="text-xs font-medium w-8">2 од</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            {ratingPercentages.twoStar > 0 && (
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, ratingPercentages.twoStar)
                  )}%`,
                }}
              ></div>
            )}
          </div>
          <span className="text-xs text-muted-foreground w-12 text-right">
            {ratingPercentages.twoStar.toFixed(0)}%
          </span>
        </div>

        {/* 1 star */}
        <div className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 accent-black" />
          <span className="text-xs font-medium w-8">1 од</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            {ratingPercentages.oneStar > 0 && (
              <div
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, ratingPercentages.oneStar)
                  )}%`,
                }}
              ></div>
            )}
          </div>
          <span className="text-xs text-muted-foreground w-12 text-right">
            {ratingPercentages.oneStar.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}
export async function ReviewCard({ review }: { review: ReviewsListResponse }) {
  return (
    <div className=" w-full  flex justify-between items-baseline py-4">
      <div className="flex flex-row gap-3 ">
        <h3 className="text-lg font-bold bg-secondary text-white rounded-full size-10 flex items-center justify-center">
          {review.user.firstName.slice(0, 1)}
        </h3>
        <div className="flex flex-col leading-tight">
          <div className="flex flex-row">
            {review.user.firstName} {review.user.lastName}
          </div>
          <span className="text-sm text-muted">
            Нийт {review.user.totalReviews} сэтгэгдэл
          </span>
          <span className="text-sm text-muted">{review.rating} од</span>
          {review.richContent ? (
            <span
              className="text-sm mt-2 text-muted"
              dangerouslySetInnerHTML={{ __html: review.richContent.content }}
            />
          ) : (
            <span className="text-sm mt-2 text-black">{review.comment}</span>
          )}
        </div>
      </div>
      <div>{new Date(review.createdAt).toISOString().slice(0, 10)}</div>
    </div>
  );
}
