import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

export default function Product() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const history = useHistory();
  console.log(urlSearchParams.get("c"));
  var cat = urlSearchParams.get("c");
  // const category = useParams().c;
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  // console.log(category);
  const handleDept = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCategory(name);
    } else {
    }
    setCategory(name);
    // cat = name;
  };

  const onHandleLink = (id) => {
    history.push(`/product/${id}`);
  };

  const handleOffer = (e) => {
    const { name, checked } = e.target;
    let offer = +name;
    if (checked) {
      return axios
        .get("http://localhost:1200/product", {
          params: {
            c: cat,
            discount: offer,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      return axios
        .get("http://localhost:1200/product", {
          params: {
            c: cat,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  };

  const handlePrice = (e) => {
    const { name, checked } = e.target;
    let price = +name;
    if (checked) {
      return axios
        .get("http://localhost:1200/product", {
          params: {
            c: cat,
            mrp: price,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      return axios
        .get("http://localhost:1200/product", {
          params: {
            c: cat,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:1200/product", {
        params: {
          c: category || cat,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [category]);
  console.log(data, cat);
  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <div className="outerDiv">
          <p>DEPARTMENT</p>
          <div className="check">
            <label>
              <input
                className="box"
                name="women"
                onChange={handleDept}
                type="checkbox"
              ></input>
              Women
            </label>
            <br />
            <label>
              <input
                className="box"
                name="men"
                onChange={handleDept}
                type="checkbox"
              ></input>
              Men
            </label>
            <br />
            <label>
              <input
                className="box"
                name="kids"
                onChange={handleDept}
                type="checkbox"
              ></input>
              Kids
            </label>
            <br />
          </div>
          <hr></hr>
        </div>

        <div className="outerDiv">
          <p>OFFERS</p>
          <div className="check">
            <label>
              <input
                className="box"
                name="10"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 10% Off
            </label>
            <br />
            <label>
              <input
                className="box"
                name="20"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 20% Off
            </label>
            <br />
            <label>
              <input
                className="box"
                name="30"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 30% Off
            </label>
            <br />
            <label>
              <input
                className="box"
                name="40"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 40% Off
            </label>
            <br />
            <label>
              <input
                className="box"
                name="50"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 50% Off
            </label>
            <br />
            <label>
              <input
                className="box"
                name="60"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 60% Off
            </label>
          </div>
          <hr></hr>
        </div>

        <div className="outerDiv">
          <p>SIZE</p>
          <div className="check">
            <label>
              <input className="box" type="checkbox"></input>
              Small
            </label>
            <br />
            <label>
              <input className="box" type="checkbox"></input>
              Medium
            </label>
            <br />
            <label>
              <input className="box" type="checkbox"></input>
              Large
            </label>
            <br />
            <label>
              <input className="box" type="checkbox"></input>
              X-Large
            </label>
            <br />
            <label>
              <input className="box" type="checkbox"></input>
              XX-Large
            </label>
          </div>
          <hr></hr>
        </div>
        <div className="outerDiv">
          <p>PRICE</p>
          <div className="check">
            <label>
              <input
                className="box"
                name={500}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 500
            </label>
            <br />
            <label>
              <input
                className="box"
                name={1000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 1000
            </label>
            <br />
            <label>
              <input
                className="box"
                name={2000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 2000
            </label>
            <br />
            <label>
              <input
                className="box"
                name={3000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 3000
            </label>
            <br />
            <label>
              <input
                className="box"
                name={5000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 5000
            </label>
            <br />
            <label>
              <input
                className="box"
                name={10000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 10000
            </label>
          </div>
          <hr></hr>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          marginLeft: "2%",
        }}
      >
        {data.data &&
          data.data.map((el) => (
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
    </div>
  );
}
