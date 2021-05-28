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
            <p style={{ width: "120px" }}>&nbsp;&nbsp; All Stores</p>
          </div>
          <div style={{ display: "flex" }}>
            <PermContactCalendarOutlinedIcon
              color="action"
              style={{ paddingTop: "20px" }}
            />

            <p style={{ width: "120px" }}> &nbsp;&nbsp;Contact Us</p>
          </div>
          <div
            style={{ display: "flex" }}
            className={`nav ${show && "nav_black"}`}
          >
            <MenuOutlinedIcon color="action" style={{ paddingTop: "20px" }} />
            <p style={{ width: "120px" }}>&nbsp;&nbsp;Category</p>
          </div>
        </div>
        <div className="logo">
          <img
            src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/sslogo.svg"
            alt="shopperStop logo"
          />
        </div>
        <div className="textfield">
          <TextField
            id="standard-basic"
            placeholder="search product & brand"
            style={{ width: "350px" }}
          />
        </div>
        <div>
          <SearchOutlinedIcon
            fontSize="large"
            color="action"
            style={{ paddingTop: "20px" }}
          />
        </div>
        <div>
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            color="action"
            style={{ paddingTop: "17px", marginLeft: "20px" }}
          />
        </div>
        <div>
          <LocalMallOutlinedIcon
            fontSize="large"
            color="action"
            style={{ paddingTop: "17px", marginLeft: "20px" }}
          />
        </div>
        <div>
          <AccountCircleOutlinedIcon
            fontSize="large"
            color="action"
            style={{ paddingTop: "17px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}
