import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from "./oneProduct.module.css"
const black={
    color:"black"
}

function OneProduct() {
    const {id}=useParams();
    const [data,setData]=useState({})

    useEffect(()=>{
        axios.get("https://json-heroku-shubham.herokuapp.com/products/"+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    
    return (
        <div style={{width:"80%",margin:"auto",display:"flex"}}>
            <div>
                <img src={data.img} alt="picture" />
            </div>
       <h1 className={styles.red}>hi</h1>
            <div style={{marginLeft:"5%",color:"gray"}}>
             <h3 style={black}>{data.company}</h3>
             <p>{data.description} <br /><br />
                <span style={{...black,fontWeight:"bold"}}>
                &#x20b9;{`${data.mrp-(data.mrp*(data.discount/100)).toFixed(0)}`} 
                </span> 
                MRP <span style={{textDecoration:"line-through"}}>&#x20b9;{data.mrp} </span> 
                <span style={{color:"red"}}>({data.discount}% off)</span>
             </p>
             <p>111 People Have Viewed This Product Recently!</p>
             <div style={{width:"100%"}}>
                 <img width="3%" src="https://1np0ul34036x2u10a61dxecl-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/discount-3.png" alt="" />
                 <span style={black}> 1 offer | Get {data.discount}% off</span>
             </div><br />
             <div>COLOR | {data.color}</div>
             <br />
             <button>ADD TO BAG</button>
             <br />
             <br />
             <div style={{display:"flex"}}>
                 <div>100% Authentic<br/>Products</div>
                 <hr />
                 <div>Free<br/>Shipping*</div>
                 <hr />
                 <div>Express<br/>Store Pick Up</div>
             </div>
              <div>
                    <p style={black}>DELIVERY</p>
                    <p>
                    Cash on delivery may be available *
                    </p> 
                    <p>
                    Free shipping on orders above 900
                    </p>
              </div>
              <hr />
              <div>
                  <div style={{display:"flex",width:"0%"}}>
                  <div><img width="20px" src="https://image.flaticon.com/icons/png/512/70/70007.png" alt="" />
                  </div>
                    <div style={black}>EXPRESS STORE PICK UP NEW</div>
                  </div>
                    <p>Can't wait for your order? Get it early!</p>
                    <p>Please select size and pin code to see availability at your nearest store</p>
              </div>
              <hr />
              <div>
                  <p style={black}>14 DAYS EASY RETURNS AND EXCHANGE</p>
                  <p>We offer free and easy return to get 100% refund and exchange through courier pickup or you can exchange most items bought online at any of our stores</p>
              </div>
            </div>
        </div>
    )
}

export default OneProduct
