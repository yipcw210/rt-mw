import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { getCurrentUser } from "./services/authService";
import { saveCurrentUser } from "./actions/authActions";
import { store } from "./store";

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
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
