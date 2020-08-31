import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Info from "./Info";
function Card2(props) {
  const { title, summary, imageUrl, id, author } = props;
  return (
    <div className="card2">
      <img className="img-card" src={imageUrl} alt="article" />
      <div className="info">
        <a href={`./bai-viet/${id}`} className="title-article">
          {title}
        </a>
      </div>
      <Info author={author} rating={5} />
    </div>
  );
}

Card2.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
};
export default Card2;
