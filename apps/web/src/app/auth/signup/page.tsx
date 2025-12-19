'use client';

import { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (values: any) => {
    setLoading(true);

    // Simulate signup - In production, this would call your API
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', values.email);
      message.success('Амжилттай бүртгэгдлээ!');
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-8">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2 cursor-pointer">
              QTime
            </h1>
          </Link>
          <p className="text-gray-600 text-lg">Бизнес бүртгүүлэх</p>
        </div>

        <Form
          name="signup"
          onFinish={handleSignup}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="businessName"
            rules={[{ required: true, message: 'Бизнесийн нэр оруулна уу!' }]}
          >
            <Input
              prefix={<ShopOutlined className="text-gray-400" />}
              placeholder="Бизнесийн нэр"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Нэр оруулна уу!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Таны нэр"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'И-мэйл оруулна уу!' },
              { type: 'email', message: 'И-мэйл буруу байна!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="И-мэйл хаяг"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Утасны дугаар оруулна уу!' }]}
          >
            <Input
              prefix={<PhoneOutlined className="text-gray-400" />}
              placeholder="Утасны дугаар"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Нууц үг оруулна уу!' },
              {
                min: 6,
                message: 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Нууц үг"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Нууц үг давтан оруулна уу!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Нууц үг таарахгүй байна!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Нууц үг давтах"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="h-12 rounded-xl border-none font-semibold text-base bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              Бүртгүүлэх
            </Button>
          </Form.Item>

          <div className="text-center mt-6">
            <span className="text-gray-600">Бүртгэлтэй юу? </span>
            <Link
              href="/auth/login"
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Нэвтрэх
            </Link>
          </div>
        </Form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-700 text-sm">
            ← Буцах
          </Link>
        </div>
      </div>
    </div>
  );
}
