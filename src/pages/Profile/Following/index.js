import React from "react";
import CardInfoTeacher from "src/components/CardInfoTeacher";
import avatar from "src/assets/avatar1.svg";
import "./styles.scss";

const data = {
  image: avatar,
  name: "Sammuel Jonass",
  description: "@jdoe",
  isFollow: true,
};
const Following = () => {
  return (
    <div className="following">
      <div className="box">
        {[...new Array(8)].map((_) => (
          <CardInfoTeacher data={data} />
        ))}
      </div>
    </div>
  );
};
export default Following;
