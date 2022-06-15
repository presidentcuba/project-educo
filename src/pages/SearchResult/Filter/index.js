import React, { useState } from "react";
import { Drawer, Checkbox, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./styles.scss";

const plainOptions = ["Free classes", "Premium classes"];
const dataLevel = ["Beginner", "Intermidiate", "Advacne"];
const dataDuration = ["0-1 Hour", "1-3 Hour", "3+ hour"];

const Filter = ({ onClose, visible }) => {
  const CheckboxGroup = Checkbox.Group;

  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onChangeLevel = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div className="filter-search">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <LeftOutlined onClick={onClose} />
        <div className="sort-by box">
          <Typography.Text className="title">Sort by</Typography.Text>
          <div className="list-checkbox">
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              All
            </Checkbox>

            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="level box">
          <Typography.Text className="title">Level</Typography.Text>
          <div className="list-checkbox">
            <Checkbox.Group options={dataLevel} onChange={onChangeLevel} />
          </div>
        </div>

        <div className="duration box">
          <Typography.Text className="title">Duration</Typography.Text>
          <div className="list-checkbox">
            <Checkbox.Group options={dataDuration} onChange={onChangeLevel} />
          </div>
        </div>
        <div className="button-filter">
          <Button className="btn btn-reset">Reset</Button>
          <Button className="btn btn-apply" type="primary" onClick={onClose}>
            Apply
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
export default Filter;
