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
        width: "21%",
        height: "68vh",
        color: "#686565",
        textAlign: "center",
        border: "2px solid #e6e1e1",
        margin: "1.4%",
        paddingBottom: "10px",
      }}
    >
      <img width="100%" src={img} alt="item" />
      <b>{company}</b>
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
