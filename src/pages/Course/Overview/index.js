import React from "react";
import Introduction from "./Introduction";
import Feedback from "./Feedback";
import Project from "./Project";
import Comment from "./Comment";
export default function Overview() {
  return (
    <div className="overview">
      <Introduction />
      <Feedback />
      <Project />
      <Comment />
    </div>
  );
}
