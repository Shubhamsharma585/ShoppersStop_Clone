import React, { useState } from "react";
import {firebase, auth, google} from "../Fireauth/firebase"
import styles from "./Reg.module.css"
import { Link, Redirect } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import genderI from "../../database/gender.png"
import { useDispatch, useSelector } from "react-redux"
import { registering } from "../../Redux/Registration/action"
 



function Reg() 
{

    const dispatch = useDispatch();
    const isloggedIn = useSelector(state => state.regi.isloggedIn)


    const [name, setName] = useState("")
    const [Remail, setRemail] = useState("")
    const [Rpass, setRpass] = useState("")
    const [Rphone, setRphone] = useState("")
    const [gender, setGender] = useState("female")

       



    function googlesignup()
    {
     auth.signInWithPopup(google)
     .then(resp => { return console.log(resp.user.displayName),
        console.log(resp.user.email),
        console.log(resp.user.emailVerified)
        })
     .catch((err) => console.log(err)); 
    }




    const LoginPhone = () => {

        let recaptcha = new firebase.auth.RecaptchaVerifier(`recaptcha`);
        var email = Remail;
        var password = Rpass;
        let number = "+91"+Rphone;
        let first_name = name.split(" ")[0];
        let last_name = name.split(" ")[1];

        
        console.log(email, password, number, first_name, last_name)
  
         auth.signInWithPhoneNumber(number,recaptcha)
         .then((e) => {
            let code = prompt(`enter the otp`,``);
  
            if(code == null) return;
            e.confirm(code)
            .then((result) => {
                console.log(result.user,'user');
                console.log("line 2");
                document.querySelector('label').textContent = result.user.phoneNumber + 
                'Number verified!';
                dispatch(registering({first_name, last_name, email, password, number, gender }))
                var credential = firebase.auth.EmailAuthProvider.credential(email, password);
                simpleLink(credential)
            })
          .catch((err) => {
                console.log(err)
            })
        }) 
    }  
  
  
  
    function simpleLink(credential) {
      // [START auth_simple_link]
      auth.currentUser.linkWithCredential(credential)
        .then((usercred) => {
          var user = usercred.user;
          console.log("Account linking success", user);
        }).catch((error) => {
          console.log("Account linking error", error);
        });
      // [END auth_simple_link]
    }
 
   
      


    return isloggedIn?(
      <Redirect to="/" push/>
    ):(
        <div className={styles.main}>
 
            <div className={styles.left}>
                <h4>SIGN UP</h4>
                <p className={styles.create}>Create your account on Shoppers Stop</p>

                <div className={styles.inp}>
                    <div>
                    <AccountCircle className={styles.logo}/>
                    <TextField 
                    style ={{width: '80%'}} 
                    inputProps={{ autoFocus: false }}
                    label="First & Last Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    
                    <div>
                    <MailOutlineOutlinedIcon className={styles.logo}/>
                    <TextField
                    style ={{width: '80%'}}  
                    inputProps={{ autoFocus: false }}
                    label="Email"
                    value={Remail}
                    onChange={(e) => setRemail(e.target.value)}
                    />
                    </div>
                 
                   <div>
                   <CallOutlinedIcon className={styles.logo}/>
                   <TextField
                    style ={{width: '80%'}} 
                    inputProps={{ autoFocus: false }}
                    label="Mobile Number"
                    value={Rphone}
                    onChange={(e) => setRphone(e.target.value)}
                    />
                   </div> 
                  
                   <div>
                   <LockOutlinedIcon className={styles.logo}/>    
                   <TextField 
                    style ={{width: '80%'}} 
                    inputProps={{ autoFocus: false }}
                    label="Password"
                    type="password"
                    value={Rpass}
                    onChange={(e) => setRpass(e.target.value)}
                    />
                   </div>
                  
                

              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                   <img className={styles.genderIcon} src={genderI}/>
                   <FormControlLabel value="female" onClick={() => setGender("female")} control={<Radio color="secondary" />} label="Female" />
                   <FormControlLabel value="male" onClick={() => setGender("male")} control={<Radio color="secondary" />} label="Male" />
                </RadioGroup>
              </FormControl>
              <div id="recaptcha"></div> 
                
 
                </div>
               
                <Button className={styles.btn} onClick={LoginPhone} variant="contained" color="secondary">CONTINUE</Button>
               
               <div className={styles.line}>
                  <div className={styles.line1}></div>
                  <div className={styles.box}>Or via Social Account</div>
                  <div className={styles.line1}></div>
               </div> 

                <div className={styles.social}>
                   <div className={styles.social_cont}><div className={styles.fb}></div></div> 
                   <div className={styles.social_cont} onClick={googlesignup} ><div className={styles.google}></div></div>
                </div>


                <p><span className={styles.havean1}>Have an account?</span> <Link to={"/login"} style={{textDecoration:"none"}}><span className={styles.havean2}>Sign In</span></Link></p>
                <p><span className={styles.rights1}>By signing up you agree to our</span> <span className={styles.rights2}>Terms of service</span> <span className={styles.rights1}>&</span> <span className={styles.rights2}>Privacy Policy</span></p> 
            </div>


            <div className={styles.right}></div>


        </div>
    )
}

export default Reg;