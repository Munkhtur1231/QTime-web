'use client';

import { Card, Button, Select, Space, Avatar } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
  ReloadOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Option } = Select;

export default function CalendarPage() {
  const timeSlots = ['13:00', '14:00', '15:00', '16:00'];
  const staffMembers = [
    { name: 'Undrakh Tavanjin', initial: 'U', color: '#6b7280' },
    { name: 'Wendy Smith (Demo)', initial: 'W', color: '#ec4899' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <Card className="rounded-2xl shadow-sm mb-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <Space size="middle">
            <Button
              icon={<LeftOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Space>
              <Button size="large" className="rounded-lg">
                Today
              </Button>
              <span className="text-lg font-semibold">Sat 29 Nov</span>
            </Space>
            <Button
              icon={<RightOutlined />}
              size="large"
              className="rounded-xl"
            />
          </Space>

          <Space size="middle">
            <Button
              icon={<TeamOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Button
              icon={<SettingOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Button
              icon={<CalendarOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Button
              icon={<ReloadOutlined />}
              size="large"
              className="rounded-xl"
            />
            <Select
              defaultValue="day"
              size="large"
              className="w-[120px] [&_.ant-select-selector]:rounded-xl"
            >
              <Option value="day">Day</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
            </Select>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded-xl"
            >
              Add
            </Button>
          </Space>
        </div>
      </Card>

      {/* Calendar View */}
      <Card className="rounded-2xl shadow-sm">
        {/* Staff Members Header */}
        <div className="flex gap-8 border-b border-gray-200 pb-4 mb-4">
          {staffMembers.map((staff, idx) => (
            <Space key={idx} size="middle">
              <Avatar
                size="large"
                style={{ backgroundColor: staff.color }}
                className="flex-shrink-0"
              >
                {staff.initial}
              </Avatar>
              <span className="font-semibold text-gray-900">{staff.name}</span>
            </Space>
          ))}
        </div>

        {/* Time Grid */}
        <div className="grid grid-cols-[80px_1fr_1fr] gap-4">
          {/* Time Column */}
          <div>
            {timeSlots.map((time, idx) => (
              <div
                key={time}
                className="py-4 text-gray-500 text-sm border-t border-gray-200 relative"
              >
                {time}
                {idx === 1 && (
                  <div className="absolute left-20 top-2 bg-red-200 text-red-900 px-2 py-1 rounded text-xs whitespace-nowrap">
                    14:37
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Staff 1 Column */}
          <div>
            {timeSlots.map((time) => (
              <div
                key={`staff1-${time}`}
                className="py-4 border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {/* Empty slots for demo */}
              </div>
            ))}
          </div>

          {/* Staff 2 Column */}
          <div>
            {timeSlots.map((time) => (
              <div
                key={`staff2-${time}`}
                className="py-4 border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {/* Empty slots for demo */}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
