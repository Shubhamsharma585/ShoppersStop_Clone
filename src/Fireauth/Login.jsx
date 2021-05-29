import React from 'react'
import {firebase, auth, google} from "../Fireauth/firebase"

const FireLogin = () => {

    const handleLogin = () => {
        auth.signInWithPopup(google)
        .then(resp => console.log(resp))
        .catch((err) => console.log(err));
    }
 



    const LoginwithEmail = () => {
    
var email = "shubhamsharma585@gmail.com";
var password = "mypassword";

   auth.signInWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});
    }



    const stateobserver = () => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              // ...
              console.log(
                user.displayName,
                user.email,
                user.emailVerified,
                user.isAnonymous,
                user.uid,
                user.providerData[0].phoneNumber,
                user.providerData[0].providerId
            ) 
            } else {
              // User is signed out.
              // ...
              return console.log("user is sign out")
            }
          });
    }



     const LogOut = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
            console.log('User Logged Out!');
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
    }




    const SignedInUserDetails = () => {
        var user = auth.currentUser;
if (user) {
  // User is signed in.
  if (user != null) {
    //name = user.displayName;
    //email = user.email;
    console.log(
        user.displayName,
        user.email,
        user.photoURL,
        user.emailVerified,
        user.phoneNumber,
        user.uid
    )
  }
} else {
   console.log("No user signed in")
}
    }




    const verificationEmail = () => {

        var user = auth.currentUser;
        user.sendEmailVerification().then(function() {
          // Email sent.
        }).catch(function(error) {
          // An error happened.
        });
    }



    const LoginPhone = () => {

        let recaptcha = new firebase.auth.RecaptchaVerifier(`recaptcha`);
        let number = '+918619941188';
        

        ///
        var email = "shubhamsharma585@gmail.com";
        var password = "mypassword";

        auth.createUserWithEmailAndPassword(email, password)
   .catch(function(error) {
   console.log(error.code);
   console.log(error.message);
    });
  
  /////

         auth.signInWithPhoneNumber(number,recaptcha)
         .then((e) => {
            let code = prompt(`enter the otp`,``);

            if(code == null) return;
            e.confirm(code).then(function(result){
                console.log(result.user,'user');
                document.querySelector('label').textContent = result.user.phoneNumber + 
                'Number verified!'
            })
          .catch((err) => {
                console.log(err)
            })
        }) 
    }


    const LoginPhone2 = () => {

      function makeEmailCredential(email, password) {
        // [START auth_make_email_credential]
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        // [END auth_make_email_credential]

        

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            //onSignInSubmit();
          }
        });
      }
    }


    

    return (
        <div>
             <div id="recaptcha"></div> 
             
            <button onClick={handleLogin}>Login With Google</button>

            <button onClick={LoginwithEmail}>Login with email</button>
            <button onClick={stateobserver}>stateobserver</button>
            <button onClick={LogOut}>LogOut</button>
            <button onClick={SignedInUserDetails}>Signed-InUserDetails</button>
            <button onClick={verificationEmail}>verificationEmail</button>


            <button onClick={LoginPhone}>Login with Phone</button>
            <button onClick={LoginPhone2}>Login with Phone 2</button>


        </div>
    )
}

export default FireLogin;