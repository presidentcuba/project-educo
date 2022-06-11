import "./styles.scss";
import { Button, Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Enter your email</Typography.Text>
      <Form>
        <Form.Item
          nam="email"
          rules={[{ required: true, message: "email is not vallid!" }]}
        >
          <Input placeholder="email address" type="text" />
        </Form.Item>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/forgot-password/check-mail">send email</Link>
      </Button>
    </div>
  );
};
export default ForgotPassword;
