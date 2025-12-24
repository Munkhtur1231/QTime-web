'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input, Spin, Empty, Tag, Select, Button, Pagination } from 'antd';
import {
  SearchOutlined,
  EnvironmentOutlined,
  UnorderedListOutlined,
  EnvironmentFilled,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import map to avoid SSR issues
const MapComponent = dynamic(() => import('./_components/map-view'), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <Spin size="large" />
    </div>
  ),
});

type Business = {
  id: number;
  name: string;
  email: string;
  photo: string;
  summary: string | null;
  link: string | null;
  category?: { id: number; name: string };
  addresses?: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
  }[];
  _count?: { reviews: number };
  averageReviewRating?: number;
};

type Category = {
  id: number;
  name: string;
};

export default function YellowBooksPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'split' | 'list' | 'map'>('split');
  const [hoveredBusiness, setHoveredBusiness] = useState<number | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 20;

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/business-categories`
        );
        if (res.ok) {
          const data = await res.json();
          setCategories(data.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch businesses
  const fetchBusinesses = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pageSize.toString(),
      });

      if (searchTerm) {
        params.append('search', searchTerm);
      }
      if (selectedCategory) {
        params.append('categoryId', selectedCategory.toString());
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?${params}`
      );
      if (res.ok) {
        const data = await res.json();
        setBusinesses(data.data || []);
        setTotal(data.meta?.total || 0);
      }
    } catch (error) {
      console.error('Failed to fetch businesses:', error);
    } finally {
      setLoading(false);
    }
  }, [page, searchTerm, selectedCategory]);

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const businessesWithLocation = businesses.filter(
    (b) =>
      b.addresses &&
      b.addresses.length > 0 &&
      b.addresses[0].latitude &&
      b.addresses[0].longitude
  );

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-gray-50">
      {/* Header with Search and Filters */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-base">📒</span>
              </div>
              <h1 className="text-lg font-semibold text-amber-800">
                Yellow Books
              </h1>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Input
                placeholder="Бизнес хайх..."
                prefix={<SearchOutlined className="text-gray-400" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 rounded-lg"
                size="middle"
                allowClear
              />
              <Select
                placeholder="Ангилал"
                value={selectedCategory}
                onChange={(value) => {
                  setSelectedCategory(value);
                  setPage(1);
                }}
                allowClear
                className="w-full sm:w-40"
                size="middle"
                options={categories.map((c) => ({
                  value: c.id,
                  label: c.name,
                }))}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white rounded-lg border border-amber-200 p-0.5 gap-0.5">
              <Button
                type={viewMode === 'split' ? 'primary' : 'text'}
                size="small"
                icon={<EnvironmentFilled />}
                onClick={() => setViewMode('split')}
                className={`rounded-md ${
                  viewMode === 'split'
                    ? 'bg-amber-500 border-amber-500'
                    : 'text-gray-600'
                }`}
              >
                Хоёулаа
              </Button>
              <Button
                type={viewMode === 'list' ? 'primary' : 'text'}
                size="small"
                icon={<UnorderedListOutlined />}
                onClick={() => setViewMode('list')}
                className={`rounded-md ${
                  viewMode === 'list'
                    ? 'bg-amber-500 border-amber-500'
                    : 'text-gray-600'
                }`}
              >
                Жагсаалт
              </Button>
              <Button
                type={viewMode === 'map' ? 'primary' : 'text'}
                size="small"
                icon={<EnvironmentOutlined />}
                onClick={() => setViewMode('map')}
                className={`rounded-md ${
                  viewMode === 'map'
                    ? 'bg-amber-500 border-amber-500'
                    : 'text-gray-600'
                }`}
              >
                Зураг
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Business List */}
        {(viewMode === 'split' || viewMode === 'list') && (
          <div
            className={`${
              viewMode === 'split'
                ? 'w-1/2 border-r border-gray-200'
                : 'w-full max-w-6xl mx-auto'
            } overflow-y-auto bg-white p-3`}
          >
            {loading ? (
              <div className="flex items-center justify-center h-40">
                <Spin size="default" />
              </div>
            ) : businesses.length === 0 ? (
              <Empty description="Бизнес олдсонгүй" className="mt-12" />
            ) : (
              <>
                <p className="text-gray-400 text-sm mb-3">
                  Нийт {total} бизнес
                </p>
                <div
                  className={`grid gap-3 ${
                    viewMode === 'list'
                      ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                      : 'grid-cols-1'
                  }`}
                >
                  {businesses.map((business) => (
                    <Link
                      href={`/yellow-books/${business.id}`}
                      key={business.id}
                    >
                      <div
                        className={`bg-white rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
                          hoveredBusiness === business.id
                            ? 'ring-2 ring-amber-300 shadow-md border-amber-300'
                            : 'border-gray-100'
                        }`}
                        onMouseEnter={() => setHoveredBusiness(business.id)}
                        onMouseLeave={() => setHoveredBusiness(null)}
                      >
                        <div className="relative h-28 overflow-hidden rounded-t-lg">
                          <Image
                            src={business.photo || '/placeholder-business.jpg'}
                            alt={business.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-2.5">
                          <div className="flex items-start justify-between gap-1 mb-1">
                            <h3 className="font-medium text-sm text-gray-800 truncate">
                              {business.name}
                            </h3>
                            {business.averageReviewRating && (
                              <span className="flex items-center gap-0.5 text-xs text-amber-500 whitespace-nowrap">
                                ⭐{' '}
                                {Number(business.averageReviewRating).toFixed(
                                  1
                                )}
                              </span>
                            )}
                          </div>
                          {business.category && (
                            <Tag
                              color="gold"
                              className="text-xs px-1.5 py-0 mb-1"
                            >
                              {business.category.name}
                            </Tag>
                          )}
                          {business.addresses?.[0] && (
                            <p className="text-gray-400 text-xs flex items-center gap-1 truncate">
                              <EnvironmentOutlined className="text-[10px]" />
                              {business.addresses[0].address}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-6 flex justify-center">
                  <Pagination
                    current={page}
                    total={total}
                    pageSize={pageSize}
                    onChange={(p) => setPage(p)}
                    showSizeChanger={false}
                  />
                </div>
              </>
            )}
          </div>
        )}

        {/* Map */}
        {(viewMode === 'split' || viewMode === 'map') && (
          <div
            className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} h-full`}
          >
            <MapComponent
              businesses={businessesWithLocation}
              hoveredBusiness={hoveredBusiness}
              selectedBusiness={selectedBusiness}
              onBusinessHover={setHoveredBusiness}
              onBusinessSelect={setSelectedBusiness}
            />
          </div>
        )}
      </div>
    </div>
  );
}
