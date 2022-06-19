import React from "react";
import { Typography } from "antd";
import avatar from "src/assets/avatar1.svg";
import star from "src/assets/star-ye.svg";
import user from "src/assets/user.svg";
import "./styles.scss";

export default function Feedback() {
  const data = {
    title: "Feedback",
    rating: "4.7",
    totalStudent: 753,
    feedback: [
      {
        avatar: avatar,
        userName: "mannes_sammy",
        time_at: "31 mins ago",
        content:
          "Sed suspendisse elit sit trist gristi queget quis tristique pulectus!",
      },
      {
        avatar: avatar,
        userName: "justin",
        time_at: "01 hour ago",
        content: "Great suspendisse elit sit trist gristi",
      },
      {
        avatar: avatar,
        userName: "mannes_sammy",
        time_at: "31 mins ago",
        content:
          "Sed suspendisse elit sit trist gristi queget quis tristique pulectus!",
      },
    ],
  };
  const RenderComment = ({ item }) => {
    return (
      <div className="comment">
        <div className="image">
          <img src={item.avatar} alt={item.userName} />
        </div>
        <div className="thread">
          <Typography.Text className="name">@{item.userName}</Typography.Text>
          <Typography.Text className="time">{item.time_at}</Typography.Text>
          <Typography.Text className="content">{item.content}</Typography.Text>
        </div>
      </div>
    );
  };
  return (
    <div className="feedback">
      <Typography.Text className="feedback-title">{data.title}</Typography.Text>
      <div className="feedback-rating">
        <div className="item-rating">
          <div className="rate">
            <img src={star} alt="rating" />
            <span>{data.rating} </span>
          </div>
          <span>Reviews</span>
        </div>
        <div className="item-rating">
          <div className="user">
            <img src={user} alt="user" />
            <span>{data.totalStudent} </span>
          </div>
          <span>Students</span>
        </div>
      </div>
      <div className="comment-box">
        {data.feedback.map((item, index) => (
          <RenderComment item={item} key={index} />
        ))}
      </div>
      <Typography.Text className="feedback-btn">Load more</Typography.Text>
    </div>
  );
}
