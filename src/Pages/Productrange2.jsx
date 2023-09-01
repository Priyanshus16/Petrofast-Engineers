import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img from "../component/Mlogo/image4.png";
import img1 from "../component/Mlogo/pr2-image1.png";
import img2 from "../component/Mlogo/pr2-image2.png";
import img3 from "../component/Mlogo/pr2-image3.png";
import img4 from "../component/Mlogo/pr2-image4.png";
import img5 from "../component/Mlogo/pr2-image5.png";
import img6 from "../component/Mlogo/pr2-image6.png";
import img7 from "../component/Mlogo/pr2-image7.png";
import img8 from "../component/Mlogo/pr2-image8.png";

export default function Productrange2() {
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
          <div className="heading2">Hex Nuts & Other </div>
          <div className="product-box-container">
            <div className="product-box">
              <div className="product-title">Hex Nut</div>
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
              <div className="product-title"> Lock Nut</div>
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
              <div className="product-title">Heavy Hex Nuts</div>
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
              <div className="product-title">Square Nut</div>
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
              <div className="product-title">Nylock Nut</div>
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
            <div className="product-box">
              <div className="product-title">Dome Nut</div>
              <div className="product-img">
                <img
                  src={img6}
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
              <div className="product-title">Spring Nuts</div>
              <div className="product-img">
                <img
                  src={img8}
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
