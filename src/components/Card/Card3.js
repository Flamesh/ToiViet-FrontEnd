import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Info from "./Info";
import Tag from "components/Tag/Tag";
const typeArticle = {
  id: "tranh-luan",
  name: "Tranh luận",
};
function Card3(props) {
  const { title, imageUrl, id, author, summary } = props;
  return (
    <div className="card">
      <Info author={author} rating={5} typeArticle={typeArticle} />
      <img className="img-card" src={imageUrl} alt="article" />
      <div>
        <a href={`./bai-viet/${id}`} className="title-article">
          {title}
        </a>
        <div className="summary">{summary}</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Tag href="/ahihi" content={"Đây là tag"} />
          <Tag href="/ahihi" content={"Đây là tag"} />
          <Tag href="/ahihi" content={"Đây là tag"} />
          <Tag href="/ahihi" content={"Đây là tag"} />
        </div>
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
