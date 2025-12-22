import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BookingWidget from '../_components/booking-widget';

type BusinessDetail = {
  id: number;
  name: string;
  email: string;
  photo: string;
  summary: string | null;
  description: string | null;
  link: string | null;
  category?: { name: string };
  addresses?: { id: number; address: string; latitude: number; longitude: number }[];
  _count?: { reviews: number };
  averageReviewRating?: number;
};

async function getBusiness(id: string): Promise<BusinessDetail> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to load business');
  }

  const json = await res.json();
  if (!json?.data) {
    notFound();
  }
  return json.data;
}

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const business = await getBusiness(id);

  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <Image
            src={business.photo}
            alt={business.name}
            width={200}
            height={200}
            className="rounded-2xl border border-border object-cover w-full max-w-sm md:max-w-xs h-auto"
          />
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-bold">{business.name}</h1>
            {business.category?.name && (
              <p className="text-sm text-gray-500">Ангилал: {business.category.name}</p>
            )}
            {business.summary && <p className="text-lg text-gray-700">{business.summary}</p>}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {typeof business.averageReviewRating === 'number' && (
                <span className="font-semibold">
                  {business.averageReviewRating.toFixed(1)} ⭐
                </span>
              )}
              {business._count?.reviews !== undefined && (
                <span>{business._count.reviews} сэтгэгдэл</span>
              )}
              {business.link && (
                <Link href={business.link} className="text-indigo-600 hover:underline">
                  {business.link}
                </Link>
              )}
              <span>{business.email}</span>
            </div>
            <BookingWidget businessName={business.name} />
          </div>
        </div>

        {business.description && (
          <div className="p-6 border border-border rounded-2xl bg-gray-50">
            <h2 className="text-xl font-semibold mb-3">Танилцуулга</h2>
            <p className="text-gray-700 leading-relaxed">{business.description}</p>
          </div>
        )}

        {business.addresses && business.addresses.length > 0 && (
          <div className="p-6 border border-border rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Байршил</h2>
            <ul className="space-y-2 text-gray-700">
              {business.addresses.map((addr) => (
                <li key={addr.id} className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">•</span>
                  <span>{addr.address}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
