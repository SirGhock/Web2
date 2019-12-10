import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Feed from "../pages/Feed";
import Signup from "../pages/Signup";
import Friends from "../pages/Friends";
import Auth from "../components/Auth";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/feed" component={Feed} />
          <Route path="/signup" component={Signup} />
          <Route path="/friends/:rota?/:id?" component={Auth(Friends)} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;