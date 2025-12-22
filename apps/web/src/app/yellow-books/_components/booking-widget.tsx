'use client';

import { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select, message } from 'antd';

const { Option } = Select;

interface BookingWidgetProps {
  businessName: string;
}

export default function BookingWidget({ businessName }: BookingWidgetProps) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // In a real app this would POST to backend
    message.success('Захиалга амжилттай илгээгдлээ');
    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button
        type="primary"
        className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none hover:from-indigo-600 hover:to-purple-700"
        onClick={() => setOpen(true)}
      >
        Цаг захиалах
      </Button>

      <Modal
        title={`${businessName} - Цаг захиалах`}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Нэр"
            name="name"
            rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
          >
            <Input size="large" placeholder="Таны нэр" />
          </Form.Item>
          <Form.Item
            label="Утас"
            name="phone"
            rules={[{ required: true, message: 'Утасны дугаар оруулна уу' }]}
          >
            <Input size="large" placeholder="99119911" />
          </Form.Item>
          <Form.Item
            label="Огноо"
            name="date"
            rules={[{ required: true, message: 'Огноо сонгоно уу' }]}
          >
            <DatePicker size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Цаг"
            name="time"
            rules={[{ required: true, message: 'Цаг сонгоно уу' }]}
          >
            <Select size="large" placeholder="Цаг сонгох">
              <Option value="09:00">09:00</Option>
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="13:00">13:00</Option>
              <Option value="14:00">14:00</Option>
              <Option value="15:00">15:00</Option>
              <Option value="16:00">16:00</Option>
              <Option value="17:00">17:00</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Нэмэлт хүсэлт" name="note">
            <Input.TextArea rows={3} placeholder="Товч тайлбар үлдээнэ үү" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border-none h-12 font-semibold hover:from-indigo-600 hover:to-purple-700"
            >
              Захиалга батлах
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
