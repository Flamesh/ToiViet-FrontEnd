import { Fab, Grid, Typography } from '@material-ui/core'
import React from 'react'
import cover from "../../assets/img/cover.jpeg"

import './TypeArticle.scss'

const nameType = "Quan điểm - tranh luận"
export default function TypeArticle() {
  return (
    <div className="root-type-article">
      <div className="header">
        <img src={cover} alt="cover" className="cover" />
       
        <div className="text-box">
        <div className='name-type'>
          {nameType}
        </div>
          <Fab  variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        className="fab"
        >
          Theo dõi
        </Fab>
        </div>
      </div>
      <div>
        <Grid container alignContent='center' alignItems="center" justify="center">
        <Grid item xs={0} sm={0} md={2} lg={2} xxl={2} >
          a
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xxl={7}>
          b
        </Grid>   
        <Grid item xs={0} sm={0} md={3} lg={3} xxl={3}>
          
          c</Grid> 
           </Grid>
      </div>
    </div>
  )
}
