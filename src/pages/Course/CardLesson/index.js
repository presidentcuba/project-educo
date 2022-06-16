import React from "react";
import { Typography } from "antd";
import "./styles.scss";
export default function CardLesson({ data }) {
  const { image, name, lesson, content } = data;
  return (
    <div className="card-lesson">
      <div className="lesson">
        <img src={image} alt={name} />
        <div className="lesson-title">
          <Typography.Text className="title">{name}</Typography.Text>
          <Typography.Text className="des">{lesson}</Typography.Text>
        </div>
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
}
