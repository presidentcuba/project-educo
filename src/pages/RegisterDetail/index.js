import "./styles.scss";

import { Button, Form, Typography, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const RegisterDetail = () => {
  return (
    <div className="register-detail-container">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Enter your details</Typography.Text>
      <Form>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "username is not vallid!" }]}
        >
          <Input placeholder="User name" type="text" />
        </Form.Item>
        <Form.Item
          nam="email"
          rules={[{ required: true, message: "email is not vallid!" }]}
        >
          <Input placeholder="email address" type="text" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "password is not vallid!" }]}
        >
          <Input placeholder="password" type="password" />
        </Form.Item>
        <Form.Item
          nam="re-password"
          rules={[
            { required: true, message: "confirm password is not vallid!" },
          ]}
        >
          <Input placeholder="confirm password" type="password" />
        </Form.Item>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/register">Continue</Link>
      </Button>
    </div>
  );
};
export default RegisterDetail;
