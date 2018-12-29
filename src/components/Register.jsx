import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/registerActions";
import Joi from "joi-browser";
import { registerUser } from "../services/registerService";
import Form from "./Form";

class Register extends Form {
  async componentDidMount() {}
  schema = {
    registerUsername: Joi.string()
      .min(5)
      .required(),
    registerPassword: Joi.string()
      .min(5)
      .required()
  };

  componentWillReceiveProps({ registerInfo: info, registerError: infoError }) {
    this.updateError(info, infoError);
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.validateForm(this.props.registerInfo);
    if (!this.hasError(this.props.registerError)) {
      alert("registering...");
      const { headers } = await registerUser(this.props.registerInfo);
      alert("register done");
      const jwt = headers["x-auth-token"];
      localStorage.setItem("token", jwt);
      // this.props.history.push("/");
      window.location.href = "/";
    }
  };

  render() {
    const { registerError } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="container mt-5">
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerUsername"
                  placeholder="Enter your username"
                  onChange={this.handleAccountChange}
                />
                {registerError.registerUsernameError && (
                  <div className="alert alert-danger">
                    {registerError.registerUsernameError}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-grup col-6">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="registerPassword"
                  placeholder="Enter your password"
                  onChange={this.handleAccountChange}
                />
                {registerError.registerPasswordError && (
                  <div className="alert alert-danger">
                    {registerError.registerPasswordError}
                  </div>
                )}
              </div>
            </div>
            <button
              className="btn btn-success mt-4"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerInfo: {
      registerUsername: state.register.registerUsername,
      registerPassword: state.register.registerPassword
    },
    registerError: {
      registerUsernameError: state.register.registerUsernameError,
      registerPasswordError: state.register.registerPasswordError
    }
  };
};

export default connect(
  mapStateToProps,
  actions
)(Register);
