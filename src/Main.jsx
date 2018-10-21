import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import Trainee from "./Trainee";
import Trainer from "./Trainer";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Trainee" component={Trainee} />
            <Route path="/Trainer" component={Trainer} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
