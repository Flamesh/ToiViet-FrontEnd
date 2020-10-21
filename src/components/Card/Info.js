import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

const date = "10/10/2020";

function Info(props) {
  const { author, rating, typeArticle, time } = props;
  console.log(typeArticle);
  return (
    <div className="info">
      <ListItem>
        <ListItemAvatar>
          <Avatar src={author.avatarUrl} alt="avatar" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <a href={`/tac-gia/${author.id}`}>{author.name} </a> trong{" "}
              <a href={"ok"}>{typeArticle.name} </a>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <div style={{ display: "inline-flex" }}>{date}</div>
            </React.Fragment>
          }
          // secondary={summary}
        />
      </ListItem>
    </div>
  );
}

Info.propTypes = {
  author: PropTypes.object,
  rating: PropTypes.number,
  typeArticle: PropTypes.object.isRequired,
  time: PropTypes.string,
};

export default Info;
