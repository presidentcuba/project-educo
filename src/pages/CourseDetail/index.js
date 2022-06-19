import "./styles.scss";

import { Button, Form, Typography, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import avatar from "src/assets/avatar1.svg";
import course from "src/assets/course.svg";

const CourseDetail = () => {
  const data = {
    title: "Halloween poster ",
    avatar: avatar,
    userName: "mouni",
    time_at: "11 mins ago",
    type: "Student",
    title_course: "Comic drawing essential for everyone!",
    image_course: course,
    content:
      "Adipiscing proin a consectetur id tris tique sed adipiscing lorem non ut proin et amet aliqu am nunc aenean tellus id at mi, quis ut hdrerit pus aliquam scelerisque mauris, id volutpat viver lacus",
    description:
      "Tincidunt nulla enim volutpat nunc, habitant of neque non netus sodales id tortor lacus, alam integer lobortis proin quam integer pretium",
    totalLike: 21,
    view: 50,
  };
  return (
    <div className="course-detail">
      <div className="icon-back">
        <Link to="/course/lesson">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">
        Add your payment method
      </Typography.Text>
      <div className="info-user">
        <div className="image">
          <img src={data.avatar} alt={data.userName} />
        </div>
        <div className="info">
          <Typography.Text className="name">@{data.userName}</Typography.Text>
          <Typography.Text className="type">
            {data.time_at} . {data.type}
          </Typography.Text>
        </div>
      </div>
      <div className="content-body">
        <Typography.Text className="with">
          Project associated with:
        </Typography.Text>
        <Typography.Text className="title-course">
          {data.title_course}
        </Typography.Text>
        <div className="image-course">
          <img src={data.image_course} alt={data.title_course} />
        </div>
        <Typography.Text className="content">{data.content}</Typography.Text>
        <Typography.Text className="description">
          {data.description}
        </Typography.Text>
      </div>
      <div className="like-view">
        <Typography.Text className="like">{data.totalLike}</Typography.Text>
        <Typography.Text className="view">{data.view}</Typography.Text>
      </div>
    </div>
  );
};
export default CourseDetail;
