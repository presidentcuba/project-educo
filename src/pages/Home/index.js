import CardInfo from "src/components/CardInfo";
import CardRating from "src/components/CardInfoRating";
import "./styles.scss";
import { Row, Col, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import demo from "src/assets/demo.svg";
import avatar from "src/assets/avatar1.svg";
import home from "src/assets/home.jpg";
import home1 from "src/assets/hom1.png";
import user from "src/assets/user.png";
import search from "src/assets/search.png";

const data = { image: demo, title: "Interior design" };
const dataRating = {
  image: demo,
  title: "HTML, CSS for nooband nerds! ",
  type: "HOT",
  total: 555,
  number: 4,
  description: "Sayef Mamud, PixelCo",
};
const Home = () => {
  return (
    <div className="home">
      {/* info */}
      <div className="info">
        <div className="info-title">
          <Typography.Text className="title">Hola, sayef!</Typography.Text>
          <Typography.Text className="question">
            What do you wanna learn today?
          </Typography.Text>
        </div>
        <div className="info-avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="input-search">
        <Input suffix={<SearchOutlined />} placeholder="Graphic illustration" />
      </div>
      <div className="home-body">
        {/* popular */}
        <div className="popular main">
          <div className="body-title">
            <Typography.Text className="title">
              Popular category our in platform
            </Typography.Text>
            <Link to="/home" className="see-more">
              see more
            </Link>
          </div>

          <div className="item">
            <Row>
              {[...new Array(2)].map((item) => (
                <Col span={12}>
                  <CardInfo data={data} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {/* most-category */}
        <div className="most-category main">
          <div className="body-title">
            <Typography.Text className="title">
              Most watching category in month
            </Typography.Text>
            <Link to="/home" className="see-more">
              see more
            </Link>
          </div>

          <div className="item">
            <Row>
              {[...new Array(2)].map((_) => (
                <Col span={12}>
                  <CardRating data={dataRating} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {/* most-category */}

        <div className="most-category main">
          <div className="body-title">
            <Typography.Text className="title">
              Continue to watch previous class
            </Typography.Text>
            <Link to="/home" className="see-more">
              see more
            </Link>
          </div>

          <div className="item">
            <Row>
              {[...new Array(2)].map((_) => (
                <Col span={12}>
                  <CardRating data={dataRating} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {/* most-category */}

        <div className="most-category main">
          <div className="body-title">
            <Typography.Text className="title">
              What others are watching in app
            </Typography.Text>
            <Link to="/home" className="see-more">
              see more
            </Link>
          </div>

          <div className="item">
            <Row>
              {[...new Array(2)].map((_) => (
                <Col span={12}>
                  <CardRating data={dataRating} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {/* menu */}
        <div className="menu">
          <div className="menu-box">
            <div className="menu-home icon">
              <img src={home} alt="home" />
              <Typography.Text className="text">Home</Typography.Text>
            </div>
            <img src={search} alt="search icon" />
            <img src={home1} alt="home icon" />
            <img src={user} alt="user icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
