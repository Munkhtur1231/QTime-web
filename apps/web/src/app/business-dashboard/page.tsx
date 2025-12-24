'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Card,
  Statistic,
  Row,
  Col,
  List,
  Avatar,
  Tag,
  Badge,
  Empty,
  Spin,
  Button,
} from 'antd';
import {
  ShopOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import dayjs from 'dayjs';
import 'dayjs/locale/mn';

dayjs.locale('mn');

type Business = {
  id: number;
  name: string;
  photo: string;
  isActive: boolean;
};

type Booking = {
  id: number;
  startAt: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  customerName: string;
  customerPhone: string;
  business: {
    id: number;
    name: string;
  };
};

const statusConfig = {
  PENDING: {
    label: 'Хүлээгдэж буй',
    color: 'gold',
    icon: <ClockCircleOutlined />,
  },
  CONFIRMED: {
    label: 'Баталгаажсан',
    color: 'green',
    icon: <CheckCircleOutlined />,
  },
  CANCELLED: { label: 'Цуцлагдсан', color: 'red', icon: null },
};

export default function BusinessDashboardHome() {
  const { data: session } = useSession();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.accessToken) {
        setLoading(false);
        return;
      }

      try {
        const [bizRes, bookRes] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?adminUserId=${session.user.id}`,
            {
              headers: { Authorization: `Bearer ${session.user.accessToken}` },
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/business?limit=50`,
            {
              headers: { Authorization: `Bearer ${session.user.accessToken}` },
            }
          ),
        ]);

        if (bizRes.ok) {
          const bizData = await bizRes.json();
          setBusinesses(bizData.data || []);
        }

        if (bookRes.ok) {
          const bookData = await bookRes.json();
          setBookings(bookData.data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  const pendingCount = bookings.filter((b) => b.status === 'PENDING').length;
  const confirmedCount = bookings.filter(
    (b) => b.status === 'CONFIRMED'
  ).length;
  const todayBookings = bookings.filter((b) =>
    dayjs(b.startAt).isSame(dayjs(), 'day')
  );
  const upcomingBookings = bookings
    .filter(
      (b) => dayjs(b.startAt).isAfter(dayjs()) && b.status !== 'CANCELLED'
    )
    .sort(
      (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
    )
    .slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Сайн байна уу, {session?.user?.name || 'Хэрэглэгч'}!
          </h1>
          <p className="text-gray-500">
            {dayjs().format('YYYY оны MMMM D, dddd')}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Statistic
              title="Миний бизнесүүд"
              value={businesses.length}
              prefix={<ShopOutlined className="text-blue-500" />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Statistic
              title="Өнөөдрийн захиалга"
              value={todayBookings.length}
              prefix={<CalendarOutlined className="text-purple-500" />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Statistic
              title="Хүлээгдэж буй"
              value={pendingCount}
              prefix={<ClockCircleOutlined className="text-yellow-500" />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Statistic
              title="Баталгаажсан"
              value={confirmedCount}
              prefix={<CheckCircleOutlined className="text-green-500" />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row gutter={[16, 16]}>
        {/* My Businesses */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <span className="flex items-center gap-2">
                <ShopOutlined /> Миний бизнесүүд
              </span>
            }
            extra={
              <Link href="/business-dashboard/businesses">
                <Button type="link" icon={<ArrowRightOutlined />}>
                  Бүгдийг харах
                </Button>
              </Link>
            }
            className="rounded-xl shadow-sm h-full"
          >
            {businesses.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Та бизнес бүртгүүлээгүй байна"
              >
                <Link href="/business-dashboard/businesses/new">
                  <Button type="primary">Шинэ бизнес нэмэх</Button>
                </Link>
              </Empty>
            ) : (
              <List
                dataSource={businesses.slice(0, 4)}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={item.photo}
                          icon={!item.photo && <ShopOutlined />}
                          size="large"
                          className="bg-blue-100"
                        />
                      }
                      title={
                        <Link
                          href={`/business-dashboard/businesses/${item.id}`}
                          className="font-medium"
                        >
                          {item.name}
                        </Link>
                      }
                      description={
                        <Badge
                          status={item.isActive ? 'success' : 'default'}
                          text={item.isActive ? 'Идэвхтэй' : 'Идэвхгүй'}
                        />
                      }
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>

        {/* Upcoming Bookings */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <span className="flex items-center gap-2">
                <CalendarOutlined /> Ирэх захиалгууд
              </span>
            }
            extra={
              <Link href="/business-dashboard/bookings">
                <Button type="link" icon={<ArrowRightOutlined />}>
                  Бүгдийг харах
                </Button>
              </Link>
            }
            className="rounded-xl shadow-sm h-full"
          >
            {upcomingBookings.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Ирэх захиалга байхгүй"
              />
            ) : (
              <List
                dataSource={upcomingBookings}
                renderItem={(item) => {
                  const config = statusConfig[item.status];
                  return (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title={
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium">
                              {item.customerName}
                            </span>
                            <Tag color={config.color} icon={config.icon}>
                              {config.label}
                            </Tag>
                          </div>
                        }
                        description={
                          <div className="text-gray-500 text-sm">
                            <div>
                              {dayjs(item.startAt).format('MM/DD HH:mm')} -{' '}
                              {item.business.name}
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  );
                }}
              />
            )}
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Card className="rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Түргэн үйлдлүүд</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/business-dashboard/businesses/new">
            <Button type="primary" icon={<ShopOutlined />} size="large">
              Шинэ бизнес нэмэх
            </Button>
          </Link>
          <Link href="/business-dashboard/bookings">
            <Button icon={<CalendarOutlined />} size="large">
              Захиалга удирдах
            </Button>
          </Link>
          <Link href="/customer">
            <Button icon={<UserOutlined />} size="large">
              Хэрэглэгч хуудас
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
