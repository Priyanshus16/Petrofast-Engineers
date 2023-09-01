import React from "react";
import Header from "../component/Header";
import Imgcomp from "../component/Imgcomp";
import Footer from "../component/Footer";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import img1 from "../component/Mlogo/image7.png";

export default function Contactus() {
  return (
    <>
      {/* header */}
      <Header />

      <center>
        <div className="mainimage">
          <img className="image-top" src={img1} alt=""></img>
        </div>
        <div className="contactus-content">
          <div className="contactus-heading">CONTACT US</div>
          <div className="contactus-box-container">
            <div className="contactus-box">
              <FmdGoodOutlinedIcon
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Address 1</div>
              <div className="contactus-info">
                Shop No.C11, Six Wishes , Dyaneshwar Nagar, Jijamata Chauk,
                
                Talegaon Dabhade-410506
              </div>
            </div>
            <div className="contactus-box">
              <LocalPhoneOutlinedIcon
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Phone Number</div>
              <div className="contactus-info2">+91 8080884705</div>
            </div>
            <div className="contactus-box">
              <EmailOutlinedIcon
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Email Id</div>
              <div className="contactus-info2">petrofastengineers@gmail.com</div>
            </div>
          </div>
          <div className="contactus-box-container">
            <div className="contactus-box">
              <FmdGoodOutlinedIcon className="contactus-box-icon"
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Address 2</div>
              <div className="contactus-info">
                13., Unique Industrial Estate, Behind Agrwal Hospital, Village,
                Waliv,
                 Vasai(E),Thane-401208
              </div>
            </div>
            <div className="contactus-box">
              <LocalPhoneOutlinedIcon
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Phone Number</div>
              <div className="contactus-info2">
                +91 9960646524 <br/>+91 8080870443
              </div>
            </div>
            <div className="contactus-box">
              <EmailOutlinedIcon
                htmlColor="#B00000"
                style={{
                  width: "80px",
                  height: "80px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              />
              <div className="contactus-title">Email Id</div>
              <div className="contactus-info2">petrofastengineers@gmail.com</div>
            </div>
          </div>
        </div>
      </center>

      {/* footer */}
      <Footer />
    </>
  );
}
