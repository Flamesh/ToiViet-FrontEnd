import React, { Component } from "react";
import { connect } from "react-redux";
import cover from "assets/img/cover.jpeg";

export const TypeArticle = () => {
  return (
    <div>
      <div className="header">
        <img src={cover} alt="cover" />
        <div>Khoa học công nghệ</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TypeArticle);
