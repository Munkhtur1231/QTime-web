'use client';

import { Card, Button, Table, Avatar, Tag } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface Client {
  key: string;
  name: string;
  email: string;
  totalSpent: string;
  appointments: number;
  tier: string;
  lastVisit: string;
  initial: string;
}

export default function ClientsPage() {
  const clients: Client[] = [
    {
      key: '1',
      name: 'Дорж',
      email: 'dorj@example.com',
      totalSpent: '₮450,000',
      appointments: 15,
      tier: 'Gold',
      lastVisit: '2 өдрийн өмнө',
      initial: 'Д',
    },
    {
      key: '2',
      name: 'Сараа',
      email: 'saraa@example.com',
      totalSpent: '₮180,000',
      appointments: 8,
      tier: 'Silver',
      lastVisit: '1 долоо хоногийн өмнө',
      initial: 'С',
    },
  ];

  const columns: ColumnsType<Client> = [
    {
      title: 'Үйлчлүүлэгч',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            className="bg-gradient-to-br from-indigo-500 to-purple-600"
            size="large"
          >
            {record.initial}
          </Avatar>
          <div>
            <div className="font-semibold text-gray-900">{text}</div>
            <div className="text-gray-500 text-sm">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Нийт зарцуулсан',
      dataIndex: 'totalSpent',
      key: 'totalSpent',
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: 'Захиалга',
      dataIndex: 'appointments',
      key: 'appointments',
    },
    {
      title: 'Түвшин',
      dataIndex: 'tier',
      key: 'tier',
      render: (tier) => (
        <Tag color={tier === 'Gold' ? 'gold' : 'default'}>{tier}</Tag>
      ),
    },
    {
      title: 'Сүүлд ирсэн',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-0">
              Үйлчлүүлэгчид
            </h1>
            <p className="text-gray-500 text-sm mb-0">
              Үйлчлүүлэгчдийн мэдээлэл ба loyalty програм
            </p>
          </div>
          <Button
            type="primary"
            icon={<ExportOutlined />}
            size="large"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-xl"
          >
            Экспорт
          </Button>
        </div>
      </Card>

      {/* Clients Table */}
      <Card className="rounded-2xl shadow-sm">
        <Table
          columns={columns}
          dataSource={clients}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
}
