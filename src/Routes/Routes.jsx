import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../Components/Fireauth/Login"
import Reg from "../Components/Fireauth/Reg"
import Profile from "../Components/Profile/Profile"
import NavBar from "../Components/Navbar/NavBar"
import NavbarList from "../Components/Navbar/NavbarList"
import Cart from "../Components/Cart/Cart"
import Home from "../Pages/Home";
import Payment from "../Components/Payment/Payment"


function Routes()
{
 

    return( 
        <div>
           
            <NavBar/>
            <NavbarList/>

            <Switch>

                <Route path="/" exact>
                   <Home/>
                </Route>

               <Route path="/registration" exact> 
                   <Reg/>
               </Route>

               <Route path="/login" exact>
                   <Login/>
               </Route>

               <Route path="/profile" exact>
                   <Profile/>
               </Route>

               <Route path="/cart" exact>
                   <Cart/>
               </Route>

               <Route path="/payment" exact>
                   <Payment/>
               </Route>


            </Switch>


        </div>
    )
}

export default Routes;