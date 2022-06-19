import React from "react";
import { Typography, Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./styles.scss";
import avatar from "src/assets/avatar1.svg";
import save from "src/assets/save1.svg";
import clock from "src/assets/clock.svg";
import video from "src/assets/video.png";
import star from "src/assets/star.png";
import user from "src/assets/user.svg";
import playback from "src/assets/Playback.svg";

const data = {
  avatar: avatar,
  userName: "Anny Morriarty",
  title: "Comic drawing essentialfor everyone!",
  time: "1.hour 30 min",
  lesson: "12",
  video: playback,
  rating: "4,7",
  totalRate: 753,
  totalStudent: "2K",
  trend: "hot",
  content:
    "Lectus vitae lorem luctus mostie vitae mbi curabitur magna facilisis turpis nullam nibh gfas ultricies purus molestie quis impert id agger adipiscing molestie auctor arcu ium  atd eget faucibus quis id!",
};
export default function InfoCourseDetail() {
  return (
    <div className="info-course-detail">
      <div className="info-header">
        <LeftOutlined className="icon" />
        <Typography.Text className="info-title">Details</Typography.Text>
        <img src={save} alt="icon saved" />
      </div>
      <div className="info-play-back">
        <img src={data.video} alt="video" />
      </div>
      <div className="info-detail">
        <div className="info-trend">
          <Typography.Text>{data.trend}</Typography.Text>
        </div>
        <div className="info-user">
          <img src={data.avatar} alt="avatar" />
          <Typography.Text className="info-username">
            {data.userName}
          </Typography.Text>
        </div>
        <Typography.Text className="info-title">{data.title}</Typography.Text>
        <div className="info-content">
          <Row>
            <Col span={10}>
              <div className="info-item time">
                <img src={clock} alt="time" />
                <Typography.Text>{data.time}</Typography.Text>
              </div>
            </Col>
            <Col span={14}>
              <div className="info-item lesson">
                <img src={video} alt="video lesson" />
                <Typography.Text>{data.lesson} Lessons</Typography.Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <div className="info-item rating">
                <img src={star} alt="rating" />
                <Typography.Text>{data.rating}</Typography.Text>
                <Typography.Text>({data.totalRate})</Typography.Text>
              </div>
            </Col>
            <Col span={14}>
              <div className="info-item lesson">
                <img src={user} alt="user lesson" />
                <Typography.Text>{data.totalStudent} students</Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <Typography.Text className="content">{data.content}</Typography.Text>
      </div>
    </div>
  );
}
