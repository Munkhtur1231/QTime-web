'use client';

import { Card, Statistic, Button, Badge, Avatar, Space } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  PlusOutlined,
  RiseOutlined,
  FallOutlined,
} from '@ant-design/icons';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  subtitle?: string;
}

function StatCard({
  title,
  value,
  icon,
  change,
  changeType,
  subtitle,
}: StatCardProps) {
  return (
    <Card
      hoverable
      className="rounded-2xl shadow-sm"
      styles={{ body: { padding: '28px' } }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
            {title}
          </div>
          <Statistic
            value={value}
            className="[&_.ant-statistic-content-value]:text-4xl [&_.ant-statistic-content-value]:font-extrabold [&_.ant-statistic-content-value]:text-gray-900"
          />
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        {changeType === 'positive' && (
          <RiseOutlined className="text-green-500" />
        )}
        {changeType === 'negative' && <FallOutlined className="text-red-500" />}
        <span
          className={
            changeType === 'positive'
              ? 'text-green-500'
              : changeType === 'negative'
              ? 'text-red-500'
              : 'text-gray-600'
          }
        >
          {change}
        </span>
      </div>
      {subtitle && <div className="text-gray-600 text-sm mt-1">{subtitle}</div>}
    </Card>
  );
}

export default function DashboardHome() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-0">
              Нүүр хуудас
            </h1>
            <p className="text-gray-500 text-sm mb-0">Өнөөдрийн тойм</p>
          </div>
          <Space size="middle">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 font-semibold rounded-xl"
            >
              Шинэ захиалга
            </Button>
            <Button
              icon={<SearchOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Badge count={3}>
              <Button
                icon={<BellOutlined />}
                size="large"
                className="rounded-xl"
              />
            </Badge>
            <Avatar
              size="large"
              className="bg-gradient-to-br from-indigo-500 to-purple-600 cursor-pointer"
            >
              U
            </Avatar>
          </Space>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <StatCard
          title="Сүүлийн 7 хоног"
          value="₮0"
          icon="💰"
          change="Appointments: 3"
          changeType="positive"
          subtitle="Appointments value: ₮75"
        />
        <StatCard
          title="Өнөөдрийн захиалга"
          value="8"
          icon="📅"
          change="+12% өмнөх долоо хоногтой харьцуулахад"
          changeType="positive"
        />
        <StatCard
          title="Нийт үйлчлүүлэгч"
          value="127"
          icon="👥"
          change="+5 шинэ энэ долоо хоногт"
          changeType="positive"
        />
        <StatCard
          title="Дундаж үнэлгээ"
          value="4.8"
          icon="⭐"
          change="+0.2 сүүлийн сард"
          changeType="positive"
        />
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card
          title="Борлуулалтын график"
          extra={<span className="text-gray-500 text-sm">Сүүлийн 7 хоног</span>}
          className="rounded-2xl shadow-sm"
        >
          <div className="h-[300px] flex items-center justify-center">
            <svg viewBox="0 0 600 300" className="w-full h-full">
              {/* Simple line chart */}
              <polyline
                points="50,250 150,200 250,220 350,100 450,180 550,220"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
              />
              {/* Points */}
              {[
                [50, 250],
                [150, 200],
                [250, 220],
                [350, 100],
                [450, 180],
                [550, 220],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5" fill="#6366f1" />
              ))}
            </svg>
          </div>
        </Card>

        {/* Upcoming Appointments */}
        <Card
          title="Ирэх захиалгууд"
          extra={
            <span className="text-gray-500 text-sm">Дараагийн 7 хоног</span>
          }
          className="rounded-2xl shadow-sm"
        >
          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-50">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Хуваарь хоосон байна
            </h3>
            <p className="text-gray-500 mb-6">
              Статистик харуулахын тулд захиалга нэмнэ үү
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
