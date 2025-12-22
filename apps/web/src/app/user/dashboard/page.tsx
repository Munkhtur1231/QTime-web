'use client';

import { useSession } from 'next-auth/react';
import { Card, Button, Tag, Form, Input, message, List } from 'antd';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppHeader from '../../../components/AppHeader';

type Booking = {
  id: number;
  business: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
};

const initialBookings: Booking[] = [
  {
    id: 1,
    business: 'Luxury Hair Salon',
    service: 'Үс засах',
    date: '2025-02-18',
    time: '14:00',
    status: 'confirmed',
  },
  {
    id: 2,
    business: 'Dental Care Clinic',
    service: 'Шүдний үзлэг',
    date: '2025-02-25',
    time: '10:30',
    status: 'pending',
  },
];

export default function UserDashboardPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [form] = Form.useForm();
  const [editable, setEditable] = useState(false);

  // Prefill form once user is available
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name || '',
        email: user.email || '',
        phone: '',
      });
    }
  }, [user, form]);

  const onUpdateProfile = (values: any) => {
    // placeholder for API update
    message.success('Мэдээлэл шинэчлэгдлээ (demo)');
    setEditable(false);
  };

  const onCancelBooking = (id: number) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'cancelled' } : b))
    );
    message.info('Захиалга цуцаллаа (demo)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Тавтай морил</p>
            <h1 className="text-3xl font-bold">
              {user?.name || user?.email || 'Миний самбар'}
            </h1>
            {user?.role && (
              <Tag color="blue" className="mt-2">
                {user.role}
              </Tag>
            )}
          </div>
          <Link href="/search">
            <Button type="primary" className="rounded-lg">
              Шинэ цаг захиалах
            </Button>
          </Link>
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
              <Form.Item
                label="Нэр"
                name="name"
                rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
              >
                <Input placeholder="Таны нэр" disabled={!editable} />
              </Form.Item>
              <Form.Item
                label="И-мэйл"
                name="email"
                rules={[{ required: true, message: 'И-мэйл оруулна уу' }]}
              >
                <Input placeholder="name@example.com" disabled={!editable} />
              </Form.Item>
              <Form.Item label="Утас" name="phone">
                <Input placeholder="99119911" disabled={!editable} />
              </Form.Item>
              {editable && (
                <Button type="primary" htmlType="submit" block>
                  Шинэчлэх
                </Button>
              )}
            </Form>
          </Card>

          <Card
            title="Миний захиалгууд"
            className="rounded-xl shadow-sm lg:col-span-2"
            styles={{ body: { padding: 20 } }}
          >
            <List
              itemLayout="horizontal"
              dataSource={bookings}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    item.status !== 'cancelled' ? (
                      <Button
                        key="cancel"
                        type="link"
                        danger
                        onClick={() => onCancelBooking(item.id)}
                      >
                        Цуцлах
                      </Button>
                    ) : null,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{item.business}</span>
                        <Tag color={item.status === 'confirmed' ? 'green' : item.status === 'pending' ? 'orange' : 'red'}>
                          {item.status === 'confirmed'
                            ? 'Баталгаажсан'
                            : item.status === 'pending'
                            ? 'Хүлээгдэж буй'
                            : 'Цуцлагдсан'}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <span>{item.service}</span>
                        <span>
                          {item.date} • {item.time}
                        </span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
