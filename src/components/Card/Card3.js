import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Info from "./Info";
const typeArticle = {
    id: "tranh-luan",
    name: "Tranh luận"
}
function Card3(props) {
  const { title, summary, imageUrl, id, author } = props;
  return (
    <div className="card3">
         <Info author={author} rating={5} typeArticle={typeArticle} />
            <img className="img-card" src={imageUrl} alt="article" />
            <div className="info">
            <a href={`./bai-viet/${id}`} className="title-article">
          {title}
        </a>
      </div>
     
    </div>
  );
}

Card3.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
};
export default Card3;
