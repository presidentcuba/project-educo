import "./styles.scss";

import { Button, Form, Typography, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const StepTwo = () => {
  return (
    <div className="payment-step-two">
      <div className="icon-back">
        <Link to="/payment">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">
        Add your payment method
      </Typography.Text>
      <Form>
        <Typography.Text className="label">Card Name</Typography.Text>
        <Form.Item
          name="cardname"
          rules={[{ required: true, message: "cardname is not vallid!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Typography.Text className="label">Card Number</Typography.Text>
        <Form.Item
          nam="cardnumber"
          rules={[{ required: true, message: "cardnumber is not vallid!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Typography.Text className="label">Exp Date</Typography.Text>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "password is not vallid!" }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Typography.Text className="label">CVV2</Typography.Text>
            <Form.Item
              nam="re-password"
              rules={[
                { required: true, message: "confirm password is not vallid!" },
              ]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Button className="btn btn-continue">
        <Link to="/register">Continiue</Link>
      </Button>
    </div>
  );
};
export default StepTwo;
