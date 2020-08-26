import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButtons/Button";
import logo from "../../assets/img/logo.png";

import "./auth.scss";

function login() {
  return (
    <div className="root-login">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} sm={10} md={4} lg={4} xl={4} xxl={4}>
          <Card className="card">
            <CardContent>
              <img src={logo} className="logo" />
              <br/>
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h5"
                gutterBottom
              >
                ĐĂNG NHẬP TÀI KHOẢN
              </Typography>
              <CustomInput
                labelText="Tên đăng nhập"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Mật khẩu"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomButton color="primary" fullWidth>
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
login.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(login);
