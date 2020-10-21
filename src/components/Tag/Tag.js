import React from "react";
import PropTypes from "prop-types";
import "./Tag.scss";
export default function Tag(props) {
  const { content, href } = props;
  return (
    <div className="tag">
      <a href={href}>{content}</a>
    </div>
  );
}

Tag.propTypes = {
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
