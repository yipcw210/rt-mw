import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/registerActions";
import Joi from "joi-browser";
import { registerUser } from "../services/registerService";

class Register extends Component {
  async componentDidMount() {}
  schema = {
    registerUsername: Joi.string()
      .min(5)
      .required(),
    registerPassword: Joi.string()
      .min(5)
      .required()
  };

  componentWillReceiveProps({ registerInfo, registerError }) {
    const usernameError = this.validateProperty(
      "registerUsername",
      registerInfo.registerUsername
    );
    if (
      registerInfo.registerUsername &&
      registerError.registerUsernameError !== usernameError
    ) {
      this.props.updateRegisterUsernameError(usernameError);
    }

    const passwordError = this.validateProperty(
      "registerPassword",
      registerInfo.registerPassword
    );
    if (
      registerInfo.registerPassword &&
      registerError.registerPasswordError !== passwordError
    ) {
      this.props.updateRegisterPasswordError(passwordError);
    }
  }

  validateForm = () => {
    const { registerInfo } = this.props;
    const usernameError = this.validateProperty(
      "registerUsername",
      registerInfo.registerUsername
    );
    {
      this.props.updateRegisterUsernameError(usernameError);
    }

    const passwordError = this.validateProperty(
      "registerPassword",
      registerInfo.registerPassword
    );
    {
      this.props.updateRegisterPasswordError(passwordError);
    }
  };

  hasError = () => {
    for (let key in this.props.registerError) {
      if (this.props.registerError[key]) return true;
    }
    return false;
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : "";
  };

  handleAccountChange = event => {
    switch (event.target.id) {
      case "username": {
        this.props.updateRegisterUsername(event.target.value);
        console.log(this.props.registerInfo);
        break;
      }
      case "password": {
        this.props.updateRegisterPassword(event.target.value);
        break;
      }
      default:
        break;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.validateForm();
    if (!this.hasError()) {
      const { headers } = await registerUser(this.props.registerInfo);
      const jwt = headers["x-auth-token"];
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
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
                  id="username"
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
                  id="password"
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
