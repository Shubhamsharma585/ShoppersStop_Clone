import React, { useState } from 'react'
import {firebase, auth, google} from "../Fireauth/firebase"
import styles from "./Log.module.css"
import { Button, TextField } from "@material-ui/core"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { SignInlogin } from "../../Redux/Registration/action"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(1)
    },
  },
}));

 
const FireLogin = ({handleCloselogin, handleOpenregi}) => {


  const dispatch = useDispatch();
  const classes = useStyles();
  const isloggedIn = useSelector(state => state.regi.isloggedIn)
  const isloading = useSelector(state => state.regi.isloading)
  

  const [email, setEmail] = useState("") 
  const [pass, setPass] = useState("")
  const [wrongpass, setWrongpass] = useState(false)


    const handleLogin = () => {
        auth.signInWithPopup(google)
        .then(resp => console.log(resp))
        .catch((err) => console.log(err));
    }

 
 


    const LoginwithEmail = () => {
    
   auth.signInWithEmailAndPassword(email, pass)
   .then((res) => {
      //console.log(res.user.phoneNumber)
      //console.log(res.user.emailVerified)
      //console.log("logged In")
      dispatch(SignInlogin(res))
      handleCloselogin()
   })
   .catch(function(error) {
   console.log(error.code); 
   console.log(error.message);
   setWrongpass(true)
});
    }


    const PassReset = () => {

      auth.sendPasswordResetEmail(email).then(function() {
          console.log("email sent")
      }).catch(function(error) {
          console.log(error)
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
                user,
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




   const openSignup = () => {
         handleCloselogin(); 
         handleOpenregi();
   }


    return isloggedIn?( 
      <div>
        {handleCloselogin}
      </div>
    ):(
          <div className={styles.left}>
                <h4 style={{marginLeft:"150px"}}>SIGN IN <span style={{marginLeft:"150px", fontSize:"25px", color:"gray", cursor:"pointer"}}>x</span></h4>  
                <p className={styles.create}>Have an account? Sign In</p>

                <div className={styles.inp}>
                   
                    <div>
                    <MailOutlineOutlinedIcon className={styles.logo}/>
                    <TextField
                    style ={{width: '80%'}}  
                    inputProps={{ autoFocus: false }}
                    label="Email or Mobile Number"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                  
                   <div>
                   <LockOutlinedIcon className={styles.logo}/>    
                   <TextField 
                    style ={{width: '80%'}} 
                    inputProps={{ autoFocus: false }}
                    label="Password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />
                   </div>
                  
        
                

                </div>

                {wrongpass && <p className={styles.wrongpass}>Invalid Email or Password!</p>}
               

          <Button 
          className={styles.btn} 
          onClick={LoginwithEmail} 
          variant="contained" 
          color="secondary">
            SIGN IN 
            {isloading && <div className={classes.root} style={{marginLeft:"10px"}}>
                <CircularProgress  size="20px" thickness={7} color="inherit" />
            </div>}
          </Button>
               
                <p className={styles.forgot} onClick={PassReset}>Forgot password?</p>

               <div className={styles.line}>
                  <div className={styles.line1}></div>
                  <div className={styles.box}>Or via Social Account</div>
                  <div className={styles.line1}></div>
               </div>

                <div className={styles.social}>
                   <div className={styles.social_cont}><div className={styles.fb}></div></div> 
                   <div className={styles.social_cont} onClick={handleLogin}><div className={styles.google}></div></div>
                </div>

                <p><span className={styles.havean1}>Create a new account?</span> <span className={styles.havean2} onClick={() => openSignup()}>Sign Up</span></p>
                {/* <p><span className={styles.havean1}>Create a new account?</span> <Link to={"/registration"} style={{textDecoration:"none"}}><span className={styles.havean2}>Sign Up</span></Link></p> */}
                
            <div className={styles.offer}>
                 Sign up & get 10% off
            </div> 
 

      

 

             <div id="recaptcha"></div> 
             <label></label>
           
{/*         
          
            <button onClick={stateobserver}>stateobserver</button>
            <button onClick={SignedInUserDetails}>Signed-InUserDetails</button>
            */}


        </div>
    )
}

export default FireLogin;