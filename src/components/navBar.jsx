import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/navBarAction";
import "./css/navBar.css";

class NavBar extends Component {
  componentDidMount() {
    this.props.toggleNavBar(false);
  }
  handleToggle = () => {
    this.props.toggleNavBar(!this.props.navBarToggled);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white navBarFont border-bottom">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand">
            <h2>Movie</h2>
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNavBar"
          onClick={this.handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            this.props.navBarToggled
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="mainNavBar"
        >
          <ul className="navbar-nav container-fluid row">
            <li className="nav-item col-2 offset-2">
              {!this.props.currentUser.name && (
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              )}
              {this.props.currentUser.name && (
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              )}
            </li>

            <li className="nav-item col-2">
              {!this.props.currentUser.name && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {this.props.currentUser.name && (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              )}
            </li>
            <li className="nav-item col-3">
              {this.props.currentUser.name && (
                <Link className="nav-link" to="/addMovie">
                  Add Movie
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  navBarToggled: state.navBar.navBarToggled
});

export default connect(
  mapStateToProps,
  actions
)(NavBar);
