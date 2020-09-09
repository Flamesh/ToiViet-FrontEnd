import React, { Suspense } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/all/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import { UPDATE_LOGIN } from "redux/reducer/const/auth";

let ps;
const override = css`
  display: block;
  margin: 30vh auto;
  border-color: #3D5BAF;
`;
const switchRoutes = (
  <Suspense
    fallback={
      <ClipLoader css={override} size={150} color={"#3D5BAF"} loading={true} />
    }
  >

    <Switch>
      {routes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/dashboard" />
    </Switch>


  </Suspense>
);

const useStyles = makeStyles(styles);

function Main(props, { ...rest }) {

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  // const [image, setImage] = React.useState(bgImage);
  // const [color, setColor] = React.useState("blue");
  const [hiddenAppbar, setHiddenAppbar] = React.useState(true)
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [mobileOpen, setMobileOpen] = React.useState(true);
  // const handleImageClick = (image) => {
  //   setImage(image);
  // };
  // const handleColorClick = (color) => {
  //   setColor(color);
  // };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  }
  React.useEffect(() => {
    // let data = {
    //   userID: "113672433",
    //   userName: "Flamesh"
    // }
    // props.dispatchLogin(data);
    window.addEventListener("resize", resizeFunction); 
  }, []);
  return (
    <ErrorBoundary>
      <div className={classes.wrapper}>
        <div className={classes.mainPanel} ref={mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            history={props.history}
            hiddent={hiddenAppbar}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer />
          {/* <FixedPlugin
            handleImageClick={handleImageClick}
            handleColorClick={handleColorClick}
            bgColor={color}
            bgImage={image}
            handleFixedClick={handleFixedClick}
            fixedClasses={fixedClasses}
          /> */}
        </div>
      </div>
    </ErrorBoundary>
  );
}
function mapStateToProps(state) {
  return {
    loginState: state.auth.loginState,
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: (data) => {
      dispatch({
        type: UPDATE_LOGIN,
        userID: data.userID,
        userName: data.userName,
        loginState: true,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
