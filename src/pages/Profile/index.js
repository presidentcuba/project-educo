import React from "react";
import { Tabs } from "antd";
import Avatar from "./Avatar";
import Project from "./Project";
import Courses from "./Courses";
import Following from "./Following";
import "./styles.scss";
export default function Profile() {
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="profile">
      <Avatar />
      <div className="profile-content">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Projects" key="1">
            <Project />
          </TabPane>
          <TabPane tab="Courses" key="2">
            <Courses />
          </TabPane>
          <TabPane tab="Following" key="3">
            <Following />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
