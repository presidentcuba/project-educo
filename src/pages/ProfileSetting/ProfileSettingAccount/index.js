import "./styles.scss";
import { Button, Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import profile from "src/assets/profile.svg";

const ProfileSettingAccount = () => {
  return (
    <div className="profile-setting-account">
      <div className="icon-back">
        <Link to="/profile/setting">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Profile ettings</Typography.Text>

      <div className="avatar-img">
        <img src={profile} alt="" />
        <Typography.Text>Change profile picture</Typography.Text>
      </div>

      <Form>
        <Form.Item
          nam="username"
          rules={[{ required: true, message: "username is not vallid!" }]}
        >
          <Input placeholder="new username" type="text" />
        </Form.Item>
      </Form>
      <div className="button">
        <Button className="btn btn-cancel">Cancel</Button>
        <Button className="btn btn-save">save</Button>
      </div>
    </div>
  );
};
export default ProfileSettingAccount;
