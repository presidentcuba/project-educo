import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Typography, Checkbox } from "antd";

export default function StepOne() {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <div className="payment-step-one">
      <Typography.Text className="title">
        Enhance your learning experience with us
      </Typography.Text>
      <Typography.Text className="description">
        Choose your plan that works for you. Cancel it anytime!
      </Typography.Text>
      <div className="type-payment">
        <div className="item">
          <Checkbox onChange={onChange} />
          <div className="content">
            <Typography.Text className="price">$14.99 / Month</Typography.Text>
            <Typography.Text className="sale">
              Get 1 month free trial
            </Typography.Text>
          </div>
        </div>
        <div className="item">
          <Checkbox onChange={onChange} />
          <div className="content">
            <Typography.Text className="price">
              $144.99 / 12 Month
            </Typography.Text>
            <Typography.Text className="sale">Save 20% extra!</Typography.Text>
          </div>
        </div>
      </div>
      <Link to="/payment/step-2">Continiue</Link>
    </div>
  );
}
