
import React from "react"
import { Avatar } from '@material-ui/core';
import styles from "../Profile/Profile.module.css"
import { Link } from "react-router-dom";


function Profile()
{




    return(
        <div>
            <div className={styles.main}>
                    
               <div className={styles.leftCont}>
                   <div className={styles.topleft}>

                       <div className={styles.topleft_photo}>
                       <Avatar  sizes="50px" src="/static/images/avatar/1.jpg" className={styles.topleft_photo1}/>
                       </div>

                       <div className={styles.topleft_detail}>
                           <p>Name: Shubham sharma</p>
                           <p>Email: shubhamsharma585@gmail.com</p>
                           <p>Mobile: 8619941818</p>
                       </div>

                   </div>

                   <div className={styles.middleleft}>
                      <div className={styles.middleleft_citizen}>
                         <p>First Citizen No.</p>
                          <p>54675455</p>
                     </div>  
                       <div className={styles.middlediv}/>
                       <p>Change password</p>
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
                        <Link to="user/myoffer" className={styles.bottomleft_link}><p className={styles.bottomleft_link}>LOGOUT</p></Link>
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
                         <p> shubham </p>  
                         <p> sharma </p>         
                         <p> shubhamsharma585@gmail.com</p>
                         <p> +91 8619941188   (Not Verified)</p>
                         <p> Male</p>
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