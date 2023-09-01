import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img1 from "../component/Mlogo/pr8-image1.png"
import img2 from "../component/Mlogo/pr8-image2.png"


export default function Productrange8(){
    return(
        <>
        {/* header */}
        <Header/>

        {/* imgcomponent */}
        <Imgcomp/>

        <center>
            <div className="product-range">
                <div className="heading1">Product Ranges </div>
                <div className="heading2">Petrochemicals / Pipelines</div>
                <div className="product-box-container">
                    <div className="product-box">
                        <div className="product-title">Pipeline Fasteners</div>
                        <div className="product-img"><img src={img1} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Pipeline Fasteners</div>
                        <div className="product-img"><img src={img2} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
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