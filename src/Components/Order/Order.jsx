import React from "react";
import { useSelector } from "react-redux";

function Order() {
  var user_obj = useSelector((state) => state.regi);
  console.log(user_obj.orders[0]);

  return (
    <div>
      {user_obj.orders &&
        user_obj.orders.map((item) => (
          <div
            style={{
              background: "#e6ffe1",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              display: "flex",
              borderRadius: "10px",
              padding: "1% 3%",
              width: "80%",
              margin: "auto",
            }}
          >
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <img width="90px" src={item.img} alt="img" />
            </div>
            <div
              style={{
                marginLeft: "3%",
                fontSize: "22px",
                color: "#504f4f",
                fontWeight: "bold",
              }}
            >
              <div>
                <div style={{ color: "black", fontSize: "25px" }}>
                  {item.company}, {item.name}
                </div>
                <hr />
                {item.description} <br />
                Size : {item.size}
                <br />
                Quantity : {item.quantity}
              </div>
            </div>
            <div style={{ fontSize: "1.5rem", margin: "auto" }}>
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
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                CONFIRMED
              </button>
              </div>
          </div>
        ))}
    </div>
  );
}

export default Order;
