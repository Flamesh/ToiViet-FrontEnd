import React from 'react'

import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
             <p> <FavoriteBorderIcon /> Bài nhiều vote </p> 
        </a>
      </div>
    )
}
