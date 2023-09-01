import React from "react";
import img1 from "../component/Images/Certificate.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Imgcomp from "../component/Imgcomp";

export default function Certificate() {
  return (

    <>
    <Header/>

    <Imgcomp/>
    <center>
      <div className="main-div">
        <div className="main-heading">Quality Certifications</div>
        <div className="main-para">
          We achieved high quality through professional competence, high working
          motivation, and a service-oriented attitude. Every Petrofast Engineers
          employee is accountable for the quality of his or her work.
          <br />
          - All Petrofast Engineers products are tested and approved in
          accordance with international standards or our own more stringent
          internal test procedures developed with the harsh field conditions in
          mind. In addition, we provide specific testing to our clients' needs
          based on the project specifications.
          <br />
          - All fasteners are tested for chemical composition, mechanical
          properties, dimensions, and coating thickness in accordance with
          industry standards.
          <br />
          - All instruments are calibrated in accordance with internal ISO
          procedures.
          <br />
          - NDT testing, such as dye penetrant (DP) testing, is performed on
          fabricated items.
          <br />
          - PMI testing is performed on exotic materials such as duplex steel,
          nickel alloys, and as specified by the client. Stringent in-process
          and final inspection ensures that all products are defect-free.
          <br />
          - Petrofast Engineers is an ISO 9001:2015 certified organisation.
          <br />
        </div>
        <div className="img-title">ISO CERTIFICATION</div>
        <div><img  src={img1} className="img-container"  alt="" /></div> 
      </div>
    </center>
    <Footer/>
    </>
  );
}
