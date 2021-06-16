import React from "react";
import { useSelector } from "react-redux";

function Order() {
  var user_obj = useSelector((state) => state.regi);
//console.log(user_obj.orders);


   

  return ( 
      <div>
      {(user_obj.orders.length != 0)? (
        user_obj.orders.map((item) => (
          <div>

          <div
            style={{
              background: "#ffffff",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px 1px",
              display: "flex",
              borderRadius: "10px",
              padding: "1% 3%",
              width: "90%",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "5px",
              paddingRight: "50px"
            }}
          >
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <img width="90px" src={item.img} alt="img" />
            </div>
            <div
              style={{
                marginLeft: "3%", 
                fontSize: "15px",
                color: "#504f4f",
                fontWeight: "bold",
              }}
            >
              <div>
                <div style={{ color: "black", fontSize: "15px" }}>
                  {item.company}, {item.name}
                </div>
                <hr />
                {item.description} <br />
                Size : {item.size}
                <br />
                Quantity : {item.quantity}
              </div>
            </div>
            <div style={{ fontSize: "1.1rem", margin: "auto", marginTop:"0px", float:"right" }}>
            <div >
              Order status <br />
              </div>
              <hr />
              <button
                style={{
                  background: "green",
                  padding: "10px",
                  border: "0px",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                  color: "white",
                }}
              >
                CONFIRMED
              </button>
              </div>

          </div>
                 
          <div>
            <hr/>
          </div>       
          </div>      
        ))): (
          <p style={{margin:"auto", marginLeft:"270px", paddingTop:"10px", fontWeight:"600"}}>There is no Item in Orders! Please Order</p>
        )
        
      
      } 
     
    </div>
  );
}

export default Order;
