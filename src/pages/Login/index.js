import "./styles.scss";
import { Button, Carousel, Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "src/assets/login-one.svg";
import logo1 from "src/assets/login-two.svg";
import logo2 from "src/assets/login-three.svg";
import { Content } from "antd/lib/layout/layout";
import Paragraph from "antd/lib/skeleton/Paragraph";

const LoginPage = () => {
  const dataLogin = [
    {
      image: logo,
      label: "Better way to learning is calling you!",
      description: "Impeet viverra vivamus porttior ules ac vulte lectus velit sen lectus ue ",
    },
    {
      image: logo1,
      label: "Find yourself  by doing whatever you do ! ",
      description: "Impeet viverra vivamus porttior ules ac vulte lectus velit sen lectus ue ",
    },
    {
      image: logo2,
      label: "It’s not just learning,It’s a promise!",
      description: "Impeet viverra vivamus porttior ules ac vulte lectus velit sen lectus ue ",
    },
  ];
  return (
    <>
      <Layout className="login-container">
        <Content>
          <Typography.Text className="btn-skip">skip</Typography.Text>
          <Carousel dots={true} autoplay={true} effect="fade">
            {dataLogin.map((data, index) => (
              <div className="login-slider" key={index}>
                <div className="carousel-slide">
                  <img width={210} src={data.image} alt={data.label} />
                  <Typography.Text className="slogan">{data.label}</Typography.Text>
                  <Typography.Text className="description">{data.description}</Typography.Text>
                </div>
              </div>
            ))}
          </Carousel>
          {/* <Link to="/register"> */}
          <Button className="btn btn-primary btn-register" type="primary" block>
            Register
          </Button>
          {/* </Link> */}
          {/* <Link to="/login-detail"> */}
          <Button className="btn btn-secondary btn-login" block>
            Log in
          </Button>
          {/* </Link> */}
        </Content>
      </Layout>
    </>
  );
};
export default LoginPage;
