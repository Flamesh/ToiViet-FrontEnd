import React, {useState, useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/all/components/headerStyle.js";

import Search from "@material-ui/icons/Search";
import logo from "../../assets/img/logo.png";

import "../../assets/scss/component/Navbar.scss";
import { ListType } from "./ListType.js";
import { Collapse } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  const [hidden, setHidden] = useState(false)

  // const onScroll = (e) => {
  //   setScrollTop(e.target.documentElement.scrollTop);
  //   setScrolling(e.target.documentElement.scrollTop > scrollTop);
  // }

  const onScrollTop = () => {
    if(window.pageYOffset < 100 && hidden) {
      setHidden(false)
    }
    else if(window.pageYOffset >= 100 && !hidden ) {
      setHidden(true)
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScrollTop, true);
    return (window.removeEventListener("scroll", onScrollTop))
  }, [hidden])
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Collapse in={!hidden}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <a href="/dashboard">
            <img src={logo} className="logo" />
          </a>

          <Button
            className="btn-search"
            color="white"
            aria-label="edit"
            justIcon
            round
          >
            <Search />
          </Button>
          <div className={"searchWrapper"}>
            <Input
              inputProps={{
                placeholder: "Tìm kiếm theo tiêu đề, tác giả hoặc tag",
              }}
            />
          </div>
        </div>
        <Hidden smDown implementation="css">
            <AdminNavbarLinks history={props.history} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <hr />
      </Collapse>
      <Toolbar style={{marginTop: -10}}>
        <ListType />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.any,
 
};
