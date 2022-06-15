import "./styles.scss";
import { useState } from "react";
import { Typography, Row, Col, Drawer } from "antd";
import CustomInput from "src/components/Input";
import CardSearch from "src/components/CardSearch";
import TopTeacher from "./TopTeacher";
import Filter from "./Filter";
import demo from "src/assets/searchfilter.png";
import filter from "src/assets/filter.svg";

const SearchResult = () => {
  const [visible, setVisible] = useState(false);
  const dataSearch = {
    image: demo,
    title: "Adobe illustrator for all beginner artist",
    name: "Samule Doe",
    total: 4,
    rate: 4.7,
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="page-search-filter">
      <div className="input-search">
        <CustomInput
          onChange={handleChange}
          placeholder="Graphic illustration"
        />
      </div>

      <div className="result">
        <div className="result-title">
          <Typography.Text className="title">
            Your search result
          </Typography.Text>
          <img onClick={showDrawer} src={filter} alt="filter" />
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
      </div>
      {/* <Filter visible={visible} onClose={onClose} /> */}
      <TopTeacher visible={visible} onClose={onClose} />
    </div>
  );
};
export default SearchResult;
