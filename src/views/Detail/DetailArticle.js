import React from "react";
import PropTypes from "prop-types";
import { Grid, Avatar } from "@material-ui/core";
import {
  title,
  content,
  image,
  summary,
  id,
  author,
  viewsNumber,
  createDate,
  rating,
  type,
} from "../../variables/artilce";
import { GetDate } from "../../services/getDate";

import FloatingBox from "components/FloatingBox/FloatingBox";
import "./DetailArticle.scss";
function DetailArticle(props) {
  return (
    <div className="root-article">
      <Grid container>
        <Grid item xs={1} md={2} xl={2}>
          <div>
            <FloatingBox />
          </div>
        </Grid>
        <Grid item xs={10} md={8} xl={8}>
          <div className="header-article">
            <Avatar src={author.avatarUrl} className="avatar" />
            <a href={`./tac-gia/${author.id}`}>{author.name}</a>
            <div>{GetDate(createDate)}</div>
            <a>{type.name} </a>
          </div>
          <div className="content">
            <h3 className="title">{title}</h3>
            <div>
              <span
                className="content-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

DetailArticle.propTypes = {};

export default DetailArticle;
