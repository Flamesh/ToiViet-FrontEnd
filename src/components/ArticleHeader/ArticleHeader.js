import React from "react";
import PropTypes from "prop-types";
import "./ArticleHeader.scss"
function ArticleHeader(props) {
  return (
    <div className="text-inner">
      <p>{props.title}</p>
    </div>
  );
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ArticleHeader;
