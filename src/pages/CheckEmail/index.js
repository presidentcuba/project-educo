import "./styles.scss";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "src/assets/forgot.svg";

const CheckMail = () => {
  return (
    <div className="check-mail-container">
      <Typography.Text className="title">Check your email</Typography.Text>
      <Typography.Text className="description">
        We’ve sent a password recover instruction to your email
      </Typography.Text>
      <div className="check-mail-image">
        <img src={logo} alt="logo" />
      </div>

      <Button className="btn btn-register" type="primary">
        <Link to="/register">Open email app</Link>
      </Button>

      <Button className="btn btn-check-mail">
        <Link to="/forgot-password/reset">Will do it later </Link>
      </Button>
      <Typography.Text className="description_bot">
        Didn’t get any email? Check your spam folder or try again with a valid
        email.
      </Typography.Text>
    </div>
  );
};
export default CheckMail;
