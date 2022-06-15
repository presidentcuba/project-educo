import React, { useState } from "react";
import { Drawer, Typography } from "antd";
import CardInfoTeacher from "src/components/CardInfoTeacher";
import { LeftOutlined } from "@ant-design/icons";
import avatar from "src/assets/avatar1.svg";
import "./styles.scss";

const data = {
  image: avatar,
  name: "Sammuel Jonass",
  description: "@jdoe",
  isFollow: true,
};
const TopTeacher = ({ onClose, visible }) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <LeftOutlined onClick={onClose} />
      <div className="top-teacher">
        <Typography.Text className="title">
          Top teacher this month
        </Typography.Text>
        <div className="box">
          {[...new Array(8)].map((_) => (
            <CardInfoTeacher data={data} />
          ))}
        </div>
      </div>
    </Drawer>
  );
};
export default TopTeacher;
