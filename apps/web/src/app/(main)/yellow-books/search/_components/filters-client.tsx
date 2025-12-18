'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

interface FiltersClientProps {
  initial: {
    q?: string;
    categoryId?: string;
    parentCategoryId?: string;
    isActive?: string;
    isInsideMall?: string;
  };
}

export default function FiltersClient({ initial }: FiltersClientProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initial.q || '');
  const [isActive, setIsActive] = useState(initial.isActive || '');
  const [isInsideMall, setIsInsideMall] = useState(initial.isInsideMall || '');
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to update URL with current filters - memoized to prevent infinite loops
  const updateSearch = useCallback(
    (newQuery: string, newIsActive: string, newIsInsideMall: string) => {
      const params = new URLSearchParams();

      if (newQuery.trim()) {
        params.set('q', newQuery.trim());
      }
      if (newIsActive) {
        params.set('isActive', newIsActive);
      }
      if (newIsInsideMall) {
        params.set('isInsideMall', newIsInsideMall);
      }

      const queryString = params.toString();
      router.push(
        `/yellow-books/search${queryString ? `?${queryString}` : ''}`
      );
    },
    [router]
  );

  // Track if component has mounted to avoid initial duplicate calls
  const isFirstRender = useRef(true);

  // Debounced search for input field only
  useEffect(() => {
    // Skip initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer for debounced search (500ms delay)
    debounceTimerRef.current = setTimeout(() => {
      updateSearch(query, isActive, isInsideMall);
    }, 500);

    // Cleanup on unmount or when query changes
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, isActive, isInsideMall, updateSearch]); // Include all dependencies

  // Immediate search for select changes
  useEffect(() => {
    // Skip initial render
    if (isFirstRender.current) {
      return;
    }

    // Clear any pending debounced search
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Immediate update for select changes
    updateSearch(query, isActive, isInsideMall);
  }, [isActive, isInsideMall, query, updateSearch]); // Include all dependencies

  const clearFilters = () => {
    setQuery('');
    setIsActive('');
    setIsInsideMall('');
    router.push('/yellow-books/search');
  };

  return (
    <div className="w-full mb-6">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Бизнес хайх..."
            className="w-full px-4 py-3 pl-12 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-4 items-end">
          <div className="min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Төлөв</label>
            <select
              value={isActive}
              onChange={(e) => setIsActive(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Бүгд</option>
              <option value="true">Идэвхтэй</option>
              <option value="false">Идэвхгүй</option>
            </select>
          </div>

          <div className="min-w-[150px]">
            <label className="block text-sm font-medium mb-2">Байршил</label>
            <select
              value={isInsideMall}
              onChange={(e) => setIsInsideMall(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Бүх байршил</option>
              <option value="true">Суперрмаркет дотор</option>
              <option value="false">Суперрмаркет гадна</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-2 border border-border rounded-xl hover:bg-gray-50 transition-colors"
            >
              Цэвэрлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
