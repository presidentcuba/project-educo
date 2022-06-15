import "./styles.scss";
import { useState } from "react";
import { Typography, Row, Col, Button } from "antd";
import CardSearch from "src/components/CardSearch";
import demo from "src/assets/searchfilter.png";

const SavedList = () => {
  const dataSearch = {
    image: demo,
    title: "Adobe illustrator for all beginner artist",
    name: "Samule Doe",
    total: 4,
    rate: 4.7,
  };

  return (
    <div className="saved-list">
      <div className="saved">
        <div className="saved-title">
          <Typography.Text className="title">My save list</Typography.Text>
        </div>

        <div className="item">
          <Row>
            {[...new Array(5)].map((_, index) => (
              <Col span={24} key={index}>
                <CardSearch data={dataSearch} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="box-btn">
          <Button className="btn-add-more">Add more</Button>
        </div>
      </div>
    </div>
  );
};
export default SavedList;
