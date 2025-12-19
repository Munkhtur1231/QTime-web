'use client';

import { Card, Button, Statistic } from 'antd';
import { FilePdfOutlined, RiseOutlined } from '@ant-design/icons';

export default function SalesPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-0">Тайлан</h1>
            <p className="text-gray-500 text-sm mb-0">
              Сарын тайлан ба статистик
            </p>
          </div>
          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            size="large"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-xl"
          >
            PDF татах
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hoverable className="rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                Энэ сарын орлого
              </div>
              <Statistic
                value="₮2.4М"
                className="[&_.ant-statistic-content-value]:text-4xl [&_.ant-statistic-content-value]:font-extrabold"
              />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              💵
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-500">
            <RiseOutlined />
            <span>+23% өмнөх сартай харьцуулахад</span>
          </div>
        </Card>

        <Card hoverable className="rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                Захиалгын тоо
              </div>
              <Statistic
                value={284}
                className="[&_.ant-statistic-content-value]:text-4xl [&_.ant-statistic-content-value]:font-extrabold"
              />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              📋
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-500">
            <RiseOutlined />
            <span>+15%</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
