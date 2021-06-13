import React from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { TextField } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { firebase, auth } from "../Fireauth/firebase";
import { useSelector, useDispatch } from "react-redux";
import { loggingout } from "../../Redux/Registration/action";
import { getDatas } from "../../Redux/Filters/actions";

export default function NavBar({ handleOpenlogin, handleOpenregi }) {
  const Dispatch = useDispatch();
  var login = useSelector((state) => state.regi.isloggedIn);
  const history = useHistory();
  const [show, handleShow] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const handleSearch = (e) => {
    // console.log(search);
    // if (search == "men" || "women" || "kids") {

    //   history.push(`/product?c=${search}`);
    // } else {
    //   history.push(`/product?name=${search}`);
    // }
    Dispatch(getDatas(category));
    // setCategory("");
    setSearch(true);
    if (search) {
      history.push(`/product?c=${category}`);
    }
  };

  const LogOut = () => {
    auth
      .signOut()
      .then(function () {
        Dispatch(loggingout());
        console.log("User Logged Out!");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

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
      <div className="top1">
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
          <Link to={"/"}>
            <img
              src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/sslogo.svg"
              alt="shopperStop logo"
            />
          </Link>
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
              style={{ width: "350px" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <SearchOutlinedIcon
              fontSize="default"
              color="action"
              style={{ paddingTop: "20px", background: "white" }}
              onClick={handleSearch}
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
            <Link to={"/cart"}>
              <LocalMallOutlinedIcon
                fontSize="default"
                color="action"
                style={{
                  paddingTop: "17px",
                  marginLeft: "20px",
                  background: "white",
                }}
              />
            </Link>
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
                  <span
                    style={{ textDecoration: "none", color: "grey" }}
                    onClick={handleOpenlogin}
                  >
                    SIGN IN
                  </span>
                  {/* <Link to={"/login"} style={{textDecoration:"none"}}> <span style={{textDecoration:"none", color:"grey"}}>SIGN IN</span></Link> */}
                  <hr
                    style={{ marginLeft: "-20px", border: "solid 1px #e0dede" }}
                  />
                </li>
                <li>
                  <span
                    style={{ textDecoration: "none", color: "grey" }}
                    onClick={handleOpenregi}
                  >
                    SIGN UP
                  </span>
                  {/* <Link to={"/registration"} style={{textDecoration:"none"}}> <span style={{textDecoration:"none", color:"grey"}}>SIGN UP</span></Link> */}
                </li>
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
                  <Link to={"/profile"} style={{ textDecoration: "none" }}>
                    PROFILE
                  </Link>
                  <hr
                    style={{
                      marginLeft: "-20px",
                      border: "solid 1px #e0dede",
                    }}
                  />
                </li>
                <li onClick={LogOut}>SIGN OUT</li>
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
