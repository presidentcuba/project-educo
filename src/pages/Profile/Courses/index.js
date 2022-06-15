import React from "react";
import { Row, Col } from "antd";
import CardSearch from "src/components/CardSearch";
import demo from "src/assets/searchfilter.png";
import "./styles.scss";

const dataSearch = {
  image: demo,
  title: "Adobe illustrator for all beginner artist",
  name: "Samule Doe",
  total: 4,
  rate: 4.7,
};

export default function Courses() {
  return (
    <div className="courses">
      <div className="item">
        <Row>
          {[...new Array(5)].map((_, index) => (
            <Col span={24} key={index}>
              <CardSearch data={dataSearch} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
