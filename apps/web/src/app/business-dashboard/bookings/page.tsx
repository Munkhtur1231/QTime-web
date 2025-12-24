'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Card,
  Table,
  Button,
  Tag,
  Space,
  Avatar,
  message,
  Modal,
  Empty,
  Spin,
  Badge,
  Tabs,
  Calendar,
  List,
} from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/mn';

dayjs.locale('mn');

type Booking = {
  id: number;
  startAt: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  customerName: string;
  customerPhone: string;
  note: string | null;
  createdAt: string;
  business: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
  };
};

const statusConfig = {
  PENDING: {
    label: 'Хүлээгдэж буй',
    color: 'gold',
    icon: <ClockCircleOutlined />,
    badgeStatus: 'warning' as const,
  },
  CONFIRMED: {
    label: 'Баталгаажсан',
    color: 'green',
    icon: <CheckCircleOutlined />,
    badgeStatus: 'success' as const,
  },
  CANCELLED: {
    label: 'Цуцлагдсан',
    color: 'red',
    icon: <CloseCircleOutlined />,
    badgeStatus: 'error' as const,
  },
};

export default function BookingsPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [activeTab, setActiveTab] = useState('calendar');
  const [statusFilter] = useState<string | null>(null);

  const fetchBookings = async () => {
    if (!session?.user?.accessToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/business?limit=200`,
        {
          headers: { Authorization: `Bearer ${session.user.accessToken}` },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setBookings(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      message.error('Захиалгууд ачаалахад алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [session]);

  const onUpdateStatus = async (bookingId: number, newStatus: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${bookingId}/status`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        message.error(err?.message || 'Төлөв өөрчлөхөд алдаа гарлаа');
        return;
      }

      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId
            ? { ...b, status: newStatus as Booking['status'] }
            : b
        )
      );
      message.success('Төлөв амжилттай өөрчлөгдлөө');
      setStatusModalVisible(false);
      setSelectedBooking(null);
    } catch (error) {
      console.error('Error updating status:', error);
      message.error('Төлөв өөрчлөхөд алдаа гарлаа');
    }
  };

  const onCancelBooking = async (id: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${id}/cancel`,
        {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${session?.user.accessToken}` },
        }
      );

      if (!res.ok) {
        message.error('Захиалга цуцлахад алдаа гарлаа');
        return;
      }

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: 'CANCELLED' } : b))
      );
      message.success('Захиалга цуцлагдлаа');
    } catch (error) {
      message.error('Захиалга цуцлахад алдаа гарлаа');
    }
  };

  // Filter bookings
  const filteredBookings = statusFilter
    ? bookings.filter((b) => b.status === statusFilter)
    : bookings;

  const pendingCount = bookings.filter((b) => b.status === 'PENDING').length;
  const confirmedCount = bookings.filter(
    (b) => b.status === 'CONFIRMED'
  ).length;
  const cancelledCount = bookings.filter(
    (b) => b.status === 'CANCELLED'
  ).length;

  // Get bookings for date
  const getBookingsForDate = (date: Dayjs) => {
    return bookings.filter((b) => dayjs(b.startAt).isSame(date, 'day'));
  };

  const selectedDateBookings = getBookingsForDate(selectedDate);

  // Calendar cell render
  const dateCellRender = (value: Dayjs) => {
    const dayBookings = getBookingsForDate(value);
    if (dayBookings.length === 0) return null;

    const pending = dayBookings.filter((b) => b.status === 'PENDING').length;
    const confirmed = dayBookings.filter(
      (b) => b.status === 'CONFIRMED'
    ).length;

    return (
      <div className="flex flex-col gap-1">
        {pending > 0 && (
          <Badge
            status="warning"
            text={<span className="text-xs">{pending}</span>}
          />
        )}
        {confirmed > 0 && (
          <Badge
            status="success"
            text={<span className="text-xs">{confirmed}</span>}
          />
        )}
      </div>
    );
  };

  const columns: ColumnsType<Booking> = [
    {
      title: 'Үйлчлүүлэгч',
      key: 'customer',
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Avatar icon={<UserOutlined />} />
          <div>
            <div className="font-medium">{record.customerName}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">
              <PhoneOutlined /> {record.customerPhone}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Огноо/Цаг',
      dataIndex: 'startAt',
      key: 'startAt',
      sorter: (a, b) =>
        new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
      render: (date) => (
        <div>
          <div className="font-medium">{dayjs(date).format('YYYY.MM.DD')}</div>
          <div className="text-gray-500 text-sm">
            {dayjs(date).format('HH:mm')}
          </div>
        </div>
      ),
    },
    {
      title: 'Бизнес',
      dataIndex: ['business', 'name'],
      key: 'business',
      responsive: ['md'],
      render: (name) => <Tag color="blue">{name}</Tag>,
    },
    {
      title: 'Төлөв',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Хүлээгдэж буй', value: 'PENDING' },
        { text: 'Баталгаажсан', value: 'CONFIRMED' },
        { text: 'Цуцлагдсан', value: 'CANCELLED' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const config = statusConfig[status as keyof typeof statusConfig];
        return (
          <Tag color={config.color} icon={config.icon}>
            {config.label}
          </Tag>
        );
      },
    },
    {
      title: 'Үйлдэл',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => {
              setSelectedBooking(record);
              setStatusModalVisible(true);
            }}
            disabled={record.status === 'CANCELLED'}
          >
            Төлөв
          </Button>
          <Button
            size="small"
            danger
            disabled={record.status === 'CANCELLED'}
            onClick={() => onCancelBooking(record.id)}
          >
            Цуцлах
          </Button>
        </Space>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Захиалгууд</h1>
          <p className="text-gray-500">Бүх захиалгуудыг удирдах</p>
        </div>
        <div className="flex gap-2">
          <Tag color="gold">Хүлээгдэж: {pendingCount}</Tag>
          <Tag color="green">Баталгаажсан: {confirmedCount}</Tag>
          <Tag color="red">Цуцлагдсан: {cancelledCount}</Tag>
        </div>
      </div>

      <Card className="rounded-xl shadow-sm">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: 'calendar',
              label: (
                <span className="flex items-center gap-2">
                  <CalendarOutlined /> Календарь
                </span>
              ),
              children: (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Calendar
                      fullscreen={false}
                      value={selectedDate}
                      onSelect={(date) => setSelectedDate(date)}
                      cellRender={(current, info) => {
                        if (info.type === 'date') {
                          return dateCellRender(current);
                        }
                        return info.originNode;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {selectedDate.format('YYYY оны MM сарын DD')} -{' '}
                      {selectedDateBookings.length} захиалга
                    </h3>
                    {selectedDateBookings.length === 0 ? (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Энэ өдөр захиалга байхгүй"
                      />
                    ) : (
                      <List
                        size="small"
                        dataSource={selectedDateBookings.sort(
                          (a, b) =>
                            new Date(a.startAt).getTime() -
                            new Date(b.startAt).getTime()
                        )}
                        renderItem={(item) => {
                          const config = statusConfig[item.status];
                          return (
                            <List.Item
                              className="cursor-pointer hover:bg-gray-50 rounded-lg px-2"
                              onClick={() => {
                                setSelectedBooking(item);
                                setStatusModalVisible(true);
                              }}
                            >
                              <List.Item.Meta
                                avatar={
                                  <Badge status={config.badgeStatus}>
                                    <Avatar
                                      icon={<UserOutlined />}
                                      size="small"
                                    />
                                  </Badge>
                                }
                                title={
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm">
                                      {dayjs(item.startAt).format('HH:mm')}
                                    </span>
                                    <span>{item.customerName}</span>
                                  </div>
                                }
                                description={
                                  <Tag color={config.color} className="text-xs">
                                    {config.label}
                                  </Tag>
                                }
                              />
                            </List.Item>
                          );
                        }}
                      />
                    )}
                  </div>
                </div>
              ),
            },
            {
              key: 'list',
              label: (
                <span className="flex items-center gap-2">
                  Жагсаалт
                  <Badge count={bookings.length} showZero color="#1890ff" />
                </span>
              ),
              children: (
                <>
                  {bookings.length === 0 ? (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description="Захиалга байхгүй байна"
                    />
                  ) : (
                    <Table
                      columns={columns}
                      dataSource={filteredBookings}
                      rowKey="id"
                      pagination={{ pageSize: 10, showSizeChanger: false }}
                    />
                  )}
                </>
              ),
            },
          ]}
        />
      </Card>

      {/* Status Update Modal */}
      <Modal
        title="Захиалгын төлөв өөрчлөх"
        open={statusModalVisible}
        onCancel={() => {
          setStatusModalVisible(false);
          setSelectedBooking(null);
        }}
        footer={null}
        width={450}
      >
        {selectedBooking && (
          <div className="space-y-4">
            <Card size="small" className="bg-gray-50">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <UserOutlined className="text-gray-400" />
                  <span className="font-medium">
                    {selectedBooking.customerName}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneOutlined className="text-gray-400" />
                  <span>{selectedBooking.customerPhone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CalendarOutlined className="text-gray-400" />
                  <span>
                    {dayjs(selectedBooking.startAt).format(
                      'YYYY.MM.DD (ddd) HH:mm'
                    )}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  Одоогийн төлөв:{' '}
                  <Tag
                    color={statusConfig[selectedBooking.status].color}
                    icon={statusConfig[selectedBooking.status].icon}
                  >
                    {statusConfig[selectedBooking.status].label}
                  </Tag>
                </p>
                {selectedBooking.note && (
                  <p className="text-gray-500 text-sm">
                    📝 {selectedBooking.note}
                  </p>
                )}
              </div>
            </Card>
            <div>
              <p className="mb-3 font-semibold">Шинэ төлөв сонгох:</p>
              <Space direction="vertical" className="w-full">
                <Button
                  block
                  size="large"
                  icon={<ClockCircleOutlined />}
                  disabled={selectedBooking.status === 'PENDING'}
                  onClick={() => onUpdateStatus(selectedBooking.id, 'PENDING')}
                >
                  Хүлээгдэж буй
                </Button>
                <Button
                  block
                  size="large"
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  disabled={selectedBooking.status === 'CONFIRMED'}
                  onClick={() =>
                    onUpdateStatus(selectedBooking.id, 'CONFIRMED')
                  }
                  className="bg-green-500 hover:bg-green-600 border-green-500"
                >
                  Баталгаажуулах
                </Button>
                <Button
                  block
                  size="large"
                  danger
                  icon={<CloseCircleOutlined />}
                  disabled={selectedBooking.status === 'CANCELLED'}
                  onClick={() => {
                    onCancelBooking(selectedBooking.id);
                    setStatusModalVisible(false);
                    setSelectedBooking(null);
                  }}
                >
                  Цуцлах
                </Button>
              </Space>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
