import React from "react";
import { Typography, Row, Col } from "antd";
import project from "src/assets/project.svg";
import "./styles.scss";
export default function Project() {
  const data = {
    title: "Project by student",
    project: [
      { url: project },
      { url: project },
      { url: project },
      { url: project },
    ],
  };
  return (
    <div className="project-by-student">
      <div className="project-header">
        <Typography.Text className="title">{data.title}</Typography.Text>
        <Typography.Text className="btn-add">Add project</Typography.Text>
      </div>
      <div className="project-content">
        <Row>
          {data.project.map((image, index) => (
            <Col span={12} key={index}>
              <img src={image.url} alt="" />
            </Col>
          ))}
        </Row>
      </div>
      <Typography.Text className="project-btn">Load more</Typography.Text>
    </div>
  );
}
