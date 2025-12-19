'use client';

import { Card, Button, Table, Avatar, Tag } from 'antd';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface TeamMember {
  key: string;
  name: string;
  email: string;
  position: string;
  phone: string;
  status: string;
  initial: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      key: '1',
      name: 'Батаа',
      email: 'bataa@example.com',
      position: 'Үсчин',
      phone: '99119911',
      status: 'Идэвхтэй',
      initial: 'Б',
    },
  ];

  const columns: ColumnsType<TeamMember> = [
    {
      title: 'Нэр',
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
      title: 'Албан тушаал',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Утас',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color="gold">{status}</Tag>,
    },
    {
      title: '',
      key: 'action',
      render: () => <Button type="text" icon={<MoreOutlined />} />,
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-0">Хамт олон</h1>
            <p className="text-gray-500 text-sm mb-0">Ажилчдын мэдээлэл</p>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-xl"
          >
            Ажилтан нэмэх
          </Button>
        </div>
      </Card>

      {/* Team Table */}
      <Card className="rounded-2xl shadow-sm">
        <Table columns={columns} dataSource={teamMembers} pagination={false} />
      </Card>
    </div>
  );
}
