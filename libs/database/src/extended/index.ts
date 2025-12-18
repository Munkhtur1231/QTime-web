import {
  Business,
  BusinessCategory,
  BusinessParentCategory,
  Reviews,
  RichReviewContent,
} from '@businessdirectory/database';

export type BusinessWithExtras = Business & {
  category: {
    id: number;
    name: string;
    icon: string;
    parentCategory: { id: number; icon: string; name: string };
  };
  addresses: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    businessId: number;
    address: string;
    latitude: number;
    longitude: number;
  }[];
  _count: {
    reviews: number;
    admins: number;
  };
  averageReviewRating: number | null;
};
export type BusinessCategoryListResponse = BusinessCategory & {
  _count: { businesses: number };
  parentCategory: { id: number; icon: string; name: string };
};
export type ReviewsListResponse = Reviews & {
  richContent: RichReviewContent | null;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    totalReviews: number;
  };
  business: { id: number; name: string; photo: string };
};
export type BusinessParentCategoryListResponse = BusinessParentCategory & {
  _count: { categories: number };
  categories: BusinessCategory[];
};
export type BusinessProfileResponse = Business & {
  category: {
    id: number;
    name: string;
    icon: string;
    parentCategory: { id: number; name: string; icon: string };
  };
  addresses: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    businessId: number;
    address: string;
    latitude: number;
    longitude: number;
  }[];
  admins: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    businessId: number;
    userId: number;
    user: {
      id: number;
      email: string;
      firstName: string | null;
      lastName: string | null;
    };
  }[];
  reviewStatistics: {
    totalReviews: number;
    averageRating: number | null;
    ratingDistribution: {
      oneStar: number;
      twoStar: number;
      threeStar: number;
      fourStar: number;
      fiveStar: number;
    };
    ratingPercentages: {
      oneStar: number;
      twoStar: number;
      threeStar: number;
      fourStar: number;
      fiveStar: number;
    };
  };
  _count: {
    reviews: number;
    admins: number;
  };
};
