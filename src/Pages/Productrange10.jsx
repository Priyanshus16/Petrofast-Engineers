import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img1 from "../component/Mlogo/pr10-image1.png"



export default function Productrange10(){
    return(
        <>
        {/* header */}
        <Header/>

        {/* imgcomponent */}
        <Imgcomp/>

        <center>
            <div className="product-range">
                <div className="heading1">Product Ranges </div>
                <div className="heading2">Lifting Products  </div>
                <div className="product-box-container">
                    <div className="product-box">
                        <div className="product-title">Lifting Products </div>
                        <div className="product-img"><img src={img1} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    
                </div>
            </div>
        </center>

        {/* footer */}
        <Footer/>
        </>
    );
}