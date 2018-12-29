import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/authActions";

class Logout extends Component {
  render() {
    try {
      localStorage.removeItem("token");
    } catch (ex) {}
    this.props.logoutCurrentUser();
    window.location.href = "/";
    return;
  }
}

export default connect(
  null,
  actions
)(Logout);
