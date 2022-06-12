import "./styles.scss";
import { Button, Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const ResetPassword = () => {
  return (
    <div className="reset-pass-container">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Reset your password</Typography.Text>
      <Form>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "password is not vallid!" }]}
        >
          <Input placeholder="Enter new password" type="password" />
        </Form.Item>
        <Form.Item
          name="re-password"
          rules={[{ required: true, message: "password is not vallid!" }]}
        >
          <Input placeholder="Enter new password" type="password" />
        </Form.Item>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/login">reset</Link>
      </Button>
    </div>
  );
};
export default ResetPassword;
