import React from "react";
import img1 from "../component/Mlogo/image1.png";

export default function Imgcomp(){
    return(
        <>
        <center>
            <div className="mainimage">
                <img className="image-top" src={img1} alt=""></img>
            </div>
        </center>
        </>
    );
}