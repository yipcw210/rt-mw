import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light ">
        <Link to="/" className="navbar-brand">
          Movie
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNavBar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <div className="container">
            <ul className="navbar-nav justify-content-center">
              {!this.props.currentUser.name && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              )}
              {this.props.currentUser.name && (
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              )}
              <li className="nav-item">
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);
