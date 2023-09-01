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
        <footer class="text-center text-lg-start  text-muted">
          {/* <!-- Section: Social media --> */}
          <section class="d-flex justify-content-center justify-content-lg-between p-3 " />

          {/* </section>  */}
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="row mt-3">
                {/* <!-- Grid column --> */}
                <div
                  class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem"></i>Company Info.
                  </h6>
                  <ul class="text-center" style={{textAlign:'center'}}>
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
                  class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">Customer Support </h6>
                  <ul>
                    <li onClick={() => gotoenquiry()}>Enquiry Form</li>
                    <li onClick={() => gotocontactus()}>Contact Us</li>
                  </ul>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div
                  class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">Downloads </h6>
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
          <div class=" p-4 text-center " style={{ color: "white" }}>
            © Copyright. Petrofast Engineers All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
