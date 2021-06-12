import React from "react";
import "./Footer.css";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import CropRotateIcon from "@material-ui/icons/CropRotate";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="appLogos1">
          <div className="appStore">
            <p className="appStore">DOWNLOAD THE APP ON</p>
            <img
              className="appImg"
              alt="logo"
              src="https://heritagefcu.com/wp-content/uploads/2017/04/swync-download-android-ios.png"
            ></img>
          </div>
          <div>
            <img
              className="productImg"
              alt="product"
              src="https://shapure.com/wp-content/uploads/2020/03/genuine.jpg"
            ></img>
            <p>
              Authentic <br /> Product
            </p>
          </div>
          <div className="deliveryIcon">
            <img></img>
            <LocalShippingOutlinedIcon fontSize="large" />
            <p>
              Free <br /> Delivery*
            </p>
          </div>
          <div className="deliveryIcon">
            <img></img>
            <CropRotateIcon fontSize="large" />
            <p>
              Easy Exchange <br /> and Return
            </p>
          </div>
          <div className="deliveryIcon">
            <img></img>
            <TransferWithinAStationIcon fontSize="large" />
            <p>
              Express <br /> Store Pickup
            </p>
          </div>
        </div>

        <div className="appLogos1">
          <div className="appStore">
            <p>
              QUESTIONS? <br />{" "}
              <span style={{ color: "red" }}>
                customercare@shoppersstop.com
              </span>
            </p>
          </div>
          <div className="paySecure">
            <p>PAY SECURE BY</p>
            <img
              className="payIcon"
              src="https://myjewelstory.com/wp-content/uploads/2019/08/v-1.png"
              alt="pay icon"
            />
          </div>

          <div className="paySecure">
            <p>VERIFIED BY</p>
            <img
              className="payIcon"
              src="https://www.irpcommerce.com/IRPSupport/ExtraContent/payment-logos.jpg"
              alt="verify icon"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="main_row flex">
          <div className="fotr_col_2">
            <h3>CUSTOMER</h3>
            <a href="null">
              <td>HELP/FAQ</td>
            </a>
            <br />
            <a href="null">
              <td>TRACK ORDER</td>
            </a>
            <br />
            <a href="null">
              <td>SIZE GUIDE</td>
            </a>
            <br />
            <a href="null">
              <td>BUYING GUIDE</td>
            </a>
            <br />
            <a href="null">
              <td>HOW DO I SHOP?</td>
            </a>
            <br />
            <a href="null">
              <td>HOW DO I PAY?</td>
            </a>
            <br />
            <a href="null">
              <td>FIND PLACES WE DELIVER </td>
            </a>
            <br />
            <a href="null">
              <td>STYLE HUB</td>
            </a>
            <br />
            <br />
          </div>
          <div className="fotr_col_3">
            <h3>POLICIES</h3>
            <a href="null">
              <td>TERMS OF USE</td>
            </a>
            <br />
            <a href="null">
              <td>PRIVACY</td>
            </a>
            <br />
            <a href="null">
              <td>DELIVERY POLICY</td>
            </a>
            <br />
            <a href="null">
              <td>EXCHANGES AND RETURNS</td>
            </a>
            <br />
          </div>
          <div className="fotr_col_3">
            <h3>STORE AND SITES</h3>
            <a href="null">
              <td>ABOUT US</td>
            </a>
            <br />
            <a href="null">
              <td>CONTACT US</td>
            </a>
            <br />
            <a href="null">
              <td>CORPORATE SITE</td>
            </a>
            <br />
            <a href="null">
              <td>STORE LOCATOR</td>
            </a>
            <br />
            <a href="null">
              <td>CAREERS</td>
            </a>
            <br />
            <a href="null">
              <td>SITEMAP</td>
            </a>
            <br />
          </div>
          <div className="fotr_col_4">
            <h3>DELIGHTFUL PROGRAMS</h3>
            <a href="null">
              <td>INSTANT GIFTING</td>
            </a>
            <br />
            <a href="null">
              <td>EXPRESS STORE PICK UP</td>
            </a>
            <br />
          </div>
          <div className="fotr_col_5">
            <h3>FIRST CITIZEN</h3>
            <a href="null">
              <td>FIRST CITIZEN</td>
            </a>
            <br />
          </div>
          <div className="fotr_col_5">
            <h3>REACT US </h3>
            <a href="null">
              <td>FOR ANY QUERY PLEASE CALL US</td>
            </a>
            <br />
            <a href="null">
              <td>customercare@shoppersstop.com</td>
            </a>
            <hr style={{ color: "white" }} />
            <br />
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <a>© 2008 - 2019 SHOPPERS STOP LTD. ALL RIGHTS RESERVED.</a>
        <div style={{ paddingBottom: "30px" }}></div>
      </div>
    </div>
  );
};

export default Footer;
