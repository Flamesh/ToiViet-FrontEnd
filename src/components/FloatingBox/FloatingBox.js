import React from "react";
import PropTypes from "prop-types";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddCommentIcon from "@material-ui/icons/AddComment";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton, Tooltip } from "@material-ui/core";
import "./FloatingBox.scss";
function FloatingBox(props) {
  return (
    <div className="root-floating-box">
      <div className="vote">
        <Tooltip title="vote up" placement="right">
          <IconButton>
            <ArrowDropUpIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <div style={{ fontWeight: "bold" }}>50</div>
        <Tooltip title="vote down" placement="right">
          <IconButton>
            <ArrowDropDownIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="action">
        <Tooltip title="Lưu bài viết" placement="right">
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Tooltip>

        <div style={{ marginLeft: 3, fontWeight: "bold" }}>90</div>
        <Tooltip title="Comment" placement="right">
          <IconButton>
            <AddCommentIcon />
          </IconButton>
        </Tooltip>
        <div />
        <Tooltip title="Share facebook" placement="right">
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

FloatingBox.propTypes = {};

export default FloatingBox;
