import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import img from "../component/Mlogo/image2.png";

export default function Aboutus() {
  return (
    <>
      {/* header */}
      <Header />
      <center>
        <div className="mainimage">
          <img className="image-top" src={img} alt=""></img>
        </div>
        <div className="main-div">
          <div className="main-heading">Welcome to Petrofast Engineers</div>
          <div className="main-para">
            Petrofast Engineers is the leading manufacturer of fasteners and
            suppliers ideally located in Hamriyah Free zone Phase 2 in U.A.E
            with 5000 sq. m area for manufacturing and stocking of fasteners.
            Petrofast Middle East FZC is a Team of professional who are
            specialists in Fastener manufacturing and supplies manages Petrofast
            ME.
          </div>
          <div className="sub-heading">MANUFACTURING FACILITIES</div>
          <div className="sub-para">
            Full support equipment like metal cutting, roll threading, cut
            threading, drilling, bending, pressing, tapping, welding,
            galvanizing and coating is available. This setup will serve our
            clientele around the region meeting the delivery time expectations.
            <br />
            We manufacture series of fasteners to BS , DIN , ASTM, ASME, ANSI
            etc in Carbon steel, Stainless steel and other exotic steel
            materials.
          </div>
          <div className="sub-heading">ISO CERTIFICATION</div>
          <div className="sub-para">
            Petrofast Engineers is ISO 9001 : 2015 certified company and is
            dedicated to providing quality products and excellent customer
            service.- <br />
            Our firm subtains a quality assurance program which covers our
            purchased products as well as those items which we make or process.
          </div>
          <div className="sub-heading">OUR COMMITMENT</div>
          <div className="sub-para">
            Petrofast Engineers is committed to invest in improving the
            manufacturing technology, invest in hi-tech equipment and train
            manpower periodically and effectively which are necessary to meet
            the quality objectives and customer satisfaction.
          </div>
          <div className="sub-heading">TEAM SPIRIT AND ETHICS</div>
          <div className="sub-para">
            Petrofast Engineers encourages team work. This helps to integrate
            staff within the company for Continuous improvement. Petrofast ME
            operates in a highly ethical manner toward customers, suppliers, and
            employees alike, fulfilling work commitments and faithfully
            respecting the values of the team spirit.We have a highly motivated
            staff who are determined to make doing business with PFME a pleasant
            experience. Please give us a try the next time you need bolts, nuts,
            screws, washers. We would love to have the opportunity to show you
            how we can take care of your needs.
          </div>
        </div>
      </center>

      <Footer />
    </>
  );
}
