'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Layout, Menu, Avatar, Dropdown, Button, Spin } from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  ShopOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

interface BusinessDashboardLayoutProps {
  children: ReactNode;
}

const menuItems = [
  {
    key: '/business-dashboard',
    icon: <HomeOutlined />,
    label: 'Нүүр',
  },
  {
    key: '/business-dashboard/businesses',
    icon: <ShopOutlined />,
    label: 'Миний бизнесүүд',
  },
  {
    key: '/business-dashboard/bookings',
    icon: <CalendarOutlined />,
    label: 'Захиалгууд',
  },
  {
    key: '/business-dashboard/settings',
    icon: <SettingOutlined />,
    label: 'Тохиргоо',
  },
];

export default function BusinessDashboardLayout({
  children,
}: BusinessDashboardLayoutProps) {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [collapsed, setCollapsed] = useState(false);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Нэвтрэх шаардлагатай</h2>
          <Link href="/signin?callbackUrl=/business-dashboard">
            <Button type="primary" size="large">
              Нэвтрэх
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Профайл',
    },
    {
      key: 'customer',
      icon: <HomeOutlined />,
      label: 'Хэрэглэгч хуудас',
      onClick: () => (window.location.href = '/customer'),
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Гарах',
      danger: true,
      onClick: () => signOut({ callbackUrl: '/' }),
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-white border-r border-gray-200"
        width={260}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <Link href="/business-dashboard" className="flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            {!collapsed && (
              <span className="text-xl font-bold text-gray-900">QTime</span>
            )}
          </Link>
        </div>

        <div className="p-4">
          <Link href="/business-dashboard/businesses/new">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              block
              size="large"
              className="rounded-lg"
            >
              {!collapsed && 'Шинэ бизнес нэмэх'}
            </Button>
          </Link>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems.map((item) => ({
            ...item,
            label: <Link href={item.key}>{item.label}</Link>,
          }))}
          className="border-r-0"
        />
      </Sider>

      <Layout>
        <Header className="!bg-white !px-6 border-b border-gray-200 flex items-center justify-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="!w-10 !h-10"
          />

          <div className="flex items-center gap-4">
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg">
                <Avatar icon={<UserOutlined />} className="bg-blue-500" />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900 m-0">
                    {session.user.name || session.user.email}
                  </p>
                  <p className="text-xs text-gray-500 m-0">Бизнес эзэмшигч</p>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content className="bg-gray-50 p-6 overflow-auto">{children}</Content>
      </Layout>
    </Layout>
  );
}
