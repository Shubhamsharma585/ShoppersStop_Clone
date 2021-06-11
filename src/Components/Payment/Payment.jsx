import React, { useState } from "react"
import styles from "./Payment.module.css"
import banner from "../../database/covid.webp"
import { Button } from "@material-ui/core"
import payment_banner from "../../database/payment_banner.webp"
import { useDispatch, useSelector } from "react-redux"

 

function Payment() 
{

    const Dispatch = useDispatch()
    var isloggedIn = useSelector(state => state.regi.isloggedIn)
    var object_id = useSelector(state => state.regi.object_id)
    var fn = useSelector(state => state.first_name)
    console.log(object_id, fn, isloggedIn)
   
  
     const [delivery, setDelivery] = useState(true)
     const [payment, setPayment] = useState(false)



     const [the, setThe] = useState({
        theme1: "active",
        theme2: "inactive",
        theme3: "inactive",
        theme4: "inactive",
        theme5: "inactive"
     })


     const pay = () => {
         setDelivery(false)
         setPayment(true)
     } 

     const stylesP = {
         "active" : {
            backgroundColor: "white",
            width: "250px",
            marginLeft: "0px",
            marginRight: "-20px",
            marginBottom: "-17px",
            height: "70px",
            paddingLeft: "10px",
            borderLeft: "4px red solid"
         },

         "inactive": {
         }
     }
     
 


     const activePayment = (i) => {
        if(i == 1)
        {
           setThe({
            theme1: "active",
            theme2: "inactive",
            theme3: "inactive",
            theme4: "inactive",
            theme5: "inactive"
         })
        }
        else if(i == 2)
        {
            setThe({
                theme1: "inactive",
                theme2: "active",
                theme3: "inactive",
                theme4: "inactive",
                theme5: "inactive"
             })
        }
        else if(i == 3)
        {
            setThe({
                theme1: "inactive",
                theme2: "inactive",
                theme3: "active",
                theme4: "inactive",
                theme5: "inactive"
             })
        }
        else if(i == 4)
        {
            setThe({
                theme1: "inactive",
                theme2: "inactive",
                theme3: "inactive",
                theme4: "active",
                theme5: "inactive"
             })
        }
        else if(i == 5)
        {
            setThe({
                theme1: "inactive",
                theme2: "inactive",
                theme3: "inactive",
                theme4: "inactive",
                theme5: "active"
             })
        }
     }



 

    return(
        <div>
            <div>
                <img src={banner} className={styles.top}/>
            </div>


      <div className={styles.main_cont}>
        <div className={styles.left_cont}>
             <div className={styles.left_optionbar}>
                  <div className={styles.signedinsymbol}/>
                  <div className={styles.signin1}>1.SIGN IN</div>
                  <div className={styles.email}>shubhamsharma585@gmail.com</div>
                  <div className={styles.changebtn}> <Button  variant="contained" style={{backgroundColor: 'white', color: 'red', height: '30px'}}>CHANGE</Button> </div>
             </div>
             <div className={styles.left_optionbar}>
                <div className={styles.delivery}>2.DELIVERY METHOD</div>   
             </div>
             {delivery && <div className={styles.delivery_cont}>
                     <div className={styles.addressbarswitch}>
                           <div className={styles.addressbarswitch1}>DELIVERY ADDRESS</div>
                           <div className={styles.addressbarswitch2}>EXPRESS STORE PICK UP</div>
                           <div className={styles.addressbarswitch3}></div>
                     </div>

                     <div className={styles.addressbartop}>
                         <p>Shubham Sharma (Default)</p>
                         <p>1.8k hostel,nitw, Churu, Rajasthan - 331403</p>
                         <p>Cash on Delivery available.</p>
                     </div>

                 <div className={styles.line1}/>
                    <div className={styles.addressbar}>
                    <div className={styles.addnew}>ADD NEW</div>
                    <div className={styles.addnew}>SAVED ADDRESSES(2)</div> 
                 </div>
            
                    <div className={styles.line1}/>
                   <div className={styles.proceeddiv}>
                   <div className={styles.proceedto} onClick={() => pay()}> PROCEED TO PAY</div> 
                   </div>
                </div>
                 }

             <div className={styles.left_optionbar}>
                 <div className={styles.delivery}>3.MAKE PAYMENT</div>
                 <div style={{marginRight:"30px"}}>Payable Amount: Rs<span>13705.65</span></div>
             </div>

             {payment && <div className={styles.payment_div}> 
                       <img src={payment_banner} className={styles.payment_banner}/>
                   
                    <div className={styles.paymentoptions}>
                      <div className={styles.paymentleft}>

                       
                          <div className={styles.tab} onClick={() => activePayment(1)} style={stylesP[the.theme1]}>
                              <div className={styles.giftcard}/>
                              <div>
                                  <p className={styles.heading1}>GIFT CARD/E-GIFT VOUCHER</p>
                                  <p className={styles.heading2}>Redeem Your Gift Vouchers</p>
                              </div>
                         </div> 
                         <div className={styles.linep}/>
                         <div className={styles.tab} onClick={() => activePayment(2)} style={stylesP[the.theme2]}>   
                              <div className={styles.creditcard}/>
                              <div>
                                  <p className={styles.heading1} >CREDIT CARD</p>
                                  <p className={styles.heading2}>Pay Using Your Credit Card</p>
                              </div>
                        </div> 
                        <div className={styles.linep}/>
                        <div className={styles.tab} onClick={() => activePayment(3)} style={stylesP[the.theme3]}>   
                              <div className={styles.debitcard}/>
                              <div>
                                  <p className={styles.heading1}>DEBIT CARD</p>
                                  <p className={styles.heading2}>Pay Using Your Debit Card</p>
                              </div>
                        </div>    
                        <div className={styles.linep}/>
                        <div className={styles.tab} onClick={() => activePayment(4)} style={stylesP[the.theme4]}>  
                              <div className={styles.banking}/>
                              <div>
                                  <p className={styles.heading1}>NET BANKING</p>
                                  <p className={styles.heading2}>Use Your Preffered Bank</p>
                              </div>
                        </div>    
                        <div className={styles.linep}/>
                        <div className={styles.tab} onClick={() => activePayment(5)} style={stylesP[the.theme5]}>
                              <div className={styles.wallets}/>
                              <div>
                                  <p className={styles.heading1}>OTHER WALLETS</p>
                                  <p className={styles.heading2}>Use Your Preffered Wallet</p>
                              </div>
                        </div>

                      </div>

                      <div className={styles.paymentright}>
                          
                      </div>
                    </div>

                 </div>
                 }
           
                     
             


       
       </div>











           <div className={styles.right_cont}>
               <h4>ORDER SUMMARY</h4>
              <div className={styles.promo}>
                  <input className={styles.inp} placeholder="Enter promo/coupon code" type="text"/>
                  <div className={styles.apply}>APPLY</div>
              </div>
              <div className={styles.line}/>

              <ul className={styles.uList}>
	     <div>
		   <div className={styles.label_txt}>
			Sub total</div>
		   <div className={styles.amount_txt}>
			<span><strong>Rs</strong>14196</span>
			</div>
	     </div>
	      <div>
             <div className={styles.label_txt}>
					Delivery charges*</div>
				<div className={styles.amount_txt}>	
					FREE</div>
		  </div>
          <div>
	       	<div className={styles.label_txt}>
				Gift packing
		    </div>
		    <div className={styles.amount_txt}>FREE</div>
	       </div>
	     
          <div>
		<div className={styles.label_txt}>
			Offer Discount
		</div>
		<div className={styles.amount_txt}>
			799.6</div>
	      </div>


         <div>
           <div className={styles.label_txt}>
			Coupon Discount</div> 
            <div className={styles.amount_txt}>NA</div>
         </div>
        </ul>
                   


      <div className={styles.line}/>    

   <div class="shopping-grand-total">
    <ul className={styles.uList}>
         <div>
        <div className={styles.label_txt}>
            Payable Amount</div>
        <div className={styles.amount_txt}>       
            <strong><span class="rupee">Rs</span> 14,196.4</strong>
        </div>
         </div>
         <div>
        <div className={styles.label_txt}>
            You have saved</div>
        <div className={styles.amount_txt}>
            <strong className={styles.saved}><span class="rupee">Rs</span> 799.6</strong>
        </div>
        </div>
     </ul>
    </div>    
            <div className={styles.line}/>       
           </div>
         </div>
        


        </div>
    )
}

export default Payment;