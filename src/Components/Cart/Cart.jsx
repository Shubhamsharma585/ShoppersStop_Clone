import React, { useState } from "react"
import styles from "./Cart.module.css"
import banner from "../../database/covid.webp"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"



function Cart()
{

   

    const Dispatch = useDispatch()
    var isloggedIn = useSelector(state => state.regi.isloggedIn)
    var object_id = useSelector(state => state.regi.object_id)
    var cart = useSelector(state => state.regi.cart)
      


   

    return(
        <div>
            <div>
                <img src={banner} className={styles.top}/>
            </div>

         <div className={styles.main_cont}>
           <div className={styles.left_cont}>
                <div className={styles.left_top}>
                    <div className={styles.shopping}>SHOPPING BAG</div>
                    <div className={styles.items}>(5 ITEMS)</div>
                    <div className={styles.price}>RS 14,196.4</div>
                    <div className={styles.total}>TOTAL</div>
                </div>
                <div className={styles.line1}/>  
                     
                <div className={styles.delivery}>
                    <div className={styles.delivery1}>DELIVERY & EXPRESS STORE PICK UP</div>
                  <div className={styles.promo1}>
                        <input className={styles.inp1} placeholder="Enter Pincode" type="text"/>
                        <div className={styles.apply}>CHECK</div>
                  </div>
                </div>
                
                <div className={styles.line1}/>

                <div className={styles.productlist}>
                   <p>Products</p>
                   <p style={{marginLeft:"200px"}}>Delivery & Availability</p>
                   <p>Amount</p>
                </div> 
                <div className={styles.line1}/>

                 




                {cart && cart.map(itm => {
                    return(
                      <div>  
                      <div className={styles.cart_item} >
                        <img className={styles.item_img} src={itm.img}/>
                        <div className={styles.item_detail}>
                            <p>{itm.company}</p>
                            <p>{itm.description}</p>
                            <div className={styles.item_detail3} >
                                <p>Color:</p>
                                <p>{itm.color}</p>
                                <p>Size:</p>
                                <p>{itm.color}</p>
                                <p>Quantity:</p>
                                <p>{itm.color}</p>
                            </div>
                            <div className={styles.item_detail4}>
                                <div>ADD TO WISHLIST</div>
                                <div style={{marginLeft:"100px"}}>REMOVE</div>
                            </div>
                        </div>
                        <div className={styles.item_availability}>
                            <ul>
                                <li>Typically Delivered in 5-7 working days</li>
                                <li>Cash On Delivery</li>
                                <div style={{display:"flex", flexDirection:"row", marginLeft:"-20px"}}><div className={styles.item_availabilitySign}/><span>Express Store Pick Up</span></div>
                            </ul>
                        </div>
                        <div className={styles.item_amount}>{itm.mrp}</div>
                      </div>
                        <div className={styles.line1}/>
                      </div>
                    )
                })}
                      <div className={styles.line1}/>
                

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


              <div className={styles.rightCont_checkout}>
                  <Link to={"/payment"}>
                      CHECKOUT
                  </Link>                    
               </div>   

               <div className={styles.below_checkout}>
                <p> No Delivery charges for Express Store Pickup.</p>
                <p>Do you have a gift card or and electronic gift voucher? Use it at the payment page.</p>     
               </div>        
           </div>
         </div>
        


        </div>
    )
}

export default Cart;