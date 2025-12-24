'use client';

import { useSession } from 'next-auth/react';
import {
  Card,
  Button,
  Tag,
  Form,
  Input,
  message,
  List,
  Spin,
  Rate,
  Empty,
  Avatar,
  Statistic,
  Badge,
} from 'antd';
import {
  CalendarOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppHeader from '../../../components/AppHeader';

// Төлөвийн монгол орчуулга ба өнгө
const statusConfig: Record<
  string,
  { label: string; color: string; icon: React.ReactNode }
> = {
  PENDING: {
    label: 'Хүлээгдэж буй',
    color: 'gold',
    icon: <ExclamationCircleOutlined />,
  },
  CONFIRMED: {
    label: 'Баталгаажсан',
    color: 'green',
    icon: <CheckCircleOutlined />,
  },
  CANCELLED: {
    label: 'Цуцлагдсан',
    color: 'red',
    icon: <CloseCircleOutlined />,
  },
};

type Review = {
  id: number;
  rating: number;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  business: {
    id: number;
    name: string;
    photo: string;
  };
};

type UserProfile = {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  role: string;
};

type Booking = {
  id: number;
  startAt: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  customerName: string;
  customerPhone: string;
  createdAt: string;
  business: {
    id: number;
    name: string;
    photo: string;
  };
};

export default function UserDashboardPage() {
  const { data: session, update } = useSession();
  const user = session?.user;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [form] = Form.useForm();
  const [editable, setEditable] = useState(false);

  // Тоо статистик тооцоолох
  const pendingCount = bookings.filter((b) => b.status === 'PENDING').length;
  const confirmedCount = bookings.filter(
    (b) => b.status === 'CONFIRMED'
  ).length;
  const upcomingBookings = bookings.filter((b) => {
    const bookingDate = new Date(b.startAt);
    const now = new Date();
    return bookingDate > now && b.status !== 'CANCELLED';
  });

  // Fetch user profile and reviews
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return;

      try {
        setLoading(true);

        // Fetch user profile
        const userRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.accessToken}`,
            },
          }
        );

        if (userRes.ok) {
          const userData = await userRes.json();
          setUserProfile(userData.data);

          // Prefill form with user data
          form.setFieldsValue({
            firstName: userData.data.firstName || '',
            lastName: userData.data.lastName || '',
            email: userData.data.email || '',
            phone: userData.data.phone || '',
          });
        }

        // Fetch user's reviews
        const reviewsRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/reviews?userId=${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.accessToken}`,
            },
          }
        );

        if (reviewsRes.ok) {
          const reviewsData = await reviewsRes.json();
          setReviews(reviewsData.data || []);
        }

        // Fetch user's bookings
        const bookingsRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/me?limit=50`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.accessToken}`,
            },
          }
        );

        if (bookingsRes.ok) {
          const bookingsData = await bookingsRes.json();
          setBookings(bookingsData.data || []);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        message.error('Мэдээлэл ачаалахад алдаа гарлаа');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user?.id, session?.user.accessToken, form]);

  const onUpdateProfile = async (values: any) => {
    if (!user?.id) return;

    try {
      setUpdating(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await res.json();
      setUserProfile(data.data);

      // Update session with new user data
      await update({
        ...session,
        user: {
          ...session?.user,
          name: `${data.data.firstName || ''} ${
            data.data.lastName || ''
          }`.trim(),
        },
      });

      message.success('Мэдээлэл амжилттай шинэчлэгдлээ');
      setEditable(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      message.error('Мэдээлэл шинэчлэхэд алдаа гарлаа');
    } finally {
      setUpdating(false);
    }
  };

  const onDeleteReview = async (id: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error('Failed to delete review');
      }

      setReviews((prev) => prev.filter((r) => r.id !== id));
      message.success('Сэтгэгдэл амжилттай устгагдлаа');
    } catch (error) {
      console.error('Error deleting review:', error);
      message.error('Сэтгэгдэл устгахад алдаа гарлаа');
    }
  };

  const onCancelBooking = async (id: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${id}/cancel`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        message.error(err?.message || 'Захиалга цуцлахад алдаа гарлаа');
        return;
      }

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: 'CANCELLED' } : b))
      );
      message.success('Захиалга цуцлагдлаа');
    } catch (error) {
      console.error('Error cancelling booking:', error);
      message.error('Захиалга цуцлахад алдаа гарлаа');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      <Spin spinning={loading} size="large">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-500">Тавтай морил</p>
              <h1 className="text-3xl font-bold">
                {userProfile?.firstName || userProfile?.lastName
                  ? `${userProfile.firstName || ''} ${
                      userProfile.lastName || ''
                    }`.trim()
                  : user?.email || 'Миний самбар'}
              </h1>
              {userProfile?.role && (
                <Tag color="blue" className="mt-2">
                  {userProfile.role === 'USER'
                    ? 'Хэрэглэгч'
                    : userProfile.role === 'ADMIN'
                    ? 'Админ'
                    : userProfile.role}
                </Tag>
              )}
            </div>
            <Link href="/customer">
              <Button type="primary" className="rounded-lg">
                Үйлчилгээ хайх
              </Button>
            </Link>
          </div>

          {/* Статистик карт */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="rounded-xl shadow-sm">
              <Statistic
                title="Нийт захиалга"
                value={bookings.length}
                prefix={<CalendarOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
            <Card className="rounded-xl shadow-sm">
              <Statistic
                title="Хүлээгдэж буй"
                value={pendingCount}
                prefix={<ClockCircleOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
            <Card className="rounded-xl shadow-sm">
              <Statistic
                title="Баталгаажсан"
                value={confirmedCount}
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
            <Card className="rounded-xl shadow-sm">
              <Statistic
                title="Ирэх захиалга"
                value={upcomingBookings.length}
                prefix={<CalendarOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card
              title="Миний мэдээлэл"
              extra={
                <Button type="link" onClick={() => setEditable((v) => !v)}>
                  {editable ? 'Цуцлах' : 'Засах'}
                </Button>
              }
              className="rounded-xl shadow-sm"
              styles={{ body: { padding: 20 } }}
            >
              <Form layout="vertical" form={form} onFinish={onUpdateProfile}>
                <Form.Item label="Овог" name="lastName">
                  <Input placeholder="Овог" disabled={!editable} />
                </Form.Item>
                <Form.Item label="Нэр" name="firstName">
                  <Input placeholder="Нэр" disabled={!editable} />
                </Form.Item>
                <Form.Item
                  label="И-мэйл"
                  name="email"
                  rules={[{ required: true, message: 'И-мэйл оруулна уу' }]}
                >
                  <Input placeholder="name@example.com" disabled />
                </Form.Item>
                <Form.Item label="Утас" name="phone">
                  <Input placeholder="99119911" disabled={!editable} />
                </Form.Item>
                {editable && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={updating}
                  >
                    Шинэчлэх
                  </Button>
                )}
              </Form>
            </Card>

            <Card
              title="Миний захиалгууд"
              className="rounded-xl shadow-sm lg:col-span-2"
              styles={{ body: { padding: 20 } }}
              extra={
                <Badge count={pendingCount} offset={[10, 0]}>
                  <Tag color="blue">{bookings.length} захиалга</Tag>
                </Badge>
              }
            >
              {bookings.length === 0 ? (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="Та одоогоор цаг захиалга хийгээгүй байна"
                >
                  <Link href="/customer">
                    <Button type="primary">Үйлчилгээ хайж цаг захиалах</Button>
                  </Link>
                </Empty>
              ) : (
                <List
                  itemLayout="horizontal"
                  dataSource={bookings}
                  pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                    size: 'small',
                  }}
                  renderItem={(item) => {
                    const config = statusConfig[item.status];
                    const bookingDate = new Date(item.startAt);
                    const isPast = bookingDate < new Date();

                    return (
                      <List.Item
                        className={`${
                          isPast && item.status !== 'CANCELLED'
                            ? 'opacity-60'
                            : ''
                        }`}
                        actions={[
                          <Button
                            key="view"
                            type="link"
                            href={`/yellow-books/${item.business.id}`}
                          >
                            Дэлгэрэнгүй
                          </Button>,
                          <Button
                            key="cancel"
                            type="link"
                            danger
                            disabled={item.status === 'CANCELLED' || isPast}
                            onClick={() => onCancelBooking(item.id)}
                          >
                            {item.status === 'CANCELLED'
                              ? 'Цуцлагдсан'
                              : 'Цуцлах'}
                          </Button>,
                        ]}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={item.business.photo}
                              size={48}
                              shape="square"
                              className="rounded-lg"
                            />
                          }
                          title={
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold">
                                {item.business.name}
                              </span>
                              <Tag color={config.color} icon={config.icon}>
                                {config.label}
                              </Tag>
                              {isPast && item.status !== 'CANCELLED' && (
                                <Tag color="default">Өнгөрсөн</Tag>
                              )}
                            </div>
                          }
                          description={
                            <div className="text-gray-600">
                              <p className="mb-1 flex items-center gap-2">
                                <CalendarOutlined />
                                {bookingDate.toLocaleDateString('mn-MN', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  weekday: 'short',
                                })}
                                <ClockCircleOutlined className="ml-2" />
                                {bookingDate.toLocaleTimeString('mn-MN', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </p>
                              <p className="text-xs text-gray-400 flex items-center gap-1">
                                <PhoneOutlined /> {item.customerPhone}
                              </p>
                            </div>
                          }
                        />
                      </List.Item>
                    );
                  }}
                />
              )}
            </Card>

            <Card
              title="Миний сэтгэгдэлүүд"
              className="rounded-xl shadow-sm lg:col-span-3"
              styles={{ body: { padding: 20 } }}
              extra={<Tag color="purple">{reviews.length} сэтгэгдэл</Tag>}
            >
              {reviews.length === 0 ? (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="Та одоогоор сэтгэгдэл үлдээгээгүй байна"
                >
                  <Link href="/customer">
                    <Button type="primary">
                      Үйлчилгээ хайж сэтгэгдэл үлдээх
                    </Button>
                  </Link>
                </Empty>
              ) : (
                <List
                  itemLayout="horizontal"
                  dataSource={reviews}
                  pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                    size: 'small',
                  }}
                  renderItem={(item) => (
                    <List.Item
                      actions={[
                        <Button
                          key="view"
                          type="link"
                          href={`/yellow-books/${item.business.id}`}
                        >
                          Дэлгэрэнгүй
                        </Button>,
                        <Button
                          key="delete"
                          type="link"
                          danger
                          onClick={() => onDeleteReview(item.id)}
                        >
                          Устгах
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={item.business.photo}
                            size={48}
                            shape="square"
                            className="rounded-lg"
                          />
                        }
                        title={
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">
                              {item.business.name}
                            </span>
                            <Rate
                              disabled
                              value={item.rating}
                              className="text-sm"
                            />
                          </div>
                        }
                        description={
                          <div className="text-gray-600">
                            <p className="mb-2">
                              {item.comment || 'Сэтгэгдэл үлдээгээгүй'}
                            </p>
                            <span className="text-xs text-gray-400">
                              {new Date(item.createdAt).toLocaleDateString(
                                'mn-MN',
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }
                              )}
                            </span>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </div>
        </div>
      </Spin>
    </div>
  );
}
