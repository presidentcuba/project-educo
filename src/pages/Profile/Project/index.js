import React from "react";
import CardInfo from "src/components/CardInfo";
import { Row, Col } from "antd";
import demo from "src/assets/demo.svg";
import "./styles.scss";

const dataCardInfo = { image: demo };

export default function Project() {
  return (
    <div className="projects">
      <div className="item">
        <Row>
          {[...new Array(3)].map((_, index) => (
            <Col span={12} key={index}>
              <CardInfo data={dataCardInfo} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
