import React from "react";
import {auth, google} from "../Fireauth/firebase"


function Reg()
{

    function handlesignup()
    {
     auth.signInWithPopup(google)
     .then(resp => { return console.log(resp.user.displayName),
        console.log(resp.user.email),
        console.log(resp.user.emailVerified)
        })
     .catch((err) => console.log(err)); 
    }
  

    function signupwithEmail()
    {

        var email = "shubhamsharma585@gmail.com";
         var password = "mypassword";

    auth.createUserWithEmailAndPassword(email, password)
   .catch(function(error) {
   console.log(error.code);
   console.log(error.message);
    });

    }
 

    
    return(
        <div>
            <h4>HI regi..</h4>
            <div onClick={() => handlesignup()}><p>Google</p></div>

            <button onClick={() => signupwithEmail()}>
                signUp with email
            </button>

        </div>
    )
}

export default Reg;