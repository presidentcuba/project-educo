import { Typography } from "antd";
import "./styles.scss";
const CardInfo = ({ data }) => {
  const { image, title } = data;
  return (
    <div className="card-info">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="title">
        <Typography.Text>{title}</Typography.Text>
      </div>
    </div>
  );
};
export default CardInfo;
