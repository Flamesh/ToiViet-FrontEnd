import React from "react";
import PropTypes from "prop-types";
import "./ArticleHeader.scss";
function ArticleHeader(props) {
  return (
    <div className="text-inner">
      <p>{props.title}</p>
      <a className="link" href={`./the-loai/${props.id}`}>
        Xem thêm
      </a>
    </div>
  );
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArticleHeader;
