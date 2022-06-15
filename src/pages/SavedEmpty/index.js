import "./styles.scss";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "src/assets/forgot.svg";

const SavedEmpty = () => {
  return (
    <div className="saved-empty-container">
      <div className="login-slider">
        <div className="login-image">
          <img src={logo} alt="" />
        </div>

        <Typography.Text className="slogan">Nothing is here!l</Typography.Text>
        <Typography.Text className="description">
          We found nothing in your save list! Want to have some? Try something
          best
        </Typography.Text>
      </div>

      <Button className="button-recomended">
        <Link to="/saved/list">Recomended</Link>
      </Button>
    </div>
  );
};
export default SavedEmpty;
