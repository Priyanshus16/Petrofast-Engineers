import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";
import { Button } from "@mui/material";
import img1 from "../component/Mlogo/pr13-image1.png"
import img2 from "../component/Mlogo/pr13-image2.png"
import img3 from "../component/Mlogo/pr13-image3.png"
import img4 from "../component/Mlogo/pr13-image4.png"
import img5 from "../component/Mlogo/pr13-image5.png"
import img6 from "../component/Mlogo/pr13-image6.png"



export default function Productrange13(){
    return(
        <>
        {/* header */}
        <Header/>

        {/* imgcomponent */}
        <Imgcomp/>

        <center>
            <div className="product-range">
                <div className="heading1">Product Ranges </div>
                <div className="heading2">Trading Products </div>
                <div className="product-box-container">
                    <div className="product-box">
                        <div className="product-title">Round bars</div>
                        <div className="product-img"><img src={img1} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Stainless Steel Round Bars</div>
                        <div className="product-img"><img src={img2} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Pipes & Tubes</div>
                        <div className="product-img"><img src={img3} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Pipes & Tubes</div>
                        <div className="product-img"><img src={img4} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Flanges</div>
                        <div className="product-img"><img src={img5} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
                        <Button variant="contained" className="enquiry-button" color="error">Enquiry Now</Button>
                    </div>
                    <div className="product-box">
                        <div className="product-title">Gaskets</div>
                        <div className="product-img"><img src={img6} alt="" className="pr-image" width={'100%'} height={'100%'} /></div>
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