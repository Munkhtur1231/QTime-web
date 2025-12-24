'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  Switch,
  message,
  Space,
  Divider,
  Spin,
  Empty,
  Avatar,
} from 'antd';
import { ArrowLeftOutlined, ShopOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Category = {
  id: number;
  name: string;
  parentCategory: {
    name: string;
  };
};

type Business = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  photo: string;
  link?: string;
  summary: string;
  description?: string;
  richContent: string;
  isActive: boolean;
  isInsideMall: boolean;
  categoryId: number;
};

export default function EditBusinessPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const businessId = params.id as string;

  const [form] = Form.useForm();
  const [business, setBusiness] = useState<Business | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bizRes, catRes] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${businessId}`,
            {
              headers: session?.user?.accessToken
                ? { Authorization: `Bearer ${session.user.accessToken}` }
                : {},
            }
          ),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/business-categories`),
        ]);

        if (bizRes.ok) {
          const bizData = await bizRes.json();
          setBusiness(bizData.data);
          form.setFieldsValue({
            ...bizData.data,
            categoryId: bizData.data.categoryId?.toString(),
          });
        }

        if (catRes.ok) {
          const catData = await catRes.json();
          setCategories(catData.data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        message.error('Мэдээлэл ачаалахад алдаа гарлаа');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session, businessId, form]);

  const onFinish = async (values: any) => {
    if (!session?.user?.accessToken) {
      message.error('Нэвтрэх шаардлагатай');
      return;
    }

    try {
      setSaving(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/businesses/${businessId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: JSON.stringify({
            ...values,
            categoryId: parseInt(values.categoryId),
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || 'Засварлахад алдаа гарлаа');
      }

      message.success('Бизнес амжилттай засварлагдлаа!');
      router.push(`/business-dashboard/businesses/${businessId}`);
    } catch (error: any) {
      console.error('Error updating business:', error);
      message.error(error.message || 'Засварлахад алдаа гарлаа');
    } finally {
      setSaving(false);
    }
  };

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
      <div className="flex items-center gap-4">
        <Link href={`/business-dashboard/businesses/${businessId}`}>
          <Button icon={<ArrowLeftOutlined />} type="text" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Бизнес засварлах</h1>
          <p className="text-gray-500">{business.name}</p>
        </div>
      </div>

      <Card className="rounded-xl shadow-sm max-w-3xl">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className="flex items-center gap-4 mb-6">
            <Avatar
              src={business.photo}
              icon={!business.photo && <ShopOutlined />}
              size={64}
              className="bg-blue-100"
            />
            <div>
              <h3 className="font-semibold">Бизнесийн мэдээлэл</h3>
              <p className="text-gray-500 text-sm">Мэдээллийг засварлана уу</p>
            </div>
          </div>

          <Form.Item
            name="name"
            label="Бизнесийн нэр"
            rules={[{ required: true, message: 'Нэр оруулна уу' }]}
          >
            <Input placeholder="Жишээ: Эрүүл мэндийн төв" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="И-мэйл"
            rules={[
              { required: true, message: 'И-мэйл оруулна уу' },
              { type: 'email', message: 'Зөв и-мэйл оруулна уу' },
            ]}
          >
            <Input placeholder="business@example.com" size="large" />
          </Form.Item>

          <Form.Item name="phone" label="Утасны дугаар">
            <Input placeholder="99112233" size="large" />
          </Form.Item>

          <Form.Item
            name="categoryId"
            label="Ангилал"
            rules={[{ required: true, message: 'Ангилал сонгоно уу' }]}
          >
            <Select
              placeholder="Ангилал сонгох"
              size="large"
              showSearch
              optionFilterProp="label"
              options={categories.map((cat) => ({
                value: cat.id.toString(),
                label: `${cat.parentCategory.name} - ${cat.name}`,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="summary"
            label="Товч тайлбар"
            rules={[{ required: true, message: 'Товч тайлбар оруулна уу' }]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Бизнесийн товч тайлбар..."
              showCount
              maxLength={500}
            />
          </Form.Item>

          <Form.Item name="description" label="Дэлгэрэнгүй тайлбар">
            <Input.TextArea
              rows={5}
              placeholder="Бизнесийн дэлгэрэнгүй мэдээлэл..."
            />
          </Form.Item>

          <Form.Item name="photo" label="Зураг URL">
            <Input placeholder="https://example.com/photo.jpg" size="large" />
          </Form.Item>

          <Form.Item name="link" label="Веб хуудас">
            <Input placeholder="https://mybusiness.com" size="large" />
          </Form.Item>

          <Divider />

          <div className="flex gap-8">
            <Form.Item name="isActive" label="Идэвхтэй" valuePropName="checked">
              <Switch checkedChildren="Тийм" unCheckedChildren="Үгүй" />
            </Form.Item>

            <Form.Item
              name="isInsideMall"
              label="Худалдааны төвд байрладаг"
              valuePropName="checked"
            >
              <Switch checkedChildren="Тийм" unCheckedChildren="Үгүй" />
            </Form.Item>
          </div>

          <Divider />

          <Form.Item className="mb-0">
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={saving}
                size="large"
              >
                Хадгалах
              </Button>
              <Link href={`/business-dashboard/businesses/${businessId}`}>
                <Button size="large">Болих</Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
