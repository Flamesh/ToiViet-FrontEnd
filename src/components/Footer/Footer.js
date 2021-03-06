/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/all/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#policy" className={classes.block}>
                Điều khoản sử dụng
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/T%C3%B4i-vi%E1%BA%BFt-578273272840140" className={classes.block}>
                Fanpage
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://github.com/Flamesh"
              target="_blank"
              className={classes.a}
            >
              Flamesh
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
