import "./styles.scss";
import { Button, Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const CheckEmail = () => {
  return (
    <div className="check-mail-container">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Enter your email</Typography.Text>
      <Form>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "email is not vallid!" }]}
        >
          <Input placeholder="email address" type="text" />
        </Form.Item>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/register">send email</Link>
      </Button>
    </div>
  );
};
export default CheckEmail;
