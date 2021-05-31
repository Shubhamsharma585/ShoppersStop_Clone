import React from "react"
import { Link } from "react-router-dom"
import {firebase, auth } from "./Fireauth/firebase"
import { useSelector, useDispatch } from "react-redux"
import { loggingout } from "../Redux/Registration/action"



function Testing()
{
      
      const Dispatch = useDispatch();
     
      var isloggedIn = useSelector(state => state.regi.isloggedIn)
      
      




      const LogOut = () => {
        auth.signOut().then(function() {
            Dispatch(loggingout())
            console.log('User Logged Out!');
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
    }




    return (
        <div style={{justifyContent:"center", marginLeft:"300px"}}>
            <h3>Welcome To HomePage</h3>
 
            {
            (isloggedIn)? (
              <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={LogOut}>LogOut</button>
              </div>  
            ):(
              <div>
              <Link to={"/login"}>SignIn</Link><br></br>
              <Link to={"/registration"}>SignUp</Link>
             </div>
            )

            }



        </div>
    )
}

export default Testing;