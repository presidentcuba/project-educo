import CardInfo from "src/components/CardInfo";
import CardRating from "src/components/CardInfoRating";
import CustomInput from "src/components/Input";
import "./styles.scss";
import { Row, Col, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import demo from "src/assets/demo.svg";
import avatar from "src/assets/avatar1.svg";

import teacher from "src/assets/teacher.png";

const dataCardInfo = { image: demo, title: "Interior design" };
const dataPopular = {
  image: teacher,
  name: "Sarrah Morry",
  position: "Programmer",
};
const dataRating = {
  image: demo,
  title: "HTML, CSS for nooband nerds! ",
  type: "HOT",
  total: 555,
  number: 4,
  description: "Sayef Mamud, PixelCo",
};
const Home = () => {
  const handleChange = (e) => {
    console.log(e);
  };
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
        <CustomInput
          onChange={handleChange}
          placeholder="Graphic illustration"
        />
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
              {[...new Array(2)].map((_, index) => (
                <Col span={12} key={index}>
                  <CardInfo data={dataCardInfo} />
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
              {[...new Array(2)].map((_, index) => (
                <Col span={12} key={index}>
                  <CardRating data={dataRating} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        {/* our-top popular */}

        <div className="top-popular main">
          <div className="body-title">
            <Typography.Text className="title">
              Our top popular teacher this month
            </Typography.Text>
            <Link to="/home" className="see-more">
              see more
            </Link>
          </div>

          <div className="item">
            <Row>
              {[...new Array(2)].map((_, index) => (
                <Col span={12} key={index}>
                  <CardInfo data={dataPopular} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="try-free">
            <Typography.Text className="slogan">
              Try free trial to enhance your creative journey!
            </Typography.Text>
            <Link to="/" className="get-free">
              Get free trial
            </Link>
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
              {[...new Array(2)].map((_, index) => (
                <Col span={12} key={index}>
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
              {[...new Array(2)].map((_, index) => (
                <Col span={12} key={index}>
                  <CardRating data={dataRating} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
