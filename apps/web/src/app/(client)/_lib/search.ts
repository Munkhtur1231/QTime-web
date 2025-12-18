'use server';
import { BusinessWithExtras } from '@businessdirectory/database';

export interface SearchParams {
  q?: string;
  categoryId?: string;
  parentCategoryId?: string;
  isActive?: string;
  isInsideMall?: string;
}

export interface BusinessLocation {
  id: number;
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
  address: string;
}

export async function searchList(
  searchParams: SearchParams
): Promise<BusinessWithExtras[]> {
  const params = new URLSearchParams();

  if (searchParams.q) {
    params.append('search', searchParams.q);
  }
  if (searchParams.categoryId) {
    params.append('categoryId', searchParams.categoryId);
  }
  if (searchParams.parentCategoryId) {
    params.append('parentCategoryId', searchParams.parentCategoryId);
  }
  if (searchParams.isActive) {
    params.append('isActive', searchParams.isActive);
  }
  if (searchParams.isInsideMall) {
    params.append('isInsideMall', searchParams.isInsideMall);
  }

  params.append('limit', '50'); // Get more results for map

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?${params.toString()}`,
    {
      cache: 'no-store', // SSR: No caching, always fresh
    }
  );

  if (!response.ok) {
    return [];
  }

  const result = await response.json();
  return result.data || [];
}
