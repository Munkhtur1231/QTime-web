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
  Tooltip,
  Switch,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  ShopOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import type { ColumnsType } from 'antd/es/table';

type Business = {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  isActive: boolean;
  category?: {
    name: string;
  };
  createdAt: string;
};

export default function BusinessesPage() {
  const { data: session } = useSession();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);

  const fetchBusinesses = async () => {
    if (!session?.user?.accessToken) return;

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?adminUserId=${session.user.id}`,
        {
          headers: { Authorization: `Bearer ${session.user.accessToken}` },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setBusinesses(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching businesses:', error);
      message.error('Бизнесүүд ачаалахад алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, [session]);

  const handleDelete = (business: Business) => {
    Modal.confirm({
      title: 'Бизнес устгах',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>
            Та <strong>{business.name}</strong> бизнесийг устгахдаа итгэлтэй
            байна уу?
          </p>
          <p className="text-red-500 text-sm mt-2">
            Энэ үйлдлийг буцаах боломжгүй. Бүх захиалга, мэдээлэл устах болно.
          </p>
        </div>
      ),
      okText: 'Устгах',
      okType: 'danger',
      cancelText: 'Болих',
      onOk: async () => {
        try {
          setDeleteLoading(business.id);
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${business.id}`,
            {
              method: 'DELETE',
              headers: { Authorization: `Bearer ${session?.user.accessToken}` },
            }
          );

          if (res.ok) {
            message.success('Бизнес амжилттай устгагдлаа');
            setBusinesses((prev) => prev.filter((b) => b.id !== business.id));
          } else {
            const err = await res.json().catch(() => null);
            message.error(err?.message || 'Устгахад алдаа гарлаа');
          }
        } catch (error) {
          console.error('Error deleting business:', error);
          message.error('Устгахад алдаа гарлаа');
        } finally {
          setDeleteLoading(null);
        }
      },
    });
  };

  const handleToggleActive = async (business: Business, checked: boolean) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${business.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
          body: JSON.stringify({ isActive: checked }),
        }
      );

      if (res.ok) {
        message.success(
          checked ? 'Бизнес идэвхжүүлэгдлээ' : 'Бизнес идэвхгүй болгогдлоо'
        );
        setBusinesses((prev) =>
          prev.map((b) =>
            b.id === business.id ? { ...b, isActive: checked } : b
          )
        );
      } else {
        message.error('Төлөв өөрчлөхөд алдаа гарлаа');
      }
    } catch (error) {
      console.error('Error updating business:', error);
      message.error('Төлөв өөрчлөхөд алдаа гарлаа');
    }
  };

  const columns: ColumnsType<Business> = [
    {
      title: 'Бизнес',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={record.photo}
            icon={!record.photo && <ShopOutlined />}
            size={48}
            className="bg-blue-100"
          />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-gray-500 text-sm">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Утас',
      dataIndex: 'phone',
      key: 'phone',
      responsive: ['md'],
    },
    {
      title: 'Ангилал',
      dataIndex: ['category', 'name'],
      key: 'category',
      responsive: ['lg'],
      render: (name) => (name ? <Tag color="blue">{name}</Tag> : '-'),
    },
    {
      title: 'Төлөв',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          onChange={(checked) => handleToggleActive(record, checked)}
          checkedChildren="Идэвхтэй"
          unCheckedChildren="Идэвхгүй"
        />
      ),
    },
    {
      title: 'Үйлдэл',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Tooltip title="Харах">
            <Link href={`/business-dashboard/businesses/${record.id}`}>
              <Button icon={<EyeOutlined />} />
            </Link>
          </Tooltip>
          <Tooltip title="Засах">
            <Link href={`/business-dashboard/businesses/${record.id}/edit`}>
              <Button icon={<EditOutlined />} />
            </Link>
          </Tooltip>
          <Tooltip title="Устгах">
            <Button
              icon={<DeleteOutlined />}
              danger
              loading={deleteLoading === record.id}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Миний бизнесүүд</h1>
          <p className="text-gray-500">Таны удирдаж буй бүх бизнесүүд</p>
        </div>
        <Link href="/business-dashboard/businesses/new">
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Шинэ бизнес нэмэх
          </Button>
        </Link>
      </div>

      <Card className="rounded-xl shadow-sm">
        {loading ? (
          <div className="flex justify-center py-12">
            <Spin size="large" />
          </div>
        ) : businesses.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Та бизнес бүртгүүлээгүй байна"
          >
            <Link href="/business-dashboard/businesses/new">
              <Button type="primary" icon={<PlusOutlined />}>
                Шинэ бизнес нэмэх
              </Button>
            </Link>
          </Empty>
        ) : (
          <Table
            columns={columns}
            dataSource={businesses}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
            }}
          />
        )}
      </Card>
    </div>
  );
}
