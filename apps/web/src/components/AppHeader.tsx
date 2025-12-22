'use client';

import Link from 'next/link';
import { Button, Tag } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

export default function AppHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-9 h-9"
              viewBox="0 0 24 24"
              fill="url(#gradient)"
            >
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
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Үйлчилгээ
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="/search"
              className="text-gray-900 hover:text-indigo-600 font-semibold transition-colors"
            >
              Бизнесүүд
            </Link>
            <Tag icon={<EnvironmentOutlined />} color="purple">
              Улаанбаатар
            </Tag>
            <Link href="/dashboard">
              <Button type="default" className="rounded-xl">
                Бизнес нэвтрэх
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button type="default" className="rounded-xl">
                Нэвтрэх
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                type="primary"
                className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none hover:from-indigo-600 hover:to-purple-700"
              >
                Бүртгүүлэх
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
