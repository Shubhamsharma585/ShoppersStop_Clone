import React from "react";
import { useSelector } from "react-redux";

function Favorite() {
  var user_obj = useSelector((state) => state.regi);

  console.log(user_obj);

  return !user_obj.isloggedIn ? (
    <div>
      <h3 style={{ marginLeft: "45%", marginTop: "2%" }}>
        Please Login First!
      </h3>
    </div>
  ) : (
    <div>
      {user_obj.favorite &&
        user_obj.favorite.map((item) => (
          <div
            style={{
              background: "#caccca",
              boxShadow: "rgba(99, 97, 97, 0.35) 0px 5px 15px",
              display: "flex",
              borderRadius: "10px",
              padding: "1% 3%",
              width: "80%",
              margin: "auto",
            }}
          >
            <div style={{ boxShadow: "rgba(78, 77, 77, 0.35) 0px 5px 15px" }}>
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
              <div>
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

export default Favorite;
