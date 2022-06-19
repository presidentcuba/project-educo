import React from "react";
import { Typography } from "antd";
import download from "src/assets/Group.svg";
import "./styles.scss";

export default function Resources() {
  const data = [
    { typeFile: ".img", typeSize: "4Mb", title: "practice class sketches" },
    { typeFile: ".pdf", typeSize: "4Mb", title: "Home work sheets" },
    { typeFile: ".pdf", typeSize: "4Mb", title: "Home work sheets" },
  ];

  const Box = ({ item }) => {
    return (
      <div className="box">
        <div className="box-left">
          <div
            className={`typeFile ${item.typeFile === ".img" ? "active" : ""}`}
          >
            <Typography.Text>{item.typeFile}</Typography.Text>
          </div>
          <div className="info-title">
            <Typography.Text>{item.title}</Typography.Text>
            <div className="info">
              <Typography.Text>{item.typeFile}</Typography.Text>
              <Typography.Text>{item.typeSize}</Typography.Text>
            </div>
          </div>
        </div>
        <div className="icon">
          <img src={download} alt="download" />
        </div>
      </div>
    );
  };

  return (
    <div className="resources">
      <Typography.Text className="title">
        Resources for download
      </Typography.Text>
      {data.map((item, index) => {
        console.log(item);
        return <Box item={item} key={index} />;
      })}
    </div>
  );
}
