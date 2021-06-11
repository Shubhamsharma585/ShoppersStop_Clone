
import React from "react"
import { Avatar } from '@material-ui/core';
import styles from "./Profile.module.css"
import { Link, Redirect } from "react-router-dom";
import {firebase, auth } from "../Fireauth/firebase"
import { useSelector, useDispatch } from "react-redux"
import { loggingout } from "../../Redux/Registration/action"




 
function Profile()
{ 


    const Dispatch = useDispatch()
    var isloggedIn = useSelector(state => state.regi.isloggedIn)
    var fname = useSelector(state => state.regi.first_name)
    var lname = useSelector(state => state.regi.last_name)
    var gender = useSelector(state => state.regi.gender)
    var email = useSelector(state => state.regi.email)
    var mobile = useSelector(state => state.regi.number)
    var isverified = useSelector(state => state.regi.email_verified)
    var address = useSelector(state => state.regi.address)
    var wallet = useSelector(state => state.regi.wallet)

    


    const PassReset = () => {

        auth.sendPasswordResetEmail(email).then(function() {
            console.log("email sent")
        }).catch(function(error) {
            console.log(error)
        });
      }


      const verificationEmail = () => {

        var user = auth.currentUser;
        user.sendEmailVerification().then(function() {
            console.log("verification email sent!")
        }).catch(function(error) {
            console.log("Email Already verified!")
        });
    }

      


    const LogOut = () => {
        auth.signOut().then(function() {
            Dispatch(loggingout())
            console.log('User Logged Out!');
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
    }



    return !isloggedIn? (
             <Redirect to={"/"} push/>
       ):(
        <div>
            <div className={styles.main}>
                    
               <div className={styles.leftCont}>
                   <div className={styles.topleft}>

                       <div className={styles.topleft_photo}>
                       <Avatar  sizes="50px" src="/static/images/avatar/1.jpg" className={styles.topleft_photo1}/>
                       </div>

                       <div className={styles.topleft_detail}>
                           <p>Name: <span>{fname+" "+lname}</span></p>
                           <p>Email: <span>{email}</span></p>
                           <p>Mobile: <span>{mobile}</span></p>
                       </div>

                   </div>

                   <div className={styles.middleleft}>
                      <div className={styles.middleleft_citizen}>
                         <p>First Citizen No.</p>
                          <p>54675455</p>
                     </div>  
                       <div className={styles.middlediv}/>
                       <p className={styles.pass_reset} onClick={() => PassReset()}>Change password</p>
                   </div>

                   <div className={styles.bottomleft}>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY OFFERS</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY FIRST CITIZEN POINTS</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY FIRST CITIZEN BENEFITS </p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY WALLET</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY TRANSACTION</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY WARDROBE</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>MY ADDRESS BOOK</p></Link>
                        <hr></hr>
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>STORE LOCATOR</p></Link>
                        <hr></hr>
                        <p className={styles.bottomleft_link} onClick={LogOut}>LOGOUT</p>
                        <hr></hr>                
                   </div>
                 
               </div>
     
                <div className={styles.rightCont}>
                    <h3>PERSONAL INFORMATION</h3>

                    <div className={styles.rightCont_info} >
                        <div className={styles.rightCont_left}>
                       <p>First name</p>
                       <p> Last name  </p>
                       <p> Email address</p>
                       <p> Mobile Number (10 digits)</p>
                       <p> Gender</p>
                        </div>

                
                        <div className={styles.rightCont_right}>
                           <p>{fname}</p>
                           <p>{lname}</p>
                           <p>{email} <span className={styles.verify} onClick={() => verificationEmail()}> {isverified? ("verified"): ("verify?")}</span></p>
                           <p>{mobile}</p>
                           <p>{gender}</p>
                        </div>
                    </div>
                  
                     <div className={styles.rightCont_edit}>
                          EDIT PROFILE
                     </div>


                </div>

            </div>



        </div>
    )
}

export default Profile;