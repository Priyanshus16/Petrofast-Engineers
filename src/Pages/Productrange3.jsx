import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Button } from "@mui/material";
import img from "../component/Mlogo/image5.png";
import img1 from "../component/Mlogo/pr3-image1.png";
import img2 from "../component/Mlogo/pr3-image2.png";
import img3 from "../component/Mlogo/pr3-image3.png";
import img4 from "../component/Mlogo/pr3-image4.png";
import img5 from "../component/Mlogo/pr3-image5.png";

export default function Productrange3() {
  return (
    <>
      {/* header */}
      <Header />

      <center>
        <div className="mainimage">
          <img className="image-top" src={img} alt=""></img>
        </div>
        <div className="product-range">
          <div className="heading1">Product Ranges </div>
          <div className="heading2">Plain /Flat/Spring Washers</div>
          <div className="product-box-container">
            <div className="product-box">
              <div className="product-title">Taper Washer </div>
              <div className="product-img">
                <img
                  src={img1}
                  alt=""
                  className="pr-image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <Button
                variant="contained"
                className="enquiry-button"
                color="error"
              >
                Enquiry Now
              </Button>
            </div>
            <div className="product-box">
              <div className="product-title">Plain Washer</div>
              <div className="product-img">
                <img
                  src={img2}
                  alt=""
                  className="pr-image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <Button
                variant="contained"
                className="enquiry-button"
                color="error"
              >
                Enquiry Now
              </Button>
            </div>
            <div className="product-box">
              <div className="product-title">Square Washer / Plate Washer</div>
              <div className="product-img">
                <img
                  src={img3}
                  alt=""
                  className="pr-image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <Button
                variant="contained"
                className="enquiry-button"
                color="error"
              >
                Enquiry Now
              </Button>
            </div>
            <div className="product-box">
              <div className="product-title">Spring Washer</div>
              <div className="product-img">
                <img
                  src={img4}
                  alt=""
                  className="pr-image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <Button
                variant="contained"
                className="enquiry-button"
                color="error"
              >
                Enquiry Now
              </Button>
            </div>
            <div className="product-box">
              <div className="product-title">Fender (3D) Washer</div>
              <div className="product-img">
                <img
                  src={img5}
                  alt=""
                  className="pr-image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <Button
                variant="contained"
                className="enquiry-button"
                color="error"
              >
                Enquiry Now
              </Button>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}
      <Footer />
    </>
  );
}
