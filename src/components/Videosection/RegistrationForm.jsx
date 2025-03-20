import React, { useState } from "react";
import { Button, Form, Input, Select, Modal, message } from "antd";
import { MailOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import "./styles.css"; // Assuming you’ll add custom styles here if needed

const { Option } = Select;

function RegistrationForm({ visible, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Make API call to your Vercel serverless function
      const response = await fetch('https://intellitop-form-handler-serverless.vercel.app/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send all form values
      });

      const result = await response.json();

      if (response.ok) {
        message.success("Registration successful! We’ll get in touch soon.");
        form.resetFields();
        onClose();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      message.error("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fill in all required fields correctly.");
  };

  return (
    <Modal
      title={<h2 className="text-[#1a1a1a] text-2xl font-bold">Register with Intelitop</h2>}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      bodyStyle={{ padding: "24px", backgroundColor: "#ffffff" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="registration-form"
      >
        <Form.Item
          name="fullName"
          label={<span className="text-[#333333] font-semibold">Full Name</span>}
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            prefix={<UserOutlined className="text-[#4A4AF3]" />}
            placeholder="Enter your full name"
            size="large"
            style={{ borderRadius: "4px", borderColor: "#d1d1d1" }}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span className="text-[#333333] font-semibold">Email</span>}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-[#4A4AF3]" />}
            placeholder="Enter your email"
            size="large"
            style={{ borderRadius: "4px", borderColor: "#d1d1d1" }}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<span className="text-[#333333] font-semibold">Phone Number</span>}
          rules={[
            { required: true, message: "Please enter your phone number" },
            { pattern: /^\+?[1-9]\d{6,14}$/, message: "Please enter a valid phone number" },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="text-[#4A4AF3]" />}
            placeholder="Enter your phone number (e.g., +234123456789)"
            size="large"
            style={{ borderRadius: "4px", borderColor: "#d1d1d1" }}
          />
        </Form.Item>

        <Form.Item
          name="interest"
          label={<span className="text-[#333333] font-semibold">What Are You Interested In?</span>}
          rules={[{ required: true, message: "Please select your interest" }]}
        >
          <Select
            placeholder="Select an option"
            size="large"
            style={{ borderRadius: "4px" }}
          >
            <Option value="scholarship">Scholarship Exam Preparation</Option>
            <Option value="language">Language Proficiency (IELTS, TOEFL, etc.)</Option>
            <Option value="standardized">Standardized Exams (SAT, GRE, etc.)</Option>
            <Option value="software">Custom Software Development</Option>
            <Option value="other">Other (Specify in Message)</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="message"
          label={<span className="text-[#333333] font-semibold">Message (Optional)</span>}
        >
          <Input.TextArea
            placeholder="Tell us more about your needs"
            rows={4}
            style={{ borderRadius: "4px", borderColor: "#d1d1d1" }}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-end gap-4">
            <Button
              onClick={onClose}
              size="large"
              style={{
                borderRadius: "4px",
                borderColor: "#d1d1d1",
                color: "#333333",
                backgroundColor: "#e0e0e0",
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              style={{
                borderRadius: "4px",
                backgroundColor: "#4A4AF3",
                borderColor: "#4A4AF3",
                color: "#ffffff",
              }}
              className="hover:bg-[#3b3bd6]"
            >
              Submit Registration
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default RegistrationForm;