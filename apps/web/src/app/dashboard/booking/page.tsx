'use client';

import { Card, Button, Space, Typography } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  CopyOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function BookingPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-0">
            Онлайн захиалгын холбоос
          </h1>
          <p className="text-gray-500 text-sm mb-0">
            Facebook болон Instagram-тай холбох
          </p>
        </div>
      </Card>

      {/* Booking Content */}
      <Card className="rounded-2xl shadow-sm">
        <Title level={3}>Нийгмийн сүлжээтэй холбох</Title>
        <Paragraph className="text-gray-600">
          Та өөрийн үйлчилгээний цагийг Facebook болон Instagram дээр шууд
          захиалуулах боломжтой
        </Paragraph>

        <Space size="middle" wrap className="mb-8">
          <Button
            type="primary"
            icon={<FacebookOutlined />}
            size="large"
            className="bg-[#1877f2] border-[#1877f2] rounded-xl hover:bg-[#1664d8]"
          >
            Facebook холбох
          </Button>
          <Button
            type="primary"
            icon={<InstagramOutlined />}
            size="large"
            className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] border-0 rounded-xl"
          >
            Instagram холбох
          </Button>
        </Space>

        <Card className="bg-gray-50 rounded-xl">
          <Title level={4}>Таны захиалгын холбоос:</Title>
          <div className="p-4 bg-white rounded-lg border border-gray-200 mb-4">
            <Text code>https://qtime.mn/book/your-business-name</Text>
          </div>
          <Button icon={<CopyOutlined />} size="large" className="rounded-xl">
            Холбоос хуулах
          </Button>
        </Card>
      </Card>
    </div>
  );
}
