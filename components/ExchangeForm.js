import React from 'react';
import { Form, Select, InputNumber, Button } from 'antd';
import currencies from '../constants/currencies';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export default ({ onFinish }) => {
  const [form] = Form.useForm();
    return (
        <Form form={form} {...formItemLayout} onFinish={onFinish}>
          <FormItem
            label="Input Number"
            name="amount"
            wrapperCol={{ span: 8 }}
            rules={[{ required: true, message: 'Please input amount!' }]}
            onChange={() => {
              form.submit();
            }}
          >
            <InputNumber
              size="large"
              min={1}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
          </FormItem>

          <FormItem
            label="From currency"
            name="from"
            rules={[{ required: true, message: 'Please select currency!' }]}
            wrapperCol={{ span: 8 }}
          >
            <Select
              options={currencies}
              onChange={() => form.submit()}
              size="large"
              style={{ width: 192 }}
              name="select"
            >
            </Select>
          </FormItem>
          <FormItem
            label="To currency"
            name="to"
            wrapperCol={{ span: 8 }}
            rules={[{ required: true, message: 'Please select currency!' }]}
          >
            <Select
              onChange={() => form.submit()}
              options={currencies}
              size="large"
              style={{ width: 192 }}
              name="select"
            >
            </Select>
          </FormItem>
        </Form>
    );
}