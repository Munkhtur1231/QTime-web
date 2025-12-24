'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Card,
  Descriptions,
  Button,
  Tag,
  Avatar,
  Spin,
  Empty,
  Statistic,
  Row,
  Col,
  List,
  Badge,
  Tabs,
  message,
  Modal,
} from 'antd';
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkOutlined,
  CalendarOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/mn';

dayjs.locale('mn');

type Business = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  photo: string;
  link?: string;
  summary: string;
  description?: string;
  isActive: boolean;
  isInsideMall: boolean;
  createdAt: string;
  category?: {
    id: number;
    name: string;
    parentCategory: {
      name: string;
    };
  };
  addresses?: {
    id: number;
    address: string;
  }[];
};

type Booking = {
  id: number;
  startAt: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  customerName: string;
  customerPhone: string;
  note?: string;
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

export default function BusinessDetailPage() {
  const { data: session } = useSession();
  const params = useParams();
  const router = useRouter();
  const businessId = params.id as string;

  const [business, setBusiness] = useState<Business | null>(null);
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
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${businessId}`,
            {
              headers: { Authorization: `Bearer ${session.user.accessToken}` },
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/bookings?businessId=${businessId}&limit=50`,
            {
              headers: { Authorization: `Bearer ${session.user.accessToken}` },
            }
          ),
        ]);

        if (bizRes.ok) {
          const bizData = await bizRes.json();
          setBusiness(bizData.data);
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
  }, [session, businessId]);

  const handleDelete = () => {
    Modal.confirm({
      title: 'Бизнес устгах',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>
            Та <strong>{business?.name}</strong> бизнесийг устгахдаа итгэлтэй
            байна уу?
          </p>
          <p className="text-red-500 text-sm mt-2">
            Энэ үйлдлийг буцаах боломжгүй.
          </p>
        </div>
      ),
      okText: 'Устгах',
      okType: 'danger',
      cancelText: 'Болих',
      onOk: async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${businessId}`,
            {
              method: 'DELETE',
              headers: { Authorization: `Bearer ${session?.user.accessToken}` },
            }
          );

          if (res.ok) {
            message.success('Бизнес амжилттай устгагдлаа');
            router.push('/business-dashboard/businesses');
          } else {
            message.error('Устгахад алдаа гарлаа');
          }
        } catch (error) {
          message.error('Устгахад алдаа гарлаа');
        }
      },
    });
  };

  const pendingCount = bookings.filter((b) => b.status === 'PENDING').length;
  const confirmedCount = bookings.filter(
    (b) => b.status === 'CONFIRMED'
  ).length;
  const upcomingBookings = bookings
    .filter(
      (b) => dayjs(b.startAt).isAfter(dayjs()) && b.status !== 'CANCELLED'
    )
    .sort(
      (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
    )
    .slice(0, 10);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (!business) {
    return (
      <Empty description="Бизнес олдсонгүй">
        <Link href="/business-dashboard/businesses">
          <Button type="primary">Буцах</Button>
        </Link>
      </Empty>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/business-dashboard/businesses">
            <Button icon={<ArrowLeftOutlined />} type="text" />
          </Link>
          <Avatar
            src={business.photo}
            icon={!business.photo && <ShopOutlined />}
            size={64}
            className="bg-blue-100"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {business.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                status={business.isActive ? 'success' : 'default'}
                text={business.isActive ? 'Идэвхтэй' : 'Идэвхгүй'}
              />
              {business.category && (
                <Tag color="blue">{business.category.name}</Tag>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={`/business-dashboard/businesses/${businessId}/edit`}>
            <Button icon={<EditOutlined />}>Засах</Button>
          </Link>
          <Button icon={<DeleteOutlined />} danger onClick={handleDelete}>
            Устгах
          </Button>
        </div>
      </div>

      {/* Stats */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card className="rounded-xl shadow-sm">
            <Statistic
              title="Нийт захиалга"
              value={bookings.length}
              prefix={<CalendarOutlined className="text-blue-500" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="rounded-xl shadow-sm">
            <Statistic
              title="Хүлээгдэж буй"
              value={pendingCount}
              prefix={<ClockCircleOutlined className="text-yellow-500" />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="rounded-xl shadow-sm">
            <Statistic
              title="Баталгаажсан"
              value={confirmedCount}
              prefix={<CheckCircleOutlined className="text-green-500" />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Content Tabs */}
      <Card className="rounded-xl shadow-sm">
        <Tabs
          items={[
            {
              key: 'info',
              label: 'Мэдээлэл',
              children: (
                <Descriptions column={{ xs: 1, sm: 2 }} bordered>
                  <Descriptions.Item label="Нэр">
                    {business.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="И-мэйл">
                    <a
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-1"
                    >
                      <MailOutlined /> {business.email}
                    </a>
                  </Descriptions.Item>
                  {business.phone && (
                    <Descriptions.Item label="Утас">
                      <a
                        href={`tel:${business.phone}`}
                        className="flex items-center gap-1"
                      >
                        <PhoneOutlined /> {business.phone}
                      </a>
                    </Descriptions.Item>
                  )}
                  {business.link && (
                    <Descriptions.Item label="Веб">
                      <a
                        href={business.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <LinkOutlined /> {business.link}
                      </a>
                    </Descriptions.Item>
                  )}
                  <Descriptions.Item label="Ангилал">
                    {business.category
                      ? `${business.category.parentCategory?.name} - ${business.category.name}`
                      : '-'}
                  </Descriptions.Item>
                  <Descriptions.Item label="Үүсгэсэн">
                    {dayjs(business.createdAt).format('YYYY.MM.DD')}
                  </Descriptions.Item>
                  <Descriptions.Item label="Товч тайлбар" span={2}>
                    {business.summary}
                  </Descriptions.Item>
                  {business.description && (
                    <Descriptions.Item label="Дэлгэрэнгүй" span={2}>
                      {business.description}
                    </Descriptions.Item>
                  )}
                </Descriptions>
              ),
            },
            {
              key: 'bookings',
              label: `Захиалгууд (${bookings.length})`,
              children: (
                <>
                  {upcomingBookings.length === 0 ? (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description="Захиалга байхгүй"
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
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {item.customerName}
                                  </span>
                                  <Tag color={config.color} icon={config.icon}>
                                    {config.label}
                                  </Tag>
                                </div>
                              }
                              description={
                                <div className="text-gray-500">
                                  <div>
                                    {dayjs(item.startAt).format(
                                      'YYYY.MM.DD HH:mm'
                                    )}{' '}
                                    - {item.customerPhone}
                                  </div>
                                  {item.note && (
                                    <div className="text-xs mt-1">
                                      📝 {item.note}
                                    </div>
                                  )}
                                </div>
                              }
                            />
                          </List.Item>
                        );
                      }}
                    />
                  )}
                </>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
}
