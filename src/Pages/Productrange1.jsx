import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img from "../component/Mlogo/image3.png";
import img1 from "../component/Mlogo/pr-image1.png";
import img2 from "../component/Mlogo/pr-image2.png";
import img3 from "../component/Mlogo/pr-image3.png";
import img4 from "../component/Mlogo/pr-image4.png";
import img5 from "../component/Mlogo/pr-image5.png";
import img6 from "../component/Mlogo/pr-image6.png";
import img7 from "../component/Mlogo/pr-image7.png";
import img8 from "../component/Mlogo/pr-image8.png";
import img9 from "../component/Mlogo/pr-image9.png";
import img10 from "../component/Mlogo/pr-image10.png";
import img11 from "../component/Mlogo/pr-image11.png";

export default function Productrange1() {
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
          <div className="heading2">Hex Bolts & Other </div>
          <div className="product-box-container">
            <div className="product-box">
              <div className="product-title">Half Threaded Bolts</div>
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
              <div className="product-title">Full Threaded Bolts</div>
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
              <div className="product-title">Allen Bolt</div>
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
              <div className="product-title">Coated bolts</div>
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
              <div className="product-title">Stainless Steel Bolts</div>
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
              <div className="product-title">Anchor bolts</div>
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
              <div className="product-title">Foundation bolts</div>
              <div className="product-img">
                <img
                  src={img7}
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
              <div className="product-title">Eye Bolts</div>
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
            <div className="product-box">
              <div className="product-title">J Type Foundations bolts</div>
              <div className="product-img">
                <img
                  src={img9}
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
              <div className="product-title">U Foundations Bolts</div>
              <div className="product-img">
                <img
                  src={img10}
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
              <div className="product-title">L Type Foundations Bolts</div>
              <div className="product-img">
                <img
                  src={img11}
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
