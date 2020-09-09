import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Avatar, ListItemAvatar, ListItemText, Divider } from '@material-ui/core'
import {title, summary, author, viewsNumber, id, createDate} from '../../variables/artilce';
import {GetDate} from '../../services/getDate'
import "./ArticleSide.scss"

const array = [1,2,3,4,5];
const tags = [
    {id: 1, name: "Truyền cảm hứng"},
    {id: 2,name: "Quan điểm"},
    {id: 3,name: "Thể thao"},
    {id: 4,name: "Tản văn"},
    {id: 5,name: "Thơ"}
]

// const array = [
//     {monthA: [1,2,3,4,5]},
//     {suitableA: [1,2,3,4]},    
// ]
function ArticleSide(props) {
    return (
        <div className="root-article-side">
            <div className="mouth">
             <div className="title">
                Bài viết của tháng
                <Divider />
            </div>
            <div className="content">
                <List>
                    {array.map((item, index) => (
                        <ListItem key={index} autoFocus>
                            <ListItemAvatar>
                                <Avatar src={author.avatarUrl} alt="avatar" />
                            </ListItemAvatar>
                            <ListItemText 
                        primary={
                            <React.Fragment>
                                <a href={`/bai-viet/${id}`} >{title} </a>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <div style={{display: 'inline-flex'}}> 
                                    <a href={`/nguoi-dung/${author.id}`}>{author.name}</a>
                                    <div style={{marginLeft: 5}}>{GetDate(createDate)}</div>
                                </div>
                            </React.Fragment>
                        }
                        // secondary={summary}
                    />
                        </ListItem>
                    ))}
                </List>
            </div>
            </div>
            <div className="title">
                Tags nổi bật
                <Divider />
                <div className="tags">
                    {tags.map((item, index) => (
                            <a key={index} className="tag" href={`/the-loai/${item.id}`}>{item.name}</a>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

ArticleSide.propTypes = {

}

export default ArticleSide

