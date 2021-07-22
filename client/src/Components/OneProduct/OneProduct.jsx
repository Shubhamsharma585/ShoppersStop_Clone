import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../Card/Card";
import { ADDTOBAG } from "../../Redux/Registration/action";
import styles from "./OneProduct.module.css";

const black = {
  color: "black",
  marginLeft: "5px",
  fontWeight: "bold",
};

function OneProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [size, setSize] = useState("XL");
  const [alert, setAlert] = useState("");
  const [color, setColor] = useState(false);

  const dispatch = useDispatch();
  var user_obj = useSelector((state) => state.regi);
  var object_id = useSelector((state) => state.regi.object_id);

  useEffect(() => {
    axios
      .get("https://manish-ss.herokuapp.com/product/" + id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddToBag = () => {
    const payload = {
      ...data,
      quantity: 1,
      size,
    };

    dispatch(ADDTOBAG(payload, user_obj));
    setAlert("Product added to the Bag!");
  };
  const selectSize = (item) => {
    setSize(item);
    setColor(true);
  };

  return (
    <div>
      <Card image="https://sslimages.shoppersstop.com/sys-master/root/he0/h6c/16769226899486/Covid-Strip-WEB.jpg" />
      <div style={{ width: "80%", margin: "auto", display: "flex" }}>
        <div className={styles.img}>
          <img src={data.img} alt="picture" />
        </div>

        <div style={{ marginLeft: "2%", color: "gray" }}>
          <p style={black}>{`${data.company}`}</p>
          <p>
            {data.description} <br />
            <br />
            <span style={{ ...black, fontWeight: "bold" }}>
              &#x20b9;
              {` ${data.mrp - (data.mrp * (data.discount / 100)).toFixed(0)} `}
            </span>
            MRP{" "}
            <span style={{ textDecoration: "line-through" }}>
              &#x20b9;{data.mrp}{" "}
            </span>
            <span style={{ color: "red" }}>({data.discount}% off)</span>
          </p>
          <p>111 People Have Viewed This Product Recently!</p>
          <div style={{ display: "flex" }}>
            <img
              width="15px"
              src="https://i.pinimg.com/originals/43/cd/e1/43cde10967f2bfba9c792364eba88afa.png"
              alt=""
            />
            <div style={black}> {`1 offer | Get ${data.discount}% off`}</div>
          </div>
          <br />
          <div>COLOR | {data.color}</div>
          <br />
          <div>SIZE |</div>
          <div>
            {data.size &&
              data.size.map((item) => (
                <button
                  onClick={() => selectSize(item)}
                  style={{
                    padding: "1% 3%",
                    margin: "10px 10px 0px 0px",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </button>
              ))}
          </div>
          {color && <p>Size Selected!</p>}
          <div style={{ color: size != "" ? "green" : "red" }}>{alert}</div>
          <button
            onClick={handleAddToBag}
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              background:
                "linear-gradient(to right, #ff0066 44%, #ff3300 100%)",
              border: "0px solid",
              padding: "2% 8%",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            ADD TO BAG
          </button>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  width="35px"
                  src="https://icon-library.com/images/sports-apparel-24-512.png"
                  alt=""
                />
              </div>
              <div>
                100% Authentic
                <br />
                Products
              </div>
            </div>
            <hr />
            <div style={{ display: "flex" }}>
              <div>
                <img
                  width="45px"
                  src="https://image.flaticon.com/icons/png/512/70/70007.png"
                  alt=""
                />
              </div>
              <div>
                Free
                <br />
                Shipping*
              </div>
            </div>
            <hr />
            <div style={{ display: "flex" }}>
              <div>
                <img
                  width="45px"
                  src="https://www.tkpoultrysupplies.com.au/wp-content/uploads/2016/01/LocalPickup.png"
                  alt=""
                />
              </div>
              <div>
                Express
                <br />
                Store Pick Up
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div style={{ display: "flex", width: "70%" }}>
              <div>
                <img
                  width="20px"
                  src="https://image.flaticon.com/icons/png/512/70/70007.png"
                  alt=""
                />
              </div>
              <div style={black}>DELIVERY</div>
            </div>
            <p>Cash on delivery may be available *</p>
            <p>Free shipping on orders above 900</p>
          </div>
          <hr />
          <div>
            <div style={{ display: "flex", width: "70%" }}>
              <div>
                <img
                  width="20px"
                  src="https://www.tkpoultrysupplies.com.au/wp-content/uploads/2016/01/LocalPickup.png"
                  alt=""
                />
              </div>
              <div style={black}> EXPRESS STORE PICK UP NEW</div>
            </div>
            <p>Can't wait for your order? Get it early!</p>
            <p>
              Please select size and pin code to see availability at your
              nearest store
            </p>
          </div>
          <hr />
          <div>
            <div style={{ display: "flex", width: "70%" }}>
              <div>
                <img
                  width="20px"
                  src="https://www.placedeslices.com/wp-content/uploads/2019/03/icon-undo-14-x.svg"
                  alt=""
                />
              </div>
              <div style={black}>14 DAYS EASY RETURNS AND EXCHANGE</div>
            </div>
            <p>
              We offer free and easy return to get 100% refund and exchange
              through courier pickup or you can exchange most items bought
              online at any of our stores
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
