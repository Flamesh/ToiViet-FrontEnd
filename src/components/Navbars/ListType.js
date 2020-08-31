import React from "react";
import PropTypes from "prop-types";

import "../../assets/scss/component/ListType.scss";
import { Tabs, Tab } from "@material-ui/core";
import { listType } from "../../variables/list";


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
        {listType.map((item, index) => (
          <Tab key={index} label={item.name} />
        ))}
      </Tabs>
    </div>
  );
}

ListType.propTypes = {
  list: PropTypes.array,
};
