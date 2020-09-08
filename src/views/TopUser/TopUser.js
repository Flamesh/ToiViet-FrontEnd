import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Grid } from '@material-ui/core'

import avatar from '../../assets/img/logo.png'
import {userFetch} from 'variables/user';
import ArticleSide from '../../components/ArticleSide/ArticleSide'
import "./TopUser.scss"

const array = [1,2,3,4,5,6,7,8,9,10];

function TopUser(props) {
    return (
        <div className="root-top-user">
            <Grid container spacing={4}>
            <Grid item xs={1} sm={1} md={2} lg={2} xxl={2} />
            <Grid item xs={8} sm={8} md={6} lg={6} xl={6} xxl={6}>
                <List>
                {array.map((item, index) => (
                        <div key={index}> 
                               <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar src={avatar} alt={"avatar"} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={
                            <React.Fragment>
                                <a href="/nguoi-dung">{userFetch.userName} </a>
                            </React.Fragment>
                        }
                       
                        secondary={
                            <React.Fragment>
                                <div>
                                    {userFetch.about}
                                </div>
                                <div style={{color: 'black'}}>987 following</div>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />
                        </div>
                    
                ))}
             
            </List>
            </Grid>
            <Grid item xs={3} sm={3} md={4} lg={3} xl={3} xxl={3}>
                <ArticleSide />
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={1} xxl={1} />
            </Grid>
            
        </div>
    )
}

TopUser.propTypes = {

}

export default TopUser

