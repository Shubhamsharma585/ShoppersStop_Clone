import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";
import LoadingLogo from "../LoadingLogo/LoadingLogo";
import { useDispatch, useSelector } from "react-redux";
import {
  getDatasByDept,
  getDatasByOffer,
  getDatasByPrice,
} from "../../Redux/Filters/actions";

export default function Product() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const reduxCat = useSelector((state) => state.data.datas);
  console.log(reduxCat);
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var cat = urlSearchParams.get("c");

  // console.log(category);
  const handleDept = (e) => {
    const { value, checked } = e.target;
    setCategory(value);
    if (checked) {
      dispatch(getDatasByDept(value));
    } else {
      dispatch(getDatasByDept(cat));
    }
  };

  const onHandleLink = (id) => {
    history.push(`/product/${id}`);
  };

  const handleOffer = (e) => {
    const { value, checked } = e.target;
    let offer = +value;
    if (checked) {
      dispatch(getDatasByOffer(category || cat, offer));
    } else {
      dispatch(getDatasByOffer(cat));
    }
  };

  const handlePrice = (e) => {
    const { value, checked } = e.target;
    let price = +value;
    if (checked) {
      dispatch(getDatasByPrice(category || cat, price));
    } else {
      dispatch(getDatasByPrice(cat));
    }
  };

  useEffect(() => {
    axios
      .get("https://ss-backend.vercel.app/product", {
        params: {
          c: cat,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [cat]);
  // useEffect(() => {
  //   axios
  //     .get("https://ss-backend.vercel.app/product", {
  //       params: {
  //         c: cat,
  //         name: productName,
  //       },
  //     })
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, [cat || productName]);
  console.log(data, cat);
  return (
    <div className="sideFilter">
      <div>
        <div className="outerDiv22">
          <p>DEPARTMENT</p>
          <div className="check22">
            <label className="container">
              <input
                className="box22"
                value="women"
                name="categoryy"
                onChange={handleDept}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Women
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="men"
                name="categoryy"
                onChange={handleDept}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Men
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="kids"
                name="categoryy"
                onChange={handleDept}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Kids
            </label>
            <br />
          </div>
          <hr></hr>
        </div>

        <div className="outerDiv22">
          <p>OFFERS</p>
          <div className="check22">
            <label className="container">
              <input
                className="box22"
                value="10"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 10% Off
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="20"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 20% Off
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="30"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 30% Off
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="40"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 40% Off
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="50"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 50% Off
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value="60"
                name="offerr"
                onChange={handleOffer}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Flat 60% Off
            </label>
          </div>
          <hr></hr>
        </div>

        {/* <div className="outerDiv22">
          <p>SIZE</p>
          <div className="check22">
            <label className="container">
              <input className="box22" type="radio"></input> <span className="checkmark"></span>
              Small
            </label>
            <br />
            <label className="container">
              <input className="box22" type="radio"></input> <span className="checkmark"></span>
              Medium
            </label>
            <br />
            <label className="container">
              <input className="box22" type="radio"></input> <span className="checkmark"></span>
              Large
            </label>
            <br />
            <label className="container">
              <input className="box22" type="radio"></input> <span className="checkmark"></span>
              X-Large
            </label>
            <br />
            <label className="container">
              <input className="box22" type="radio"></input> <span className="checkmark"></span>
              XX-Large
            </label>
          </div>
          <hr></hr>
        </div> */}
        <div className="outerDiv22">
          <p>PRICE</p>
          <div className="check22">
            <label className="container">
              <input
                className="box22"
                value={500}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 500
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value={1000}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 1000
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value={2000}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 2000
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value={3000}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 3000
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value={5000}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 5000
            </label>
            <br />
            <label className="container">
              <input
                className="box22"
                value={10000}
                name="pri"
                onChange={handlePrice}
                type="radio"
              ></input>{" "}
              <span className="checkmark"></span>
              Less Than 10000
            </label>
          </div>
          <hr></hr>
        </div>
      </div>
      {reduxCat.data && (
        <div className="reduxDataLength">
          <h3>{reduxCat.data[0] && reduxCat.data[0].name}</h3>(
          {reduxCat.data.length} Items)
          {reduxCat.data.length === 0 && (
            <div style={{ marginLeft: "12%" }}>
              <div>
                <img src="https://i.imgur.com/hU5kLm7.gif" alt="no data" />
              </div>
              <h3>No Such Data Available Please Try Different Combination!</h3>
            </div>
          )}
        </div>
      )}
      {loading ? (
        <div style={{ width: "100%", position: "fixed" }}>
          {" "}
          <LoadingLogo />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginLeft: "2%",
            marginTop: "7%",
          }}
        >
          {reduxCat.data &&
            reduxCat.data.map((el) => (
              // <Link to={`product/${el._id}`}>

              <ProductCard
                key={el._id}
                id={el._id}
                img={el.img}
                company={el.company}
                description={el.description}
                price={el.mrp}
                discount={el.discount}
                onHandleLink={onHandleLink}
              ></ProductCard>
              // </Link>
            ))}
        </div>
      )}
    </div>
  );
}
