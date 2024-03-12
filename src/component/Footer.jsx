import React from "react";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };
  const gotoaboutus = () => {
    navigate("/about");
  };
  const gotocontactus = () => {
    navigate("/contactus");
  };
  const gotoenquiry = () => {
    navigate("/enquiry");
  };
  const gotocertificate = () => {
    navigate("/certificate");
  };

  return (
    <>
      <div id="footer">
        {/* <!-- f --> */}
        <footer className="text-center text-lg-start  text-muted">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-3 " />

          {/* </section>  */}
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div
                  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem"></i>Company Info.
                  </h6>
                  <ul className="text-center" style={{textAlign:'center'}}>
                    <li onClick={() => gotohome()}>Home</li>
                    <li onClick={() => gotoaboutus()}>About Us</li>
                    <li onClick={() => gotocertificate()}>
                      Quality Certificates
                    </li>
                    <li>Export Market</li>
                  </ul>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div
                  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Customer Support </h6>
                  <ul>
                    <li onClick={() => gotoenquiry()}>Enquiry Form</li>
                    <li onClick={() => gotocontactus()}>Contact Us</li>
                  </ul>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div
                  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Downloads </h6>
                  <ul>
                    <li>Product Catalogue </li>
                    <li>Fasteners Bolt Standards</li>
                    <li>Fasteners Nut Standards</li>
                  </ul>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div className=" p-4 text-center " style={{ color: "white" }}>
            © Copyright. Petrofast Engineers All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
