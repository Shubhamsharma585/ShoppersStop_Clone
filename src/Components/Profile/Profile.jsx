
import React, { useState } from "react"
import { Avatar } from '@material-ui/core';
import styles from "./Profile.module.css"
import { Link, Redirect } from "react-router-dom";
import {firebase, auth } from "../Fireauth/firebase"
import { useSelector, useDispatch } from "react-redux"
import { loggingout } from "../../Redux/Registration/action"
import Order from "../Order/Order"




  
function Profile()
{ 


    const theme = {
        "dark": {
            borderBottom:"1px solid rgb(193, 193, 193)",
            borderRight:"1px solid rgb(193, 193, 193)",
            borderLeft:"1px solid rgb(193, 193, 193)",
            backgroundColor: "rgb(249, 249, 249)",
            marginTop: "0px",
            padding: "10px",
            width:"300px",
            height:"20px",
            textAlign: "center",
            fontWeight: 600,
            color:"rgb(55, 55, 55)"
        },

        "light":{
            border:"1px solid rgb(187, 187, 187)",
            borderTop:"0px solid grey",
            borderLeft:"0px solid grey",
            borderRight:"0px solid grey",
            backgroundColor: "white",
            marginTop: "0px",
            width:"300px",
            height:"20px",
            padding: "10px",
            textAlign: "center",
            borderBottom: "0px",
            fontWeight: 600,
            color:"rgb(55, 55, 55)"
        }
    }

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
    var usr_obj = useSelector(state => state.regi)


    var [showpersonel, setShowpersonel] = useState(true)
    var [showtransaction, setShowtransaction] = useState(false)
    var [showaddress, setShowaddress] = useState(false)
    var [orderbox, setOrderbox] = useState({
        order: "light",
        pickup: "dark",
        return: "dark"
    }) 
    
    

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


    const on_transaction = () => {
        setShowpersonel(false)
        setShowtransaction(true)
        setShowaddress(false)
    }

    const on_transaction_order = () => {
        setOrderbox({
            order: "light",
            pickup: "dark",
            return: "dark"
        })
    }
    const on_transaction_pickup = () => {
        setOrderbox({
            order: "dark",
            pickup: "light",
            return: "dark"
        })
    }
    const on_transaction_return = () => {
        setOrderbox({
            order: "dark",
            pickup: "dark",
            return: "light"
        })
    }

    const on_address = () => {
        setShowpersonel(false)
        setShowtransaction(false)
        setShowaddress(true)
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
                        <p className={styles.bottomleft_link}>MY OFFERS</p>
                        <hr></hr>
                       <p className={styles.bottomleft_link}>MY FIRST CITIZEN POINTS</p>
                        <hr></hr>
                        <p className={styles.bottomleft_link}>MY FIRST CITIZEN BENEFITS </p>
                        <hr></hr>
                        <p className={styles.bottomleft_link}>MY WALLET</p>
                        <hr></hr>
                        <p className={styles.bottomleft_link} onClick={() => on_transaction()}>MY TRANSACTION</p>
                        <hr></hr>
                        <p className={styles.bottomleft_link}>MY WARDROBE</p>
                        <hr></hr>
                         <p className={styles.bottomleft_link} onClick={() => on_address()}>MY ADDRESS BOOK</p>
                        <hr></hr>
                        <p className={styles.bottomleft_link}>STORE LOCATOR</p>
                        <hr></hr>
                        <p className={styles.bottomleft_link} onClick={LogOut}>LOGOUT</p>
                        <hr></hr>                
                   </div>
                 
               </div>
     


                <div className={styles.rightCont}>
                   {showpersonel && <div>
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
                           <p>{email} <span className={styles.verify} onClick={() => verificationEmail()}> {isverified? <span style={{color:"green"}}>{"verified!"}</span>: <span style={{color:"red"}}>{"verify?"}</span>}</span></p>
                           <p>{mobile}</p>
                           <p>{gender}</p>
                        </div>
                    </div>         
                     <div className={styles.rightCont_edit}>
                          EDIT PROFILE
                     </div>

                   </div>}



                   {showtransaction && <div className={styles.showtransaction}>
                     <p className={styles.orderstag}>ORDERS</p>
                     <div className={styles.orders_main}>
                         <div className={styles.orders_header}>
                             <p style={theme[orderbox.order]} onClick={on_transaction_order}>Order History</p>
                             <p style={theme[orderbox.pickup]} onClick={on_transaction_pickup}>Pickup Orders</p>
                             <p style={theme[orderbox.return]} onClick={on_transaction_return}>Return/Exchange Orders</p>
                         </div>
                         <div className={styles.orders_list}>
                             <Order/>
                         </div>

                     </div>
                        

                   </div>}




                   {showaddress && <div className={styles.showaddress}>
                    {address.map((itm) => {return (
                    <div className={styles.showaddress_indi}>
                        <p>Name: {itm.afn+" "+itm.aln}</p>
                        <p>Mobile: {itm.amobile}</p>
                        <p>Address: {itm.aline1}</p>
                        <p>{itm.aline2}, Pincode: {itm.apin}</p>
                        <p>City: {itm.acity}  </p>
                        <p>State: {itm.astate}</p>
  
                    </div>)    
                    })}
                        

                   </div>}





                    
                    </div>

            </div>



        </div>
    )
}

export default Profile;