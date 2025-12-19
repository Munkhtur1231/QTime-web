'use client';

import { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (values: any) => {
    setLoading(true);

    // Simulate login - In production, this would call your API
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', values.email);
      message.success('Амжилттай нэвтэрлээ!');
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
          <p className="text-gray-600 text-lg">Бизнес нэвтрэх</p>
        </div>

        <Form
          name="login"
          onFinish={handleLogin}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'И-мэйл оруулна уу!' },
              { type: 'email', message: 'И-мэйл буруу байна!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="И-мэйл хаяг"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Нууц үг оруулна уу!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Нууц үг"
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center mb-4">
              <Link
                href="/auth/forgot-password"
                className="text-indigo-600 hover:text-indigo-700 text-sm"
              >
                Нууц үг мартсан?
              </Link>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="h-12 rounded-xl border-none font-semibold text-base bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              Нэвтрэх
            </Button>
          </Form.Item>

          <div className="text-center mt-6">
            <span className="text-gray-600">Бүртгэлгүй юу? </span>
            <Link
              href="/auth/signup"
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Бүртгүүлэх
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
