import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Fireauth/Login";
import Reg from "../Components/Fireauth/Reg";
import Profile from "../Components/Profile/Profile";
import NavbarList from "../Components/Navbar/NavbarList";
import Cart from "../Components/Cart/Cart";
import Home from "../Pages/Home";
import OneProduct from "../Components/OneProduct/OneProduct";
import Payment from "../Components/Payment/Payment";
import Product from "../Components/ProductPage/Product";
import CombinedNavBar from "../Components/CombinedNavBar/CombinedNavBar"

function Routes() {
  return (
    <div>
  
      <CombinedNavBar/>
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

        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/:id" exact>
          <OneProduct />
        </Route>
        <Route path="/payment" exact>
          <Payment />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
