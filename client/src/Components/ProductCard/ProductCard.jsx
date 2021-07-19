import React from "react";

function ProductCard({
  img,
  company,
  description,
  price,
  discount,
  onHandleLink,
  id,
}) {
  return (
    <div
      onClick={() => onHandleLink(id)}
      style={{
        width: "22%",
        height: "430px",
        color: "#686565",
        textAlign: "center",
        border: "1px solid #e6e1e1",
        margin: "1.4%",
        paddingBottom: "10px",
        fontSize: "14px",
        cursor: "pointer",
        // boxShadow:
        //   "0 7px 7px 0 rgba(158, 152, 152, 0.5), 0 2px 5px 0 rgba(192, 189, 189, 0.19)",
      }}
    >
      <img width="100%" height="80%" src={img} alt="item" />
      <b style={{ fontWeight: "bold" }}>{company}</b>
      <br />
      {description} <br />
      <span style={{ color: "black", fontWeight: "bold" }}>
        &#x20b9;{`${price - (price * (discount / 100)).toFixed(0)}`}{" "}
      </span>
      MRP{" "}
      <span style={{ textDecoration: "line-through" }}>&#x20b9;{price} </span>
      <span style={{ color: "red" }}>({discount}% off)</span>
    </div>
  );
}

export default ProductCard;
