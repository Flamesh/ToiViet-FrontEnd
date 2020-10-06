import React from "react";
// react pl
// core components

import ArticleHeader from "components/ArticleHeader/ArticleHeader";
import Card1 from "components/Card/Card1";
import Card2 from "components/Card/Card2";
import { Grid } from "@material-ui/core";

import { title, content, image, summary, id, author } from "variables/artilce";
import "./Dashboard.scss";

const array = [
  {
    title: "Nổi bật",
    id: "1",
  },
  {
    title: "Thể thao",
    id: "2",
  },
  {
    title: "Tản văn",
    id: "3",
  },
  {
    title: "Quan điểm - Tranh luận",
    id: "4",
  },
];
export default function Dashboard() {
  return (
    <div className="root-dashboard">
      {array.map((item, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12}>
            <ArticleHeader title={item.title} id={item.id} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Card1
              title={title}
              content={content}
              imageUrl={image}
              summary={summary}
              id={id}
              author={author}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
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
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
