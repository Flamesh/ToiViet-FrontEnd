import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components

import ArticleHeader from "components/ArticleHeader/ArticleHeader";
import Card1 from "components/Card/Card1";
import Card2 from "components/Card/Card2";
import { Grid } from "@material-ui/core";

import {
  title,
  content,
  image,
  summary,
  id,
  author,
  viewNumber,
  createDate,
  rating,
} from "variables/artilce";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

export default function Dashboard() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} spacing={4}>
          <ArticleHeader title="Nổi bật" />
        </Grid>
        <Grid item xs={12} xl={12} md={6} lg={6}>
          <Card1
            title={title}
            content={content}
            imageUrl={image}
            summary={summary}
            id={id}
            author={author}
          />
        </Grid>
        <Grid item xs={12} xl={12} md={6} lg={6}>
          <Grid container>
            <Grid item xs={6} xl={6} md={6} lg={6}>
              <Card2
                title={title}
                content={content}
                imageUrl={image}
                summary={summary}
                id={id}
                author={author}
              />
            </Grid>
            <Grid item xs={6} xl={6} md={6} lg={6}>
              <Card2
                title={title}
                content={content}
                imageUrl={image}
                summary={summary}
                id={id}
                author={author}
              />
            </Grid>
            <Grid item xs={6} xl={6} md={6} lg={6}>
              <Card2
                title={title}
                content={content}
                imageUrl={image}
                summary={summary}
                id={id}
                author={author}
              />
            </Grid>
            <Grid item xs={6} xl={6} md={6} lg={6}>
              <Card2
                title={title}
                content={content}
                imageUrl={image}
                summary={summary}
                id={id}
                author={author}
              />
            </Grid>
          </Grid>

          {/* <Grid item xs={6} xl={6} md={6} lg={6}>
            <Card2
              title={title}
              content={content}
              imageUrl={image}
              summary={summary}
              id={id}
              author={author}
            />
          </Grid>
          <Grid item xs={6} xl={6} md={6} lg={6}>
            <Card2
              title={title}
              content={content}
              imageUrl={image}
              summary={summary}
              id={id}
              author={author}
            />
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
