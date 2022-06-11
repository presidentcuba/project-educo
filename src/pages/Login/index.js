import "./styles.scss";
import { Button, Carousel, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "src/assets/login-one.svg";
import logo1 from "src/assets/login-two.svg";
import logo2 from "src/assets/login-three.svg";

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
    <div className="login-container">
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

      <Button className="btn btn-register" type="primary">
        <Link to="/register">Register</Link>
      </Button>

      <Button className="btn btn-login">
        <Link to="/login-detail">Log in </Link>
      </Button>
    </div>
  );
};
export default LoginPage;
