import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { getCurrentUser } from "./services/authService";
import { saveCurrentUser } from "./actions/authActions";
import { store } from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as faThumbsUpRegular,
  faThumbsDown as faThumbsDownRegular
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faThumbsUpSolid,
  faThumbsUpRegular,
  faThumbsDownSolid,
  faThumbsDownRegular
);

class App extends Component {
  componentDidMount() {
    const user = getCurrentUser();
    if (user) store.dispatch(saveCurrentUser({ name: user.name }));
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/movie" component={Movie} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movie" exact />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
