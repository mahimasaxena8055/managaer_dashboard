import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";
import signup from "../Layout/signup/signup";
import Login from "../Layout/login/login";

const Routes = () => {
  return (
    <Fragment>
  
        <NavBar/>
        <Switch>
        {/* <Route path="/" component={ login } exact />   */}
          <Route path="/" component={ Home } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={ Edit } exact />
          <Route path="/signup" component={ signup } exact /> 
          <Route path="/login" component={ Login } exact />

        </Switch>
      </Fragment>
  );
};

export default Routes;
