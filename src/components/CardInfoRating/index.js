import { Typography } from "antd";
import star from "src/assets/star.svg";
import "./styles.scss";
const CardRating = ({ data }) => {
  const { image, title, type, description, number, total } = data;
  return (
    <div className="card-rating">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <div className="card-box">
        <div className="title">
          <Typography.Text>{title}</Typography.Text>
        </div>
        <div className="description">
          <Typography.Text>{description}</Typography.Text>
        </div>
        <div className="rating">
          <div className="rating-box">
            <div className="rating-number number">{number}</div>
            <div className="rating-star">
              {[...new Array(4)].map((_, index) => (
                <img src={star} className="star" alt="star" key={index} />
              ))}
            </div>
          </div>
          <div className="rating-total number">({total})</div>
        </div>
      </div>
      <div className="box-name">
        <Typography.Text>{type}</Typography.Text>
      </div>
    </div>
  );
};
export default CardRating;
