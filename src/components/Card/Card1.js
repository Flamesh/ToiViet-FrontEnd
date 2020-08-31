import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Info from "./Info";
function Card1(props) {
  const { title, summary, imageUrl, id, author } = props;
  return (
    <div className="card1">
      <Grid container>
        <Grid item xs={12}>
          <img className="img-card" src={imageUrl} alt="article" />
        </Grid>
        <Grid item xs={12}>
          <div className="info">
            <a href={`./bai-viet/${id}`} className="title-article">
              {title}
            </a>
            <div className="summary">{summary}</div>
          </div>
          <Info author={author} rating={5} />
        </Grid>
      </Grid>
    </div>
  );
}

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
};

export default Card1;
