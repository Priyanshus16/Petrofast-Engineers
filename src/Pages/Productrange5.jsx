import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img4 from "../component/Mlogo/pr5-image4.png"
import img5 from "../component/Mlogo/pr5-image5.png"


export default function Productrange5(){
    return(
        <>
        {/* header */}
        <Header/>

        {/* imgcomponent */}
        <Imgcomp/>

        <center>
            <div className="product-range">
                <div className="heading1">Product Ranges </div>
                <div className="heading2">Threaded  Rods & Bars </div>
                <div className="product-box-container">
                    <div className="product-box">
                        <div className="product-title">Threaded Rods / Bars</div>
                        <div className="product-img"><img src={img4} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Threaded Rods / Bars</div>
                        <div className="product-img"><img src={img5} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
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