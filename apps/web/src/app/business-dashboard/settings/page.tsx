'use client';

import { useSession } from 'next-auth/react';
import { Card, Form, Input, Button, message, Divider, Avatar, Tag } from 'antd';
import { UserOutlined, MailOutlined, SaveOutlined } from '@ant-design/icons';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/${session?.user?.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify(values),
        }
      );

      if (res.ok) {
        message.success('Мэдээлэл амжилттай хадгалагдлаа');
      } else {
        message.error('Хадгалахад алдаа гарлаа');
      }
    } catch (error) {
      message.error('Хадгалахад алдаа гарлаа');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Тохиргоо</h1>
        <p className="text-gray-500">Таны профайл болон системийн тохиргоо</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="rounded-xl shadow-sm">
          <div className="text-center">
            <Avatar
              icon={<UserOutlined />}
              size={80}
              className="bg-blue-500 mb-4"
            />
            <h3 className="text-lg font-semibold">
              {session?.user?.name || 'Хэрэглэгч'}
            </h3>
            <p className="text-gray-500">{session?.user?.email}</p>
            <Tag color="blue" className="mt-2">
              Бизнес эзэмшигч
            </Tag>
          </div>
        </Card>

        {/* Settings Form */}
        <Card className="rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Профайл мэдээлэл</h3>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              firstName: session?.user?.name?.split(' ')[0] || '',
              lastName: session?.user?.name?.split(' ')[1] || '',
              email: session?.user?.email || '',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item name="firstName" label="Нэр">
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Нэр"
                  size="large"
                />
              </Form.Item>

              <Form.Item name="lastName" label="Овог">
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Овог"
                  size="large"
                />
              </Form.Item>
            </div>

            <Form.Item name="email" label="И-мэйл">
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="И-мэйл"
                size="large"
                disabled
              />
            </Form.Item>

            <Form.Item name="phone" label="Утас">
              <Input placeholder="Утасны дугаар" size="large" />
            </Form.Item>

            <Divider />

            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                size="large"
              >
                Хадгалах
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="rounded-xl shadow-sm border-red-200">
        <h3 className="text-lg font-semibold text-red-500 mb-4">Аюултай бүс</h3>
        <p className="text-gray-500 mb-4">
          Эдгээр үйлдлүүд буцаах боломжгүй. Болгоомжтой хандана уу.
        </p>
        <Button danger>Бүртгэл устгах</Button>
      </Card>
    </div>
  );
}
