import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

function Info(props) {
  const { author, rating } = props;
  return (
    <div className="info-footer">
      <img src={author.avatarUrl} /> {" "}
      <a href={`./tac-gia/${author.id}`}>{author.name}</a>
      
    </div>
  );
}

Info.propTypes = {
  author: PropTypes.object,
  rating: PropTypes.number,
};

export default Info;
