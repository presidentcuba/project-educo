import { Typography } from "antd";
const CardInfo = ({ ...props }) => {
  const { image, label, sale } = props;
  return (
    <div className="card-info">
      <div className="image">
        <img src={image} alt={label} />
      </div>
      <div className="title">
        <Typography.Text>{label}</Typography.Text>
      </div>
      <div className="box">
        <Typography.Text>{sale}</Typography.Text>
      </div>
    </div>
  );
};
export default CardInfo;
