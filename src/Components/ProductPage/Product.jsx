import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
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
  // const reduxCategory = reduxCat.data.category;
  console.log(reduxCat);
  const dispatch = useDispatch();
  const history = useHistory();
  var productName = urlSearchParams.get("name");
  // const ProductCategory = useParams().c;
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var cat = urlSearchParams.get("c");

  // console.log(category);
  const handleDept = (e) => {
    const { name, checked } = e.target;
    setCategory(name);
    if (checked) {
      dispatch(getDatasByDept(name));
    } else {
      dispatch(getDatasByDept(cat));
    }
  };

  const onHandleLink = (id) => {
    history.push(`/product/${id}`);
  };

  const handleOffer = (e) => {
    const { name, checked } = e.target;
    let offer = +name;
    if (checked) {
      dispatch(getDatasByOffer(category || cat, offer));
    } else {
      dispatch(getDatasByOffer(cat));
    }
  };

  const handlePrice = (e) => {
    const { name, checked } = e.target;
    let price = +name;
    if (checked) {
      dispatch(getDatasByPrice(category || cat, price));
    } else {
      dispatch(getDatasByPrice(cat));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:1200/product", {
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
  //     .get("http://localhost:1200/product", {
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
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <div className="outerDiv22">
          <p>DEPARTMENT</p>
          <div className="check22">
            <label>
              <input
                className="box22"
                name="women"
                onChange={handleDept}
                type="checkbox"
              ></input>
              Women
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="men"
                onChange={handleDept}
                type="checkbox"
              ></input>
              Men
            </label>
            <br />
            <label>
              <input
                className="box22"
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

        <div className="outerDiv22">
          <p>OFFERS</p>
          <div className="check22">
            <label>
              <input
                className="box22"
                name="10"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 10% Off
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="20"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 20% Off
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="30"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 30% Off
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="40"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 40% Off
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="50"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 50% Off
            </label>
            <br />
            <label>
              <input
                className="box22"
                name="60"
                onChange={handleOffer}
                type="checkbox"
              ></input>
              Flat 60% Off
            </label>
          </div>
          <hr></hr>
        </div>

        <div className="outerDiv22">
          <p>SIZE</p>
          <div className="check22">
            <label>
              <input className="box22" type="checkbox"></input>
              Small
            </label>
            <br />
            <label>
              <input className="box22" type="checkbox"></input>
              Medium
            </label>
            <br />
            <label>
              <input className="box22" type="checkbox"></input>
              Large
            </label>
            <br />
            <label>
              <input className="box22" type="checkbox"></input>
              X-Large
            </label>
            <br />
            <label>
              <input className="box22" type="checkbox"></input>
              XX-Large
            </label>
          </div>
          <hr></hr>
        </div>
        <div className="outerDiv22">
          <p>PRICE</p>
          <div className="check22">
            <label>
              <input
                className="box22"
                name={500}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 500
            </label>
            <br />
            <label>
              <input
                className="box22"
                name={1000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 1000
            </label>
            <br />
            <label>
              <input
                className="box22"
                name={2000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 2000
            </label>
            <br />
            <label>
              <input
                className="box22"
                name={3000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 3000
            </label>
            <br />
            <label>
              <input
                className="box22"
                name={5000}
                onChange={handlePrice}
                type="checkbox"
              ></input>
              Less Than 5000
            </label>
            <br />
            <label>
              <input
                className="box22"
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
      {loading ? (
        <div style={{ width: "100%" }}>
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
