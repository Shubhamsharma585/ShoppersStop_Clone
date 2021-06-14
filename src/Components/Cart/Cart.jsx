import React, { useEffect, useState } from "react"
import styles from "./Cart.module.css"
import banner from "../../database/covid.webp"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import Axios from "axios"



function Cart()
{

    const [ cart, setCart ] = useState([]);
    const [ favorite, setFavorite ] = useState([]);
    const [quantity, setQuantity ] = useState(1)
  

    const Dispatch = useDispatch()
    var isloggedIn = useSelector(state => state.regi.isloggedIn)
    var object_id = useSelector(state => state.regi.object_id)
    var mobile = useSelector(state => state.regi.number)

    

    useEffect(() => {
       Axios.get(`http://localhost:1200/user/${mobile}`)
        .then(res =>  { 
            setCart(res.data.data[0].cart)
            setFavorite(res.data.data[0].favorite)
        })
      
    },[quantity, cart])

    


    const fav_itm = (q) => {

        var new_itm = cart.filter(itm => itm._id = q)
        var Favorite = favorite;
        Favorite.push(new_itm[0])

        Axios.patch(`http://localhost:1200/user/${object_id}`,{
            favorite: Favorite
        })
        .then(res => {
        })
    }


    
    const remove_itm = (q) => {
        var new_cart = cart.filter((itm) => itm._id != q)
        
        setCart(new_cart);
        Axios.patch(`http://localhost:1200/user/${object_id}`,{
             cart: new_cart
        })
        .then(res => {
            setCart(res.data.data[0].cart)
        })
    }
    



    const itm_quantity = (qua, id) => {
         
        const new_cart = cart.map((itm) => itm._id === id? {...itm, quantity: qua}: itm)
         Axios.patch(`http://localhost:1200/user/${object_id}`,{
             cart: new_cart
        })
        .then(res => {
            //console.log(res.data)
        })
        setQuantity(qua)
    }



    var total_payable = 0;
    var total_discount = 0;
    for(var i = 0; i<cart.length; i++)
    {
        total_payable = total_payable + (cart[i].quantity * Number(cart[i].mrp - (cart[i].mrp * (cart[i].discount / 100)).toFixed(0)));
        total_discount = total_discount + (cart[i].quantity * Number((cart[i].mrp * (cart[i].discount / 100)).toFixed(0)));
 
    }
    

    return !isloggedIn? (
        <Redirect to={"/"} />
    ):(
        <div>
            <div>
                <img src={banner} className={styles.top}/>
            </div>

         <div className={styles.main_cont}>
           <div className={styles.left_cont}>
                <div className={styles.left_top}>
                    <div className={styles.shopping}>SHOPPING BAG</div>
                    <div className={styles.items}>{`(${cart.length} ITEMS)`}</div>
                    <div className={styles.price}>{`RS ${total_payable}`}</div>
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
                            <p style={{fontFamily:"PTSans-Regular" }}>{itm.company}</p>
                            <p style={{fontFamily:"PTSans-Bold", marginTop:"-10px" }}>{itm.description}</p>

                            <div className={styles.item_detail3} >
                                <p>Color:</p>
                                <p className={styles.itm_clr}>{itm.color}</p>
                                <p style={{marginLeft:"22px"}}>Size:</p>
                                <p className={styles.itm_size}>{itm.size}</p>                  
                                <p style={{marginLeft:"25px", marginTop:"11px"}}><span style={{fontSize:"15px"}}>|</span> Quantity:</p>
                                <select name="Quantity" className={styles.itm_quant} onChange={(e) => itm_quantity(e.target.value, itm._id)} >
                                  <p>Quantity</p>
                                  <option value={itm.quantity}>{itm.quantity}</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                </select>
                            </div>

                            <div className={styles.item_detail4}>
                                <div className={styles.heartsymbol}></div>
                                <div className={styles.wish_dlt} onClick={() => fav_itm(itm._id)}> ADD TO WISHLIST </div>
                                <div className={styles.deletesymbol}></div>
                                <div className={styles.wish_dlt} onClick={() => remove_itm(itm._id)}> REMOVE</div>
                            </div>
                        </div>
                        <div className={styles.item_availability}>
                            <ul>
                                <li>Typically Delivered in 5-7 working days</li>
                                <li>Cash On Delivery</li>
                                <div style={{display:"flex", flexDirection:"row", marginLeft:"-20px"}}><div className={styles.item_availabilitySign}/><span>Express Store Pick Up</span></div>
                            </ul>
                        </div>

                        <div>
                             <div className={styles.item_amount1}>{`Rs ${itm.quantity * (itm.mrp - (itm.mrp * (itm.discount / 100)).toFixed(0))}`}</div>
                             <div><span className={styles.item_amount2}>{`Rs ${itm.quantity * itm.mrp}`}</span> <span className={styles.item_amount3}>{`(${itm.discount}% Off)`}</span></div>
                        </div>
                       
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
			<span><strong>Rs </strong>{total_payable + total_discount}</span>
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
			{total_discount}</div>
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
            <strong><span>Rs </span>{total_payable}</strong>
        </div>
         </div>
         <div>
        <div className={styles.label_txt}>
            You have saved</div>
        <div className={styles.amount_txt}>
            <strong className={styles.saved}><span>Rs </span>{total_discount}</strong>
        </div>
        </div>
     </ul>
    </div>    


              <div className={styles.rightCont_checkout}>
                  <Link to={"/payment"} style={{textDecoration:"none"}}>
                    <span style={{color:"white"}}>
                       CHECKOUT
                    </span>
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