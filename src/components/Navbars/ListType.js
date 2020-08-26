import React from "react";
import PropTypes from "prop-types";

import "../../assets/scss/component/ListType.scss";
import { Tabs, Tab } from "@material-ui/core";
const list = [
  {
    name: "Cho bạn",
    href: "/aaa",
  },
  {
    name: "Tất cả",
    href: "/aaa",
  },
  {
    name: "Thành viên mới nổi bật",
    href: "/aaa",
  },
  {
    name: "Sách",
    href: "/aaa",
  },
  {
    name: "Kiến thức",
    href: "/aaa",
  },
  {
    name: "Kiến thức",
    href: "/aaa",
  },
  {
    name: "Kỹ năng sống",
    href: "/aaa",
  },
  {
    name: "Khác",
    href: "/aaa",
  },
];

export function ListType() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="wapper-list-type">
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        {list.map((item, index) => (
          <Tab key={index} label={item.name} />
        ))}
      </Tabs>
    </div>
  );
}

ListType.propTypes = {
  list: PropTypes.array.isRequired,
};
