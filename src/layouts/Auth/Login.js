import React, { Component } from "react";
import PropTypes from "prop-types";
import { withSnackbar } from 'notistack';
import { connect } from "react-redux";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButtons/Button";
import logo from "../../assets/img/logo.png";

import { base_login } from "../../enviroment/auth";
import "./Auth.scss";
import { _post } from "services/baseAPI";
import { UPDATE_LOGIN } from "redux/reducer/const/auth";

function login(props) {
  console.log("login")
  const submit = () => {
    let password = document.getElementById("login-password").value;
    let email = document.getElementById("login-username").value;
    const user = {
      user: {
        email: email,
        password: password,
      },
    };
    let data = {
      userID: "113672433",
      userName: "Flamesh"
    }
    props.dispatchLogin(data);
    props.history.push("./")
    // window.location.assign("/dashboard")
    // _post(user, base_login, null)
    //   .then((res) => {
    //     console.log(res);
    //     props.enqueueSnackbar( "Đăng nhập thành công", { variant: 'success' });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     props.enqueueSnackbar( "error", { variant: 'error' });
    //   });


    // const header = {
    //   clinet: process.env.CLIENT_ID,
    //   secret: process.env.SECRET,
    // };
  };
  return (
    <div className="root-login">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} sm={10} md={4} lg={4} xl={4} xxl={4}>
          <Card className="card">
            <CardContent>
              <img src={logo} className="logo" />
              <br />
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h5"
                gutterBottom
              >
                ĐĂNG NHẬP TÀI KHOẢN
              </Typography>
              <CustomInput
                labelText="Tên đăng nhập"
                id="login-username"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Mật khẩu"
                id="login-password"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomButton
                color="primary"
                fullWidth
                onClick={() => {
                  submit();
                }}
              >
                Đăng nhập
              </CustomButton>
              <div className="spacing" />
              <CustomButton color="primary" fullWidth>
                Đăng nhập bằng facebook
              </CustomButton>
              <div style={{ textAlign: "left" }}>
                <a href="/quen-mat-khau">Quên mật khẩu ?</a>
                <div className="spacing" />
                <div>
                  Không có tài khoản? <a href="/register">Đăng ký ngay</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
login.propTypes = {
  enqueueSnackbar: PropTypes.any,
  dispatchLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loginState: state,
});

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

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(login));
