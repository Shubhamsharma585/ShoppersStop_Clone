import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Link to={"/"}>
        <img
          style={{ width: "100%", height: "600px" }}
          src="https://zakro.ge/media/uploads/CodePen-404-Page_ZqTL5Si.gif"
          alt="Error"
        />
      </Link>
    </div>
  );
}
