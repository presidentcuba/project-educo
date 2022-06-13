import { Typography } from "antd";
import "./styles.scss";
const CardSearch = ({ data }) => {
  const { image, title, name, position } = data;
  return (
    <div className="card-info">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="name">
        <Typography.Text>{name ? name : ""}</Typography.Text>
      </div>
      <div className="position">
        <Typography.Text>{position ? position : ""}</Typography.Text>
      </div>
      <div className="title">
        <Typography.Text>{title ? title : ""}</Typography.Text>
      </div>
    </div>
  );
};
export default CardSearch;
