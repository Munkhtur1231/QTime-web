'use client';

import Link from 'next/link';
import { Button, Tag, Dropdown, MenuProps } from 'antd';
import {
  EnvironmentOutlined,
  MenuOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  ShopOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { useSession, SessionProvider } from 'next-auth/react';
import UserMenu from './UserMenu';
import { useState, useEffect } from 'react';

function AppHeaderContent() {
  const { data: session } = useSession();
  const user = session?.user;
  const [isBusinessAdmin, setIsBusinessAdmin] = useState(false);

  // Check if user is business admin
  useEffect(() => {
    const checkBusinessAdmin = async () => {
      if (!user?.id || !session?.user?.accessToken) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?adminUserId=${user.id}&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setIsBusinessAdmin(data?.data && data.data.length > 0);
        }
      } catch (error) {
        console.error('Error checking business admin:', error);
      }
    };

    checkBusinessAdmin();
  }, [user?.id, session?.user?.accessToken]);

  const mobileMenuItems: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link href="/">Нүүр</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: 'customer',
      label: <Link href="/customer">Үйлчилгээ хайх</Link>,
      icon: <SearchOutlined />,
    },
    {
      key: 'yellow-books',
      label: <Link href="/yellow-books">Yellow Books</Link>,
      icon: <BookOutlined />,
    },
    ...(user
      ? [
          {
            key: 'dashboard',
            label: <Link href="/user/dashboard">Миний самбар</Link>,
            icon: <UserOutlined />,
          },
        ]
      : []),
    ...(isBusinessAdmin || user?.role === 'ADMIN' || user?.role === 'SUPERADMIN'
      ? [
          {
            key: 'business',
            label: <Link href="/business-dashboard">Бизнес удирдлага</Link>,
            icon: <ShopOutlined />,
          },
        ]
      : []),
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="url(#gradient)">
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.85-6-4.37-6-8.5V8.37l6-3.55 6 3.55V11.5c0 4.13-2.14 7.65-6 8.5z" />
            </svg>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              QTime
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/customer"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Үйлчилгээ хайх
            </Link>
            <Link
              href="/yellow-books"
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors flex items-center gap-1"
            >
              Газрын зураг
            </Link>
            {user && (
              <Link
                href="/user/dashboard"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Миний самбар
              </Link>
            )}
            {/* {(isBusinessAdmin ||
              user?.role === 'ADMIN' ||
              user?.role === 'SUPERADMIN') && (
              <Link
                href="/business-dashboard"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Бизнес удирдлага
              </Link>
            )} */}
            <Tag icon={<EnvironmentOutlined />} color="purple">
              Улаанбаатар
            </Tag>
            {user ? (
              <UserMenu
                name={user.name || user.email || 'Хэрэглэгч'}
                role={user.role as string | undefined}
              />
            ) : (
              <>
                <Link href="/signin">
                  <Button type="default" className="rounded-xl">
                    Нэвтрэх
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    type="primary"
                    className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none hover:from-indigo-600 hover:to-purple-700"
                  >
                    Бүртгүүлэх
                  </Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            {user ? (
              <UserMenu
                name={user.name || user.email || 'Хэрэглэгч'}
                role={user.role as string | undefined}
              />
            ) : (
              <Link href="/signin">
                <Button type="primary" size="small" className="rounded-lg">
                  Нэвтрэх
                </Button>
              </Link>
            )}
            <Dropdown menu={{ items: mobileMenuItems }} trigger={['click']}>
              <Button icon={<MenuOutlined />} />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function AppHeader() {
  // Defensive: wrap in SessionProvider in case a parent forgets
  return (
    <SessionProvider>
      <AppHeaderContent />
    </SessionProvider>
  );
}
