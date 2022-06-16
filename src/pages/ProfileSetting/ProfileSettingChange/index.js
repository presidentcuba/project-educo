import "./styles.scss";

import { Button, Form, Typography, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const ProfileSettingChange = () => {
  return (
    <div className="profile-setting-change">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Password change</Typography.Text>
      <Form>
        <Form.Item
          nam="oldPassword"
          rules={[
            { required: true, message: "Does not match with old password!" },
          ]}
        >
          <Input placeholder="Enter old password" type="password" />
        </Form.Item>

        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: "password is not vallid!" }]}
        >
          <Input placeholder="Enter new password" type="password" />
        </Form.Item>
        <Form.Item
          nam="re-password"
          rules={[{ required: true, message: "Must match both password!" }]}
        >
          <Input placeholder="confirm password" type="password" />
        </Form.Item>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/register">Reset</Link>
      </Button>
    </div>
  );
};
export default ProfileSettingChange;
