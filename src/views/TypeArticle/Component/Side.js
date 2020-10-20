import React from 'react'

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddCommentIcon from "@material-ui/icons/AddComment";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton, Tooltip, Typography } from "@material-ui/core";

import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./Side.scss"

export default function Side() {
    return (
        <div className="root-floating-box">
        <a className="a-tag" href="/the-loai/hot">
             <p> <WhatshotIcon /> Đang hot  </p> 
        </a>
        <a className="a-tag" href="/the-loai/moi">
            <p> <StarBorderIcon /> Bài viết mới </p> 
         </a>
        <a className="a-tag" href="/the-loai/nhieu-vote">
             <p> <ThumbUpIcon /> Bài nhiều vote </p> 
        </a>
      </div>
    )
}
