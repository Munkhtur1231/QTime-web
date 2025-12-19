'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Dropdown, Avatar } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

interface SidebarLayoutProps {
  children: ReactNode;
}

interface NavItem {
  icon: string;
  label: string;
  href: string;
  badge?: string | number;
}

const mainNavItems: NavItem[] = [
  { icon: '🏠', label: 'Home', href: '/dashboard' },
  { icon: '📅', label: 'Calendar', href: '/dashboard/calendar' },
  { icon: '👥', label: 'Team & Payroll', href: '/dashboard/team' },
  { icon: '😊', label: 'Clients', href: '/dashboard/clients' },
  { icon: '💰', label: 'Sales', href: '/dashboard/sales' },
  { icon: '🔗', label: 'Online booking', href: '/dashboard/booking' },
];

const secondaryNavItems: NavItem[] = [
  {
    icon: '📢',
    label: 'Marketing',
    href: '/dashboard/marketing',
    badge: 'New',
  },
  { icon: '👤', label: 'Team members', href: '/dashboard/team-members' },
  { icon: '📊', label: 'Analytics', href: '/dashboard/analytics' },
  { icon: '⚙️', label: 'Settings', href: '/dashboard/settings' },
  { icon: '❓', label: 'Help', href: '/dashboard/help' },
];

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    // Get user email
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/auth/login');
  };

  const menuItems = [
    {
      key: 'profile',
      label: 'Профайл',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Гарах',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
      danger: true,
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`w-[280px] bg-[#1a1d29] text-white py-8 fixed h-screen left-0 top-0 overflow-y-auto transition-transform duration-300 z-50 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="px-6 pb-8 border-b border-white/10">
          <Link href="/dashboard" className="text-3xl font-black text-white">
            QTime
          </Link>
          <p className="text-white/60 text-sm mt-2">Business Dashboard</p>
        </div>

        {/* Main Navigation */}
        <nav className="py-6">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-3.5 flex items-center gap-4 text-white/80 hover:bg-[#2d3142] hover:text-white transition-all border-l-3 ${
                  isActive
                    ? 'bg-[#2d3142] text-white border-l-indigo-500'
                    : 'border-l-transparent'
                }`}
              >
                <span className="text-2xl w-6 text-center">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Secondary Navigation */}
          <div className="mt-8 pt-8 border-t border-white/10">
            {secondaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3.5 flex items-center gap-4 text-white/80 hover:bg-[#2d3142] hover:text-white transition-all border-l-3 ${
                    isActive
                      ? 'bg-[#2d3142] text-white border-l-indigo-500'
                      : 'border-l-transparent'
                  }`}
                >
                  <span className="text-2xl w-6 text-center">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile at Bottom */}
          <div className="mt-8 pt-8 border-t border-white/10 px-6">
            <Dropdown menu={{ items: menuItems }} placement="topRight">
              <div className="flex items-center gap-3 cursor-pointer hover:bg-[#2d3142] p-3 rounded-lg transition-all">
                <Avatar
                  className="bg-gradient-to-br from-indigo-500 to-purple-600"
                  icon={<UserOutlined />}
                />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">
                    {userEmail || 'User'}
                  </div>
                  <div className="text-white/60 text-xs">Business Owner</div>
                </div>
              </div>
            </Dropdown>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-[280px]">{children}</main>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
}
