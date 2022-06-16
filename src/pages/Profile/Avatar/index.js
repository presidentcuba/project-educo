import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import setting from "src/assets/setting.svg";
import profile from "src/assets/profile.svg";
import insta from "src/assets/insta.svg";
import face from "src/assets/face.svg";
import tw from "src/assets/tw.svg";
import "./styles.scss";
export default function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar-header">
        <Link to="/profile/setting">
          <img src={setting} alt="setting" />
        </Link>
      </div>

      <div className="info-box">
        <div className="avatar-img">
          <img src={profile} alt="" />
        </div>
      </div>

      <div className="content">
        <Typography.Text className="name">@isayef</Typography.Text>
        <Typography.Text className="description">
          Just a simple guy who loves do something new and fun! 😜
        </Typography.Text>
        <div className="avatar-icon">
          <img src={insta} alt="" />
          <img src={face} alt="" />
          <img src={tw} alt="" />
        </div>
      </div>
    </div>
  );
}
