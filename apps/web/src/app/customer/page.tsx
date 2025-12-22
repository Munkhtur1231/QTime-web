'use client';

import { useEffect, useState } from 'react';
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
} from 'antd';
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  StarFilled,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import AppHeader from '../../components/AppHeader';

const { Option } = Select;

// Sample services data
const services = [
  {
    id: 1,
    name: 'Luxury Hair Salon',
    businessId: 1,
    category: 'salon',
    location: 'Сүхбаатар дүүрэг',
    rating: 4.8,
    reviews: 124,
    price: '20,000₮',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
    services: ['Үс засах', 'Буржгар хийх', 'Будах'],
  },
  {
    id: 2,
    name: 'Beauty & Spa Center',
    businessId: 2,
    category: 'beauty',
    location: 'Чингэлтэй дүүрэг',
    rating: 4.9,
    reviews: 89,
    price: '35,000₮',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop',
    services: ['Маникюр', 'Педикюр', 'Массаж'],
  },
  {
    id: 3,
    name: 'Dental Care Clinic',
    businessId: 3,
    category: 'dental',
    location: 'Баянгол дүүрэг',
    rating: 4.7,
    reviews: 156,
    price: '50,000₮',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
    services: ['Шүдний үзлэг', 'Цэвэрлэгээ', 'Сувилал'],
  },
  {
    id: 4,
    name: 'Wellness Massage',
    businessId: 4,
    category: 'massage',
    location: 'Хан-Уул дүүрэг',
    rating: 4.6,
    reviews: 67,
    price: '40,000₮',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    services: ['Массаж', 'СПА', 'Физик эмчилгээ'],
  },
  {
    id: 5,
    name: 'Medical Center',
    businessId: 5,
    category: 'medical',
    location: 'Сонгинохайрхан дүүрэг',
    rating: 4.5,
    reviews: 234,
    price: '30,000₮',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
    services: ['Ерөнхий үзлэг', 'Шинжилгээ', 'Зөвлөгөө'],
  },
  {
    id: 6,
    name: 'Premium Barbershop',
    businessId: 6,
    category: 'salon',
    location: 'Сүхбаатар дүүрэг',
    rating: 4.9,
    reviews: 178,
    price: '25,000₮',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop',
    services: ['Үс засах', 'Сахал засах', 'Massage'],
  },
];

export default function CustomerHomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState(services);
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [businessIdMap, setBusinessIdMap] = useState<Record<string, number>>(
    {}
  );
  const [form] = Form.useForm();

  // Fetch business IDs from API and map by name to ensure links match DB
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?limit=100`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!data?.data) return;
        const map: Record<string, number> = {};
        for (const biz of data.data) {
          if (biz?.name && typeof biz.id === 'number') {
            map[biz.name] = biz.id;
          }
        }
        setBusinessIdMap(map);
      } catch {
        // silent fail; links will fall back to search
      }
    };
    fetchBusinesses();
  }, []);

  const handleSearch = () => {
    let filtered = services;

    if (searchQuery) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.services.some((service) =>
            service.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (location) {
      filtered = filtered.filter((s) => s.location.includes(location));
    }

    if (category !== 'all') {
      filtered = filtered.filter((s) => s.category === category);
    }

    setFilteredServices(filtered);
    message.success(`${filtered.length} үйлчилгээ олдлоо`);
  };

  const filterByCategory = (cat: string) => {
    setCategory(cat);
    const filtered =
      cat === 'all' ? services : services.filter((s) => s.category === cat);
    setFilteredServices(filtered);
  };

  const openBookingModal = (service: any) => {
    setSelectedService(service);
    setBookingModal(true);
  };

  const handleBooking = (values: any) => {
    console.log('Booking:', values, selectedService);
    message.success('Захиалга амжилттай баталгаажлаа!');
    setBookingModal(false);
    form.resetFields();
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

                <Input
                  size="large"
                  placeholder="Огноо сонгох"
                  prefix={<CalendarOutlined className="text-xl text-black" />}
                  readOnly
                  className="rounded-2xl !text-sm [&_input]:!pl-2 border border-gray-300 hover:border-gray-400 shadow-sm [&_input]:text-gray-400 cursor-pointer"
                />

                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={handleSearch}
                  className="!h-14 !text-lg !font-bold rounded-2xl !bg-blue-500 border-none hover:!bg-blue-600 shadow-lg"
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
            type={category === 'salon' ? 'primary' : 'default'}
            onClick={() => filterByCategory('salon')}
            className={`rounded-[25px] ${
              category === 'salon'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            💇 Үсчин
          </Button>
          <Button
            type={category === 'beauty' ? 'primary' : 'default'}
            onClick={() => filterByCategory('beauty')}
            className={`rounded-[25px] ${
              category === 'beauty'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            💅 Гоо сайхан
          </Button>
          <Button
            type={category === 'massage' ? 'primary' : 'default'}
            onClick={() => filterByCategory('massage')}
            className={`rounded-[25px] ${
              category === 'massage'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            💆 Массаж
          </Button>
          <Button
            type={category === 'dental' ? 'primary' : 'default'}
            onClick={() => filterByCategory('dental')}
            className={`rounded-[25px] ${
              category === 'dental'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            🦷 Шүд
          </Button>
          <Button
            type={category === 'medical' ? 'primary' : 'default'}
            onClick={() => filterByCategory('medical')}
            className={`rounded-[25px] ${
              category === 'medical'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-none'
                : ''
            }`}
          >
            🏥 Эмнэлэг
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <Card
              key={service.id}
              hoverable
              cover={
                <div className="h-56 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
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
                  onClick={() => openBookingModal(service)}
                >
                  Цаг захиалах
                </Button>,
                <Link
                  key="detail"
                  href={
                    businessIdMap[service.name]
                      ? `/yellow-books/${businessIdMap[service.name]}`
                      : '/search'
                  }
                >
                  Дэлгэрэнгүй
                </Link>,
              ]}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <EnvironmentOutlined className="text-gray-400" />
                  {service.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.services.map((s, idx) => (
                    <Tag key={idx} color="blue">
                      {s}
                    </Tag>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <StarFilled className="text-yellow-500" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-gray-500 text-sm">
                      ({service.reviews})
                    </span>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        title={`${selectedService?.name} - Цаг захиалах`}
        open={bookingModal}
        onCancel={() => setBookingModal(false)}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleBooking}>
          <Form.Item
            label="Нэр"
            name="name"
            rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
          >
            <Input size="large" placeholder="Таны нэр" />
          </Form.Item>
          <Form.Item
            label="Утас"
            name="phone"
            rules={[{ required: true, message: 'Утасны дугаар оруулна уу' }]}
          >
            <Input size="large" placeholder="99119911" />
          </Form.Item>
          <Form.Item
            label="Огноо"
            name="date"
            rules={[{ required: true, message: 'Огноо сонгоно уу' }]}
          >
            <DatePicker size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Цаг"
            name="time"
            rules={[{ required: true, message: 'Цаг сонгоно уу' }]}
          >
            <Select size="large" placeholder="Цаг сонгох">
              <Option value="09:00">09:00</Option>
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="13:00">13:00</Option>
              <Option value="14:00">14:00</Option>
              <Option value="15:00">15:00</Option>
              <Option value="16:00">16:00</Option>
              <Option value="17:00">17:00</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none h-12 font-semibold hover:from-indigo-600 hover:to-purple-700"
            >
              Захиалга батлах
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
