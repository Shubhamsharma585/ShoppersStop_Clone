import React from "react";
import "./NavBar.css";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { TextField } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default function NavBar() {
  const [show, handleShow] = React.useState(false);
  const [login] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="navbar">
      <div className="top">
        <div className="store">
          <div style={{ display: "flex" }}>
            {" "}
            <StoreOutlinedIcon color="action" style={{ paddingTop: "20px" }} />
            <p style={{ width: "120px", color: "#615e5e" }}>
              &nbsp;&nbsp; All Stores
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <PermContactCalendarOutlinedIcon
              color="action"
              style={{ paddingTop: "20px" }}
            />

            <p style={{ width: "120px", color: "#615e5e" }}>
              {" "}
              &nbsp;&nbsp;Contact Us
            </p>
          </div>
          <div
            style={{ display: "flex" }}
            className={`nav ${show && "nav_black"}`}
          >
            <MenuOutlinedIcon color="action" style={{ paddingTop: "20px" }} />
            <p style={{ width: "120px", color: "#615e5e" }}>
              &nbsp;&nbsp;Category
            </p>
          </div>
        </div>
        <div className="logo">
          <img
            src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/sslogo.svg"
            alt="shopperStop logo"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            marginLeft: "40px",
          }}
        >
          <div className="textfield">
            <TextField
              id="standard-basic"
              placeholder="search product & brand"
              style={{ width: "320px" }}
            />
          </div>

          <div>
            <SearchOutlinedIcon
              fontSize="default"
              color="action"
              style={{ paddingTop: "20px", background: "white" }}
            />
          </div>
          <div>
            <FavoriteBorderOutlinedIcon
              fontSize="default"
              color="action"
              style={{
                paddingTop: "17px",
                marginLeft: "20px",
                background: "white",
              }}
            />
          </div>
          <div>
            <LocalMallOutlinedIcon
              fontSize="default"
              color="action"
              style={{
                paddingTop: "17px",
                marginLeft: "20px",
                background: "white",
              }}
            />
          </div>
          <div className="signIn">
            <AccountCircleOutlinedIcon
              fontSize="default"
              color="action"
              style={{
                paddingTop: "17px",
                marginLeft: "20px",
                background: "white",
              }}
            />
            {!login && (
              <div className="signHover">
                <li>
                  SIGN IN
                  <hr
                    style={{ marginLeft: "-20px", border: "solid 1px #e0dede" }}
                  />
                </li>
                <li>SIGN OUT</li>
              </div>
            )}
            {login && (
              <div className="signHover">
                <li>
                  MY ACCOUNT
                  <hr
                    style={{ marginLeft: "-20px", border: "solid 1px #e0dede" }}
                  />
                </li>
                <li>
                  ORDERS{" "}
                  <hr
                    style={{ marginLeft: "-20px", border: "solid 1px #e0dede" }}
                  />
                </li>
                <li>
                  PROFILE
                  <hr
                    style={{
                      marginLeft: "-20px",
                      border: "solid 1px #e0dede",
                    }}
                  />
                </li>
                <li>SIGN OUT</li>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="temp"></div>
      <div className="temp1"></div>
    </div>
  );
}
