import React from "react";
import "./NavbarList.css";

export default function NavbarList() {
  return (
    <div>
      <div className="list">
        <div className="barg">BARGAINS</div>
        <div className="barg1">
          <div className="barg2">
            <p>Women</p>
            <li className="drop_one">
              <span>JOBS</span>
              <div className="menu_experiment">
                <div className="menu_one">
                  <ul>
                    <li>Search jobs</li>
                    <li>Advance searches</li>
                    <li>Create free job alert</li>
                    <li>Register now</li>
                  </ul>
                  <ul>
                    <li>Job by location</li>
                    <li>Job by location</li>
                    <li>Job by location</li>
                    <li>Job by location</li>
                    <li>Job by location</li>
                    <li>Job by location</li>
                    <li>Job by location</li>
                  </ul>
                </div>
              </div>
            </li>
            <p>Men</p>
            <p>Kids</p>
            <p>Beauty</p>
            <p>Home Offers</p>
            <p>Other Offer</p>
            <p>All Offer Product</p>
          </div>
        </div>
        <div>WOMEN</div>
        <div>KIDS</div>
        <div>BEAUTY</div>
        <div>MEN</div>
        <div>HOMESTOP</div>
        <div>CROSSWORD</div>
        <div>BRAND</div>
        <div>GIFTS</div>
        <div>DISCOVER</div>
      </div>
    </div>
  );
}
