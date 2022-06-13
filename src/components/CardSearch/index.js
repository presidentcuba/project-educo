import { Typography } from "antd";
import "./styles.scss";
import user from "src/assets/user.png";
import star from "src/assets/star.svg";
const CardSearch = ({ data }) => {
  const { image, title, name, total, rate } = data;
  return (
    <div className="card-search">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <Typography.Text className="info-title">
          {title ? title : ""}
        </Typography.Text>
        <Typography.Text className="info-name">
          {name ? name : ""}
        </Typography.Text>
        <div className="rating">
          <img className="user" src={user} alt="" />
          <Typography.Text className="total">{total}k student</Typography.Text>
          <img src={star} alt="star" />
          <Typography.Text>{rate}</Typography.Text>
        </div>
      </div>
    </div>
  );
};
export default CardSearch;
