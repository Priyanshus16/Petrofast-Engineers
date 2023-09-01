import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img1 from "../component/Mlogo/pr9-image1.png"
import img2 from "../component/Mlogo/pr9-image2.png"
import img3 from "../component/Mlogo/pr9-image3.png"


export default function Productrange9(){
    return(
        <>
        {/* header */}
        <Header/>

        {/* imgcomponent */}
        <Imgcomp/>

        <center>
            <div className="product-range">
                <div className="heading1">Product Ranges </div>
                <div className="heading2">Civil Constructions Fasteners </div>
                <div className="product-box-container">
                    <div className="product-box">
                        <div className="product-title">Anchor - Foundation Bolt</div>
                        <div className="product-img"><img src={img1} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Anchor - Foundation Bolt</div>
                        <div className="product-img"><img src={img2} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Steel Structure Bolts Nuts</div>
                        <div className="product-img"><img src={img3} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
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