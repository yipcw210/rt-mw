import React from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";
import * as actions from "../actions/authActions";
import { login } from "../services/authService";
import Form from "./Form";

class Login extends Form {
  componentDidMount() {}
  schema = {
    loginUsername: Joi.string()
      .min(5)
      .required(),
    loginPassword: Joi.string()
      .min(5)
      .required()
  };

  componentWillReceiveProps({ loginInfo: info, loginError: infoError }) {
    this.updateError(info, infoError);
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.validateForm(this.props.loginInfo);
    if (!this.hasError(this.props.loginError)) {
      const { data: jwt } = await login(this.props.loginInfo);
      localStorage.setItem("token", jwt);
      window.location.href = "/";

      // alert("registering...");
      // const { headers } = await registerUser(this.props.registerInfo);
      // alert("register done");
      // const jwt = headers["x-auth-token"];
      // localStorage.setItem("token", jwt);
      // // this.props.history.push("/");
      // window.location.href = "/";
    }
  };

  render() {
    const { loginError } = this.props;
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
                  id="loginUsername"
                  placeholder="Enter your username"
                  onChange={this.handleValueChange}
                />
                {loginError.loginUsernameError && (
                  <div className="alert alert-danger">
                    {loginError.loginUsernameError}
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
                  id="loginPassword"
                  placeholder="Enter your password"
                  onChange={this.handleValueChange}
                />
                {loginError.loginPasswordError && (
                  <div className="alert alert-danger">
                    {loginError.loginPasswordError}
                  </div>
                )}
              </div>
            </div>
            <button
              className="btn btn-success mt-4"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginInfo: {
      loginUsername: state.auth.loginUsername,
      loginPassword: state.auth.loginPassword
    },
    loginError: {
      loginUsernameError: state.auth.loginUsernameError,
      loginPasswordError: state.auth.loginPasswordError
    }
  };
};

export default connect(
  mapStateToProps,
  actions
)(Login);
