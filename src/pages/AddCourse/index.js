import "./styles.scss";

import { Button, Form, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const AddCourse = () => {
  const { TextArea } = Input;
  return (
    <div className="add-course">
      <div className="icon-back">
        <Link to="/register">
          <LeftOutlined />
        </Link>
      </div>

      <Typography.Text className="title">Add your project</Typography.Text>
      <Form>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Project is not vallid!" }]}
        >
          <Input placeholder="Project name" type="text" />
        </Form.Item>

        <Form.Item
          nam="description"
          rules={[{ required: true, message: "description is not vallid!" }]}
        >
          <TextArea rows={4} placeholder="Description" maxLength={10} />
        </Form.Item>
      </Form>

      <Button className="btn-add">
        <Link to="/course/project/add/detail">add from gallery</Link>
      </Button>
    </div>
  );
};
export default AddCourse;
