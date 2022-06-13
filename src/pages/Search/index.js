import "./styles.scss";
import CardInfo from "src/components/CardInfo";
import { Typography, Row, Col } from "antd";
import CustomInput from "src/components/Input";
import demo from "src/assets/demo.svg";

const Search = () => {
  const dataCardInfo = { image: demo, title: "Interior design" };

  const dataSearch = ["photography", "craft", "procreate", "UX design"];
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="page-search">
      <div className="input-search">
        <CustomInput
          onChange={handleChange}
          placeholder="Graphic illustration"
        />
      </div>
      <div className="top-search">
        <Typography.Text className="title">Top searches</Typography.Text>
        <div className="item">
          {dataSearch.map((item, index) => (
            <div className="item-box" key={index}>
              <Typography.Text>{item}</Typography.Text>
            </div>
          ))}
        </div>
      </div>

      <div className="categories">
        <Typography.Text className="title">Categories</Typography.Text>
        <div className="item">
          <Row>
            {[...new Array(8)].map((_, index) => (
              <Col span={12} key={index}>
                <CardInfo data={dataCardInfo} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Search;
