import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { colorPrimary, colorSecondary, colorPrimaryLight } from "./const/color";
// core components
import Main from "layouts/Main.js";
import store from "./redux/store";
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
      light: colorPrimaryLight,
    },
    secondary: {
      main: colorSecondary,
    },
  },
  typography: {
    // Use the system font.
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont," +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Main} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
