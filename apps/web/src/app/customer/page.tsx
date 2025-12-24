'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  Input,
  Select,
  Button,
  Card,
  Tag,
  Modal,
  Form,
  DatePicker,
  message,
  Spin,
  Alert,
  Divider,
  Avatar,
} from 'antd';
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  StarFilled,
  ClockCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AppHeader from '../../components/AppHeader';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Option } = Select;

// Боломжтой цагууд
const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
];

interface Business {
  id: number;
  name: string;
  photo: string;
  description: string | null;
  category: {
    id: number;
    name: string;
    icon: string;
    parentCategory: { id: number; icon: string; name: string };
  };
  addresses: {
    address: string;
    latitude: number;
    longitude: number;
  }[];
  _count: {
    reviews: number;
  };
  averageReviewRating: number | null;
}

export default function CustomerHomePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Business | null>(null);
  const [form] = Form.useForm();
  const [bookingLoading, setBookingLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Fetch businesses from API
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?limit=100`,
          { cache: 'no-store' }
        );
        if (!res.ok) {
          message.error('Үйлчилгээнүүдийг ачааллахад алдаа гарлаа');
          return;
        }
        const data = await res.json();
        if (data?.data) {
          setBusinesses(data.data);
          setFilteredBusinesses(data.data);
        }
      } catch (error) {
        console.error('Error fetching businesses:', error);
        message.error('Үйлчилгээнүүдийг ачааллахад алдаа гарлаа');
      } finally {
        setLoading(false);
      }
    };
    fetchBusinesses();
  }, []);

  const handleSearch = () => {
    let filtered = businesses;

    if (searchQuery) {
      filtered = filtered.filter(
        (b) =>
          b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((b) =>
        b.addresses.some((addr) => addr.address.includes(location))
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(
        (b) =>
          b.category.parentCategory.name.toLowerCase() ===
          category.toLowerCase()
      );
    }

    setFilteredBusinesses(filtered);
    message.success(`${filtered.length} үйлчилгээ олдлоо`);
  };

  const filterByCategory = (cat: string) => {
    setCategory(cat);
    let filtered = businesses;

    if (cat !== 'all') {
      filtered = businesses.filter(
        (b) =>
          b.category.parentCategory.name.toLowerCase() === cat.toLowerCase()
      );
    }

    setFilteredBusinesses(filtered);
  };

  const openBookingModal = (business: Business) => {
    setSelectedService(business);
    setBookingModal(true);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookedSlots([]);
    form.resetFields();

    // Хэрэглэгчийн мэдээллийг урьдчилан бөглөх
    if (session?.user) {
      form.setFieldsValue({
        name: session.user.name || '',
        phone: '',
      });
    }
  };

  // Сонгосон өдрийн захиалагдсан цагуудыг авах
  const fetchBookedSlots = async (date: Dayjs, businessId: number) => {
    try {
      setLoadingSlots(true);
      const dateStr = date.format('YYYY-MM-DD');
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/slots?businessId=${businessId}&date=${dateStr}`,
        { cache: 'no-store' }
      );

      if (res.ok) {
        const data = await res.json();
        const slots = (data.data || [])
          .filter((b: any) => b.status !== 'CANCELLED')
          .map((b: any) => {
            const d = new Date(b.startAt);
            return `${d.getHours().toString().padStart(2, '0')}:${d
              .getMinutes()
              .toString()
              .padStart(2, '0')}`;
          });
        setBookedSlots(slots);
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    } finally {
      setLoadingSlots(false);
    }
  };

  const onDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    setSelectedTime(null);
    form.setFieldValue('time', undefined);
    if (date && selectedService) {
      fetchBookedSlots(date, selectedService.id);
    } else {
      setBookedSlots([]);
    }
  };

  const onTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = async (values: any) => {
    if (!selectedService?.id) {
      message.error('Үйлчилгээ сонгоно уу');
      return;
    }

    if (!selectedTime) {
      message.error('Цаг сонгоно уу');
      return;
    }

    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
      message.warning('Цаг захиалахын тулд нэвтэрнэ үү');
      router.push('/signin');
      return;
    }

    try {
      setBookingLoading(true);
      const dateStr = values?.date?.format?.('YYYY-MM-DD');
      if (!dateStr) {
        message.error('Огноо сонгоно уу');
        return;
      }

      const localDate = new Date(`${dateStr}T${selectedTime}:00`);
      const startAt = localDate.toISOString();

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          businessId: selectedService.id,
          customerName: values.name,
          customerPhone: values.phone,
          startAt,
          note: values.note,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        message.error(err?.message || 'Захиалга хийхэд алдаа гарлаа');
        return;
      }

      message.success('Захиалга амжилттай баталгаажлаа!');
      setBookingModal(false);
      form.resetFields();
      setSelectedDate(null);
      setBookedSlots([]);
    } catch (error) {
      console.error('Booking error:', error);
      message.error('Захиалга хийхэд алдаа гарлаа');
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AppHeader />

      {/* Hero Banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Content */}
            <div className="px-12 py-16 flex flex-col justify-center">
              <h1 className="text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
                  Гоо сайхны үйлчилгээ.
                  <br />
                  Хялбар захиалга.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                5+ үйлчилгээний газруудаас сонгож, онлайнаар цагаа захиал
              </p>

              {/* Search Form */}
              <div className="space-y-3">
                <Input
                  size="large"
                  placeholder="Үйлчилгээ хайх..."
                  prefix={<SearchOutlined className="text-xl text-black" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onPressEnter={handleSearch}
                  className="rounded-2xl !text-sm [&_input]:!pl-2 border border-gray-300 hover:border-gray-400 focus:border-blue-400 shadow-sm"
                />

                <Select
                  size="large"
                  value={location || 'Улаанбаатар'}
                  onChange={setLocation}
                  className="w-full [&_.ant-select-selector]:!h-14 [&_.ant-select-selector]:rounded-2xl [&_.ant-select-selector]:border [&_.ant-select-selector]:border-gray-300 hover:[&_.ant-select-selector]:border-gray-400 [&_.ant-select-selector]:shadow-sm [&_.ant-select-selection-item]:flex [&_.ant-select-selection-item]:items-center [&_.ant-select-selection-item]:gap-1 !mb-4 !mt-2"
                  suffixIcon={<span className="text-black text-sm">▼</span>}
                >
                  <Option value="Улаанбаатар">
                    <EnvironmentOutlined className="text-black mr-2" />
                    Улаанбаатар
                  </Option>
                  <Option value="Сүхбаатар">Сүхбаатар дүүрэг</Option>
                  <Option value="Чингэлтэй">Чингэлтэй дүүрэг</Option>
                  <Option value="Баянгол">Баянгол дүүрэг</Option>
                  <Option value="Хан-Уул">Хан-Уул дүүрэг</Option>
                  <Option value="Сонгинохайрхан">Сонгинохайрхан дүүрэг</Option>
                </Select>

                <DatePicker
                  size="large"
                  placeholder="Огноо сонгох"
                  className="w-full rounded-2xl border border-gray-300 my-2 hover:border-gray-400 shadow-sm [&_.ant-picker-input>input]:!text-sm"
                  format="YYYY-MM-DD"
                  disabledDate={(current) =>
                    current && current < dayjs().startOf('day')
                  }
                />

                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={handleSearch}
                  className="!h-14 !text-lg !font-bold rounded-2xl !bg-blue-500 border-none hover:!bg-blue-600 shadow-lg mt-4"
                >
                  Хайх
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[600px] overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
                alt="Salon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Онцлох үйлчилгээнүүд
          </h2>
          <p className="text-xl text-gray-600">
            Хамгийн сайн үнэлгээтэй үйлчилгээний газруудаас сонгоно уу
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <Button
            type={category === 'all' ? 'primary' : 'default'}
            onClick={() => filterByCategory('all')}
            className={`rounded-[25px] ${
              category === 'all'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            Бүгд
          </Button>
          <Button
            type={category === 'beauty & wellness' ? 'primary' : 'default'}
            onClick={() => filterByCategory('beauty & wellness')}
            className={`rounded-[25px] ${
              category === 'beauty & wellness'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            💅 Гоо сайхан
          </Button>
          <Button
            type={category === 'health & medical' ? 'primary' : 'default'}
            onClick={() => filterByCategory('health & medical')}
            className={`rounded-[25px] ${
              category === 'health & medical'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            🏥 Эрүүл мэнд
          </Button>
          <Button
            type={category === 'professional services' ? 'primary' : 'default'}
            onClick={() => filterByCategory('professional services')}
            className={`rounded-[25px] ${
              category === 'professional services'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            💼 Мэргэжлийн үйлчилгээ
          </Button>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spin size="large" />
          </div>
        ) : filteredBusinesses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Үйлчилгээ олдсонгүй</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business) => (
              <Card
                key={business.id}
                hoverable
                cover={
                  <div className="h-56 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                    <Image
                      src={
                        business.photo ||
                        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop'
                      }
                      alt={business.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
                className="rounded-2xl overflow-hidden"
                actions={[
                  <Button
                    key="book"
                    type="link"
                    onClick={() => openBookingModal(business)}
                  >
                    Цаг захиалах
                  </Button>,
                  <Link key="detail" href={`/yellow-books/${business.id}`}>
                    Дэлгэрэнгүй
                  </Link>,
                ]}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {business.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <EnvironmentOutlined className="text-gray-400" />
                    {business.addresses[0]?.address || 'Хаяг байхгүй'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="blue" className="flex items-center gap-1">
                      <span>{business.category.icon}</span>
                      {business.category.name}
                    </Tag>
                    <Tag color="purple">
                      {business.category.parentCategory.name}
                    </Tag>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <StarFilled className="text-yellow-500" />
                      <span className="font-semibold">
                        {business.averageReviewRating || 'N/A'}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({business._count.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <Modal
        title={null}
        open={bookingModal}
        onCancel={() => {
          setBookingModal(false);
          setSelectedDate(null);
          setSelectedTime(null);
          setBookedSlots([]);
          form.resetFields();
        }}
        footer={null}
        width={550}
        destroyOnHidden
      >
        {selectedService && (
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b">
              <Avatar
                src={selectedService.photo}
                size={64}
                shape="square"
                className="rounded-xl"
              />
              <div>
                <h2 className="text-xl font-bold">{selectedService.name}</h2>
                <p className="text-gray-500 flex items-center gap-1">
                  <EnvironmentOutlined />
                  {selectedService.addresses[0]?.address || 'Хаяг байхгүй'}
                </p>
              </div>
            </div>

            {!session?.user && (
              <Alert
                type="warning"
                message="Цаг захиалахын тулд нэвтэрнэ үү"
                showIcon
                className="mb-4"
                action={
                  <Link href="/signin">
                    <Button size="small" type="primary">
                      Нэвтрэх
                    </Button>
                  </Link>
                }
              />
            )}

            <Form form={form} layout="vertical" onFinish={handleBooking}>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  label={
                    <span className="flex items-center gap-1">
                      <UserOutlined /> Нэр
                    </span>
                  }
                  name="name"
                  rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
                >
                  <Input size="large" placeholder="Таны нэр" />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="flex items-center gap-1">
                      <PhoneOutlined /> Утас
                    </span>
                  }
                  name="phone"
                  rules={[
                    { required: true, message: 'Утасны дугаар оруулна уу' },
                    {
                      pattern: /^[0-9]{8}$/,
                      message: '8 оронтой дугаар оруулна уу',
                    },
                  ]}
                >
                  <Input size="large" placeholder="99119911" maxLength={8} />
                </Form.Item>
              </div>

              <Form.Item
                label={
                  <span className="flex items-center gap-1">
                    <CalendarOutlined /> Огноо
                  </span>
                }
                name="date"
                rules={[{ required: true, message: 'Огноо сонгоно уу' }]}
              >
                <DatePicker
                  size="large"
                  className="w-full"
                  placeholder="Огноо сонгох"
                  disabledDate={(current) =>
                    current && current < dayjs().startOf('day')
                  }
                  onChange={onDateChange}
                  format="YYYY-MM-DD"
                />
              </Form.Item>

              {/* Time Selection - separate from Form.Item to allow button clicks */}
              <div className="mb-6">
                <label className="flex items-center gap-1 mb-2 font-medium">
                  <ClockCircleOutlined /> Цаг{' '}
                  <span className="text-red-500">*</span>
                </label>
                {!selectedDate ? (
                  <div className="text-gray-400 text-center py-4 border rounded-lg">
                    Эхлээд огноо сонгоно уу
                  </div>
                ) : loadingSlots ? (
                  <div className="text-center py-4">
                    <Spin size="small" /> Цагуудыг ачаалж байна...
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.includes(time);
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isBooked}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (!isBooked) {
                              onTimeSelect(time);
                            }
                          }}
                          className={`px-3 py-2 rounded-md border text-sm font-medium transition-all ${
                            isBooked
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                              : isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:text-indigo-600'
                          }`}
                        >
                          {time}
                          {isBooked && (
                            <span className="text-xs block">Захиалагдсан</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
                {!selectedTime && selectedDate && (
                  <p className="text-red-500 text-sm mt-1">Цаг сонгоно уу</p>
                )}
              </div>

              <Form.Item label="Тэмдэглэл (заавал биш)" name="note">
                <Input.TextArea
                  rows={2}
                  placeholder="Нэмэлт мэдээлэл..."
                  maxLength={200}
                />
              </Form.Item>

              <Divider />

              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={bookingLoading}
                  disabled={!session?.user}
                  icon={<CheckCircleOutlined />}
                  className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none h-12 font-semibold hover:from-indigo-600 hover:to-purple-700"
                >
                  Захиалга батлах
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </div>
  );
}
