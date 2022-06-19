import InfoCourseDetail from "./InfoCourseDetail/index";
import Overview from "./Overview";
import Lessons from "./Lessons";
import { Tabs } from "antd";

const Course = () => {
  const { TabPane } = Tabs;

  return (
    <>
      <InfoCourseDetail />

      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Overview" key="1">
          <Overview />
        </TabPane>
        <TabPane tab="Lessons" key="2">
          <Lessons />
        </TabPane>
      </Tabs>
    </>
  );
};
export default Course;
