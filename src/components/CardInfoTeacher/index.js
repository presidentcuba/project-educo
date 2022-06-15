import { Typography, Button } from "antd";
import "./styles.scss";
const CardInfoTeacher = ({ data }) => {
  const { image, title, name, description, isFollow } = data;
  return (
    <div className="card-info-teacher">
      <div className="avatar">
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="card-box">
          <Typography.Text className="name">{name}</Typography.Text>
          <Typography.Text className="description">
            {description}
          </Typography.Text>
        </div>
      </div>

      <Button className="button-follow">{isFollow ? "Follow" : "View"}</Button>
    </div>
  );
};
export default CardInfoTeacher;
