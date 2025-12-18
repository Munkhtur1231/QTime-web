'use server';
import { ReviewsListResponse } from '@businessdirectory/database';
import Link from 'next/link';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import Image from 'next/image';
export default async function NewComments() {
  try {
    const comments = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/reviews?page=1&limit=12&sortBy=createdAt&sortOrder=desc`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
          tags: ['reviews'], // Cache tag for on-demand revalidation
        },
      }
    );
    const commentsData: ReviewsListResponse[] =
      (await comments.json())?.data || [];

    if (!commentsData || commentsData.length === 0) {
      return null;
    }

    return (
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h3>Шинэ сэтгэгдлүүд</h3>
          <div className="flex items-center gap-2">
            <CiCircleChevLeft className="size-8 cursor-pointer hover:scale-110 transition-all duration-300 xl:size-10" />
            <CiCircleChevRight className="size-8 cursor-pointer hover:scale-110 transition-all duration-300 xl:size-10" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {commentsData.map((comment, id) => (
            <CommentCard key={id} comment={comment} />
          ))}
        </div>
      </div>
    );
  } catch {
    return null;
  }
}
function CommentCard({ comment }: { comment: ReviewsListResponse }) {
  if (!comment?.user || !comment?.business) {
    return null;
  }

  const initialLetterOfName = comment.user.firstName?.[0] || '?';
  return (
    <div className="rounded-xl border flex flex-col gap-2 border-border p-4">
      <div className=" gap-2 flex flex-row">
        <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
          {initialLetterOfName}
        </div>

        <div className="flex leading-tight flex-col gap-2">
          <h3 className="text-base">{comment.user.firstName || 'User'}</h3>
          <p className="text-sm text-muted">{comment.rating}</p>
        </div>
      </div>
      <p className="text-sm text-muted">{comment.comment}</p>
      <div className="border-t flex flex-row gap-2 border-border pt-2 items-center">
        <Image
          src={comment.business.photo}
          alt={comment.business.name}
          width={40}
          height={40}
          className="rounded-xl border border-border"
        />
        <Link
          className="text-sm text-muted"
          href={`/yellow-books/${comment.business.id}`}
        >
          {comment.business.name}
        </Link>
      </div>
    </div>
  );
}
