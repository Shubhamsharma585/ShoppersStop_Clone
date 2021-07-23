import React, { useState, useEffect } from "react";
import styles from "./Payment.module.css";
import banner from "../../database/covid.webp";
import { Button, Checkbox } from "@material-ui/core";
import payment_banner from "../../database/payment_banner.webp";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DebitCard from "./DebitCard";
import Axios from "axios";
import { PAYMENT_DONE, ADD_ADDRESS } from "../../Redux/Registration/action";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import successImage from "../../database/success.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Payment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  var user_obj = useSelector((state) => state.regi);
  var isloggedIn = useSelector((state) => state.regi.isloggedIn);
  var mobile = useSelector((state) => state.regi.number);
  var email = useSelector((state) => state.regi.email);
  var object_id = useSelector((state) => state.regi.object_id);
  var orders = useSelector((state) => state.regi.orders);

  const [success, setSuccess] = useState(false);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    Axios.get(`https://ss-backend.vercel.app/user/${mobile}`).then((res) => {
      setCart(res.data.data[0].cart);
    });
  }, []);

  const send_order = () => {
    Axios.patch(`https://ss-backend.vercel.app/user/${object_id}`, {
      orders: [...cart, ...orders],
      cart: [],
    }).then((res) => {
      console.log(res.data.data);
      handleOpen();
      dispatch(PAYMENT_DONE(res.data.data));
    });
  };

  var total_payable = 0;
  var total_discount = 0;

  for (var i = 0; i < cart.length; i++) {
    total_payable =
      total_payable +
      (cart[i].quantity * Number(cart[i].mrp) -
        cart[i].quantity *
          Number((cart[i].mrp * (cart[i].discount / 100)).toFixed(0)));
    total_discount =
      total_discount +
      cart[i].quantity *
        Number((cart[i].mrp * (cart[i].discount / 100)).toFixed(0));
  }

  ///for coupon
  const [cou, setCou] = useState("");
  const [dis, setDis] = useState(0);
  const [invalid, setInvalid] = useState("");

  const coupon = () => {
    if (cou == "HAPPY50") {
      setDis(50);
      setInvalid("true");
    } else if (cou == "HAPPY100") {
      setDis(100);
      setInvalid("true");
    } else if (cou == "HAPPY200") {
      setDis(200);
      setInvalid("true");
    } else if (cou == "HAPPY500") {
      setDis(500);
      setInvalid("true");
    } else {
      setInvalid("false");
    }
  };

  ///

  const [delivery, setDelivery] = useState(true);
  const [payment, setPayment] = useState(false);

  const [afn, setAfn] = useState("");
  const [aln, setAln] = useState("");
  const [amobile, setAmobile] = useState("");
  const [apin, setApin] = useState("");
  const [acity, setAcity] = useState("");
  const [astate, setAstate] = useState("");
  const [aline1, setAline1] = useState("");
  const [aline2, setAline2] = useState("");

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [the, setThe] = useState({
    theme1: "active",
    theme2: "inactive",
    theme3: "inactive",
    theme4: "inactive",
    theme5: "inactive",
  });

  const pay = () => {
    setDelivery(false);
    setPayment(true);
    setSuccess(true);
    dispatch(
      ADD_ADDRESS(
        {
          afn: afn,
          aln: aln,
          amobile: amobile,
          apin: apin,
          acity: acity,
          astate: astate,
          aline1: aline1,
          aline2: aline2,
        },
        user_obj
      )
    );
  };

  const change_address = () => {
    setDelivery(true);
    setPayment(false);
  };

  const stylesP = {
    active: {
      backgroundColor: "white",
      width: "250px",
      marginLeft: "0px",
      marginRight: "-20px",
      marginBottom: "-17px",
      height: "70px",
      paddingLeft: "10px",
      borderLeft: "1px green solid",
    },

    inactive: {},
  };

  const activePayment = (i) => {
    if (i === 1) {
      setThe({
        theme1: "active",
        theme2: "inactive",
        theme3: "inactive",
        theme4: "inactive",
        theme5: "inactive",
      });
    } else if (i === 2) {
      setThe({
        theme1: "inactive",
        theme2: "active",
        theme3: "inactive",
        theme4: "inactive",
        theme5: "inactive",
      });
    } else if (i === 3) {
      setThe({
        theme1: "inactive",
        theme2: "inactive",
        theme3: "active",
        theme4: "inactive",
        theme5: "inactive",
      });
    } else if (i === 4) {
      setThe({
        theme1: "inactive",
        theme2: "inactive",
        theme3: "inactive",
        theme4: "active",
        theme5: "inactive",
      });
    } else if (i === 5) {
      setThe({
        theme1: "inactive",
        theme2: "inactive",
        theme3: "inactive",
        theme4: "inactive",
        theme5: "active",
      });
    }
  };

  return !isloggedIn ? (
    <Redirect to={"/"} push />
  ) : (
    <div>
      <div>
        <img src={banner} className={styles.top} />
      </div>

      <div className={styles.main_cont}>
        <div className={styles.left_cont}>
          <div className={styles.left_optionbar}>
            <div className={styles.signedinsymbol} />
            <div className={styles.signin1}>1.SIGN IN</div>
            <div className={styles.email}>{email}</div>
            <div className={styles.changebtn}>
              {" "}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "red",
                  height: "30px",
                }}
              >
                CHANGE
              </Button>{" "}
            </div>
          </div>
          <div className={styles.left_optionbar}>
            {payment && <div className={styles.signedinsymbol2} />}
            {payment && (
              <div className={styles.delivery11}>2.DELIVERY METHOD</div>
            )}
            {!payment && (
              <div className={styles.delivery111}>2.DELIVERY METHOD</div>
            )}
            {payment && (
              <div className={styles.changebtn}>
                {" "}
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "red",
                    height: "30px",
                    float: "right",
                  }}
                  onClick={() => change_address()}
                >
                  CHANGE
                </Button>{" "}
              </div>
            )}
          </div>
          {delivery && (
            <div className={styles.delivery_cont}>
              <div className={styles.addressbarswitch}>
                <div className={styles.addressbarswitch1}>Delivery Address</div>
                <div className={styles.addressbarswitch2}>
                  Express Store Pick Up
                </div>
                <div className={styles.addressbarswitch3}></div>
                <div className={styles.addressbarswitch_new}>
                  {" "}
                  <div className={styles.addressbarswitch_new1} /> NEW{" "}
                </div>
              </div>

              <div className={styles.addressbartop}>
                <p>Add New Address</p>
                <p>
                  <input
                    style={{ width: "190px" }}
                    placeholder="First Name"
                    value={afn}
                    onChange={(e) => setAfn(e.target.value)}
                  />{" "}
                  <input
                    placeholder="Last Name"
                    value={aln}
                    onChange={(e) => setAln(e.target.value)}
                  />{" "}
                </p>
                <p>
                  <input className={styles.address_inp1} value="+91" />{" "}
                  <input
                    className={styles.address_inp11}
                    placeholder="Mobile Number"
                    value={amobile}
                    onChange={(e) => setAmobile(e.target.value)}
                  />{" "}
                </p>
                <p>
                  {" "}
                  <input
                    className={styles.address_inp2}
                    placeholder="Pincode"
                    value={apin}
                    onChange={(e) => setApin(e.target.value)}
                  />{" "}
                </p>
                <p>
                  {" "}
                  <input
                    className={styles.address_inp3}
                    placeholder="City"
                    value={acity}
                    onChange={(e) => setAcity(e.target.value)}
                  />{" "}
                  <input
                    className={styles.address_inp3}
                    placeholder="State"
                    value={astate}
                    onChange={(e) => setAstate(e.target.value)}
                  />{" "}
                </p>
                <p>
                  {" "}
                  <input
                    className={styles.address_inp2}
                    placeholder="Address Line 1"
                    value={aline1}
                    onChange={(e) => setAline1(e.target.value)}
                  />{" "}
                </p>
                <p>
                  {" "}
                  <input
                    className={styles.address_inp2}
                    placeholder="Address Line 2 (Optional)"
                    value={aline2}
                    onChange={(e) => setAline2(e.target.value)}
                  />{" "}
                </p>
                <p className={styles.check_box}>
                  <Checkbox
                    defaultChecked
                    onChange={handleChange}
                    style={{ color: "#c7c7c7" }}
                    size="small"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                  />{" "}
                  Use this as my default delivery address
                </p>
                <p className={styles.check_box}>
                  <Checkbox
                    defaultChecked
                    onChange={handleChange}
                    size="small"
                    style={{ color: "#c7c7c7" }}
                    inputProps={{ "aria-label": "checkbox with primary color" }}
                  />{" "}
                  I agree to the{" "}
                  <span style={{ color: "red", fontWeight: "300" }}>
                    Terms and Conditions
                  </span>
                </p>
              </div>

              <div className={styles.line1} />
              <div className={styles.addressbar}>
                {/* <div className={styles.addnew}>ADD NEW</div> */}
                <div className={styles.addnew}>SAVED ADDRESSES(2)</div>
              </div>

              <div className={styles.line1} />
              <div className={styles.proceeddiv}>
                <div className={styles.proceedto} onClick={() => pay()}>
                  {" "}
                  PROCEED TO PAY
                </div>
              </div>
            </div>
          )}

          {payment ? (
            <div className={styles.left_optionbar}>
              <div className={styles.delivery}>3.MAKE PAYMENT</div>
              <div style={{ marginRight: "30px" }}>
                Payable Amount: Rs <span>{total_payable}</span>
              </div>
            </div>
          ) : (
            <div className={styles.left_optionbar2}>
              <div className={styles.delivery}>3.MAKE PAYMENT</div>
              <div style={{ marginRight: "30px" }}>
                Payable Amount: Rs<span>{total_payable}</span>
              </div>
            </div>
          )}

          {payment && (
            <div className={styles.payment_div}>
              <img src={payment_banner} className={styles.payment_banner} />

              <div className={styles.paymentoptions}>
                <div className={styles.paymentleft}>
                  <div
                    className={styles.tab}
                    onClick={() => activePayment(1)}
                    style={stylesP[the.theme1]}
                  >
                    <div className={styles.giftcard} />
                    <div>
                      <p className={styles.heading1}>
                        GIFT CARD/E-GIFT VOUCHER
                      </p>
                      <p className={styles.heading2}>
                        Redeem Your Gift Vouchers
                      </p>
                    </div>
                  </div>
                  <div className={styles.linep} />
                  <div
                    className={styles.tab}
                    onClick={() => activePayment(2)}
                    style={stylesP[the.theme2]}
                  >
                    <div className={styles.creditcard} />
                    <div>
                      <p className={styles.heading1}>CREDIT CARD</p>
                      <p className={styles.heading2}>
                        Pay Using Your Credit Card
                      </p>
                    </div>
                  </div>
                  <div className={styles.linep} />
                  <div
                    className={styles.tab}
                    onClick={() => activePayment(3)}
                    style={stylesP[the.theme3]}
                  >
                    <div className={styles.debitcard} />
                    <div>
                      <p className={styles.heading1}>DEBIT CARD</p>
                      <p className={styles.heading2}>
                        Pay Using Your Debit Card
                      </p>
                    </div>
                  </div>
                  <div className={styles.linep} />
                  <div
                    className={styles.tab}
                    onClick={() => activePayment(4)}
                    style={stylesP[the.theme4]}
                  >
                    <div className={styles.banking} />
                    <div>
                      <p className={styles.heading1}>NET BANKING</p>
                      <p className={styles.heading2}>Use Your Preffered Bank</p>
                    </div>
                  </div>
                  <div className={styles.linep} />
                  <div
                    className={styles.tab}
                    onClick={() => activePayment(5)}
                    style={stylesP[the.theme5]}
                  >
                    <div className={styles.wallets} />
                    <div>
                      <p className={styles.heading1}>OTHER WALLETS</p>
                      <p className={styles.heading2}>
                        Use Your Preffered Wallet
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.paymentright}>
                  <DebitCard send_order={send_order} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.right_cont}>
          <h4>ORDER SUMMARY</h4>
          <div className={styles.promo}>
            <input
              className={styles.inp}
              placeholder="Enter promo/coupon code"
              type="text"
              value={cou}
              onChange={(e) => setCou(e.target.value)}
            />
            <div className={styles.apply} onClick={coupon}>
              APPLY
            </div>
          </div>
          {invalid == "false" && (
            <p style={{ color: "maroon", margin: "5px 10px -10px -40px" }}>
              coupon code is invalid!
            </p>
          )}
          {invalid == "true" && (
            <p style={{ color: "green", margin: "5px 10px -10px -10px" }}>
              coupon applied Successfully!
            </p>
          )}
          <div className={styles.line} />

          <ul className={styles.uList}>
            <div>
              <div className={styles.label_txt}>Sub total</div>
              <div className={styles.amount_txt}>
                <span>
                  <strong>Rs </strong>
                  {total_payable + total_discount}
                </span>
              </div>
            </div>
            <div>
              <div className={styles.label_txt}>Delivery charges*</div>
              <div className={styles.amount_txt}>FREE</div>
            </div>
            <div>
              <div className={styles.label_txt}>Gift packing</div>
              <div className={styles.amount_txt}>FREE</div>
            </div>

            <div>
              <div className={styles.label_txt}>Offer Discount</div>
              <div className={styles.amount_txt}>{total_discount}</div>
            </div>

            <div>
              <div className={styles.label_txt}>Coupon Discount</div>
              <div className={styles.amount_txt}>{dis}</div>
            </div>
          </ul>

          <div className={styles.line} />

          <div class="shopping-grand-total">
            <ul className={styles.uList}>
              <div>
                <div className={styles.label_txt}>Payable Amount</div>
                <div className={styles.amount_txt}>
                  <strong>
                    <span class="rupee">Rs </span>
                    {total_payable - dis}
                  </strong>
                </div>
              </div>
              <div>
                <div className={styles.label_txt}>You have saved</div>
                <div className={styles.amount_txt}>
                  <strong className={styles.saved}>
                    <span class="rupee">Rs </span> {total_discount + dis}
                  </strong>
                </div>
              </div>
            </ul>
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <img src={successImage} alt="" />
                    <h2
                      id="transition-modal-title"
                      style={{ textAlign: "center" }}
                    >
                      Payment Successful!
                    </h2>
                    {/* <p id="transition-modal-description"></p> */}
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
