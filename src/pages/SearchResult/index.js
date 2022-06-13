import "./styles.scss";
import { Typography, Row, Col } from "antd";
import CustomInput from "src/components/Input";
import CardSearch from "src/components/CardSearch";
import demo from "src/assets/searchfilter.png";

const SearchResult = () => {
  const dataSearch = {
    image: demo,
    title: "Adobe illustrator for all beginner artist",
    name: "Samule Doe",
    total: 4,
    rate: 4.7,
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
        <Typography.Text className="title">Your search result</Typography.Text>
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
    </div>
  );
};
export default SearchResult;
