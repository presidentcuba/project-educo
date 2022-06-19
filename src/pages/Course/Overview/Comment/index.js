import React from "react";
import { Typography } from "antd";
import avatar from "src/assets/avatar1.svg";
import like from "src/assets/like.svg";
import "./styles.scss";

export default function Comment() {
  const data = {
    sumComment: 5,
    comments: [
      {
        avatar: avatar,
        userName: "mannes_sammy",
        time_at: "31 mins ago",
        isLike: true,
        totalLike: 15,
        type: "Student",
        content: "How to get better at line? I am really stuck in this step!",
      },
      {
        avatar: avatar,
        isLike: false,
        userName: "justin",
        type: "Student",
        totalLike: 15,
        time_at: "01 hour ago",
        content: "Great suspendisse elit sit trist gristi",
        children: [
          {
            avatar: avatar,
            isLike: false,
            userName: "justin",
            totalLike: 11,
            type: "Student",
            time_at: "01 hour ago",
            content: "Great suspendisse elit sit trist gristi",
          },
        ],
      },
      {
        avatar: avatar,
        isLike: false,
        totalLike: 10,
        userName: "mannes_sammy",
        type: "Student",
        time_at: "31 mins ago",
        content: "Can you tell me how can i upload img to cloud saas?!",
      },
    ],
  };
  const RenderComment = ({ comment }) => {
    return (
      <div className="comment-detail">
        <div className="image">
          <img src={comment.avatar} alt={comment.userName} />
        </div>
        <div className="thread">
          <Typography.Text className="name">
            @{comment.userName}
          </Typography.Text>
          <Typography.Text className="time">
            {comment.time_at} . {comment.type}
          </Typography.Text>
          <Typography.Text className="content">
            {comment.content}
          </Typography.Text>
          <div className="like-box">
            <div className="like-reply item" style={{ margin: "10px 0px" }}>
              <Typography.Text className="like" style={{ marginRight: "5px" }}>
                Liked
              </Typography.Text>
              <Typography.Text className="reply">Reply</Typography.Text>
            </div>
            <div className="icon item">
              <img src={like} alt="like" />
              <Typography.Text className="total-like">
                {comment.totalLike}
              </Typography.Text>
            </div>
          </div>
          {/* {comment.children && comment.children && (
            <Typography.Text className="total-like">
              view {comment.children} replies
            </Typography.Text>
          )} */}
        </div>
      </div>
    );
  };
  return (
    <div className="comment">
      <div className="comment-header">
        <Typography.Text className="title">
          {data.sumComment} Comments
        </Typography.Text>
        <Typography.Text className="btn-add">Add comment</Typography.Text>
      </div>
      <div className="comment-content">
        {data.comments.map((comment, index) => (
          <RenderComment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
}
