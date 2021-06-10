import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Fireauth/Login";
import Reg from "../Components/Fireauth/Reg";
import Profile from "../Components/Profile/Profile";
import NavBar from "../Components/Navbar/NavBar";
import NavbarList from "../Components/Navbar/NavbarList";
import Testing from "../Components/Testing";
import Home from "../Pages/Home";
import OneProduct from "../Components/OneProduct/OneProduct";

function Routes() {
  return (
    <div>
      <NavBar />
      <NavbarList />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/registration" exact>
          <Reg />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/profile" exact>
          <Profile />
        </Route>

        <Route path="/product/:id" exact>
          <OneProduct />
        </Route>

        <Route path="/testing" exact>
          <Testing />
        </Route>

        <Route>
          <h2>Page not found!</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
