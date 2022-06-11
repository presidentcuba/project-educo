import "./styles.scss";
import { useState } from "react";
import { Button, Form, Typography, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import facebook from "src/assets/facebook.svg";
import google from "src/assets/gg.svg";
import avatar from "src/assets/avatar.svg";

const LoginPageDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="login-detail-container">
      <Typography.Text className="slogan">
        Welcome back! Sign in to continue!
      </Typography.Text>

      <div onClick={handleShowModal} className="btn-google" type="primary">
        <div className="btn-box">
          <img className="image" src={google} alt="Login with google" />
          <Typography.Text className="title">
            Log in with Google
          </Typography.Text>
        </div>
      </div>

      <div onClick={handleShowModal} className="btn-facebook">
        <div className="btn-box">
          <img className="image" src={facebook} alt="Login with facebook" />
          <Typography.Text className="title">
            Log in with Facebook
          </Typography.Text>
        </div>
      </div>

      <Typography.Text className="or">or</Typography.Text>

      <Form>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "username is not vallid!" }]}
        >
          <Input placeholder="User name" type="text" />
        </Form.Item>
        <Form.Item
          nam="password"
          rules={[{ required: true, message: "password is not vallid!" }]}
        >
          <Input placeholder="Password" type="password" />
        </Form.Item>
      </Form>

      <Button className="btn btn-login" type="primary">
        <Link to="/login">Log in</Link>
      </Button>

      <Button className="btn btn-forgot">
        <Link to="/forgot-password">Forgot Password</Link>
      </Button>

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        closable={false}
      >
        <div className="modal-header">
          <Typography.Text className="modal-title">
            Choose an account
          </Typography.Text>
          <Typography.Text className="modal-description">
            To continue to TikTak
          </Typography.Text>
        </div>
        <div className="modal-body">
          <div className="modal-account">
            <img src={avatar} alt="avatar" />
            <div className="info">
              <Typography.Text className="info-title">
                Account Name
              </Typography.Text>
              <Typography.Text className="info-email">
                email@gmail.com
              </Typography.Text>
            </div>
          </div>
          <div className="modal-account">
            <img src={avatar} alt="avatar" />
            <div className="info">
              <Typography.Text className="info-title">
                Use another account
              </Typography.Text>
            </div>
          </div>
        </div>
        <div className="modal-bot">
          To continue, Google will share your name, email address,and profile
          picture with TikTak.
        </div>
      </Modal>
    </div>
  );
};
export default LoginPageDetail;
