import React from "react";
import { Typography } from "antd";
import "./styles.scss";

export default function Introduction() {
  const data = {
    title: " Introduction",
    content:
      "Ipsum quam imperdiet mollis massa bibendum odio vitae in vehicula augue ullamcorper eget a ultrices amet amet, arcu at sem et egestassaf a  facilisi a, diam integer velit, sed gravida sed eu",
    description:
      "Tllamcorper eget a ultrices amet amet, arcu at sem et egestassaf a  facilisi a, diam integer velit, sed gravida sed eu",
  };
  return (
    <div className="introduction">
      <Typography.Text className="introduction-title">
        {data.title}
      </Typography.Text>
      <Typography.Text className="introduction-content">
        {data.content}
      </Typography.Text>
      <Typography.Text className="introduction-description">
        {data.description}
      </Typography.Text>
      <Typography.Text className="introduction-btn">See more</Typography.Text>
    </div>
  );
}
