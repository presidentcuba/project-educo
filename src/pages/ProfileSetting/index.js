import React from "react";
import { Button, Form, Typography, Input, Switch } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";
export default function ProfileSetting() {
  const dataMembership = {
    title: "Membership",
    content: "Free membership user",
    button: "upgrade",
    path: "/",
  };
  const dataAccount = {
    title: "Account",
    content: "Profile settings",
    button: "manage",
    path: "/profile/setting/profile-setting",
  };
  const dataSecurity = {
    title: "Security",
    content: "Password change",
    button: "manage",
    path: "/profile/setting/profile-change",
  };
  const dataFooter = ["About us", "Terms & Condition", "Privacy policy"];
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const CardBox = ({ data, onChange }) => {
    return (
      <div className="card-box">
        <Typography.Text className="title">{data.title}</Typography.Text>
        <div className="card-content">
          <Typography.Text className="content">{data.content}</Typography.Text>
          <Link to={data.path}>{data.button}</Link>
        </div>
      </div>
    );
  };
  return (
    <div className="profile-setting">
      <div className="icon-title">
        <Link to="/profile">
          <LeftOutlined />
        </Link>
        <div className="title">
          <Typography.Text>Settings</Typography.Text>
        </div>
      </div>
      <div className="profile-setting-content">
        <CardBox data={dataMembership} />
        <CardBox data={dataAccount} />
        <div className="card-notice">
          <Typography.Text className="title">Notification</Typography.Text>
          <div className="card-content">
            <Typography.Text className="content">
              Personalized Notifications
            </Typography.Text>
            <Switch defaultChecked />
          </div>
        </div>
        <CardBox data={dataSecurity} />
      </div>
      <div className="card-footer">
        <Typography.Text className="title">Help & Support</Typography.Text>
        <div className="footer-content">
          {dataFooter.map((item, index) => (
            <div className="card-item" key={index}>
              <Typography.Text className="title">{item}</Typography.Text>
              <RightOutlined />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
