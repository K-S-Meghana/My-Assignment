import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import "./ShoppingList.css";
import { Button } from "@material-ui/core";

export default function DeliverOperation(props) {
  const [pincode, setPinCode] = useState("");
  const [pindata, setData] = useState({
    isFree: false,
    cashDelivery: false,
    estimate: {},
  });
  const { prodList, data, subTot } = props;
  let discountPrice =
    Number(subTot) * (Number(data.discount.discountPercentage) / 100);
  const checkImage = (
    <img src={require("../../static/icon/check.png").default} alt="check" />
  );
  const handleCheckout = () => {
    for (let i in data.pincode) {
      if (i === pincode) {
        setData({
          isFree: data.pincode[i].deliveryPrice <= 0,
          cashDelivery: data.pincode[i].cashOnDelivery,
          estimate: data.pincode[i].estimatedDays,
        });
      }
      }
  };
  return (
    <>
      <div className="availability">
        <h4>Deliver Availability</h4>
        <TextField
          id="input-with-icon-textfield"
          type="number"
          value={pincode}
          onChange={(e) => setPinCode(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <div className="deliver-options">
          {pindata.isFree && <span>{checkImage} &nbsp;Free Delivery</span>}
          {pindata.cashDelivery && <span>{checkImage} &nbsp;Cash on Delivery</span>}
          {JSON.stringify(pindata.estimate) !== '{}' && <span>{checkImage} &nbsp;Estimated Delivery Time is {pindata.estimate?.min}- {pindata.estimate?.max} days.</span>}
        </div>
      </div>
      <div className="order-delivery">
        <h4>Order Summary ({prodList.length} items)</h4>
        <div style={{ margin: "15px" }}>
          <span className="field-label">Subtotal</span>
          <span style={{ textAlign: "right" }}>{subTot + "$"}</span>
        </div>
        <div style={{ margin: "15px" }}>
          <span className="field-label">Total Discount</span>
          {subTot >= data.discount.minTotal ? (
            <span style={{ textAlign: "right" }}>{-discountPrice + "$"}</span>
          ) : (
            0
          )}
        </div>
        <div style={{ margin: "15px" }}>
          <span className="field-label">Standard Shipping</span>
          <span style={{ textAlign: "right" }}>Free</span>
        </div>
        <div style={{ margin: "15px" }}>
          <h4 className="field-label">Order Total</h4>
          <h3 style={{ textAlign: "right", display: "inline-block" }}>
            {subTot - discountPrice + " $"}
          </h3>
        </div>
        <div>
          <h4 className="shopping field-label">Continue Shopping</h4>
          <Button
            style={{ backgroundColor: "#0f0442", color: "#fff" }}
            onClick={() => handleCheckout()}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}
