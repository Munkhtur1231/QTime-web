'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

export default function NewBusinessPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/business-categories`
        );
        if (res.ok) {
          const data = await res.json();
          setCategories(data.data || []);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const onFinish = async (values: any) => {
    if (!session?.user?.accessToken) {
      message.error('Нэвтрэх шаардлагатай');
      return;
    }

    try {
      setLoading(true);

      // Create business - API will auto-add current user as admin
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/businesses`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: JSON.stringify({
            ...values,
            categoryId: parseInt(values.categoryId),
            photo: values.photo || 'https://via.placeholder.com/300',
            richContent: values.richContent || values.summary || '',
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || 'Бизнес үүсгэхэд алдаа гарлаа');
      }

      message.success('Бизнес амжилттай үүсгэгдлээ!');
      router.push('/business-dashboard/businesses');
    } catch (error: any) {
      console.error('Error creating business:', error);
      message.error(error.message || 'Бизнес үүсгэхэд алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/business-dashboard/businesses">
          <Button icon={<ArrowLeftOutlined />} type="text" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Шинэ бизнес нэмэх
          </h1>
          <p className="text-gray-500">Шинэ бизнесийн мэдээллийг оруулна уу</p>
        </div>
      </div>

      <Card className="rounded-xl shadow-sm max-w-3xl">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            isActive: true,
            isInsideMall: false,
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center">
              <ShopOutlined className="text-3xl text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Бизнесийн мэдээлэл</h3>
              <p className="text-gray-500 text-sm">
                Үндсэн мэдээллийг оруулна уу
              </p>
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
              loading={categoriesLoading}
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
                loading={loading}
                size="large"
              >
                Бизнес үүсгэх
              </Button>
              <Link href="/business-dashboard/businesses">
                <Button size="large">Болих</Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
