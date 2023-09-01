import React from "react";
import quoteLogo from "../component/Images/Quote Mark.png";
import "../Pages/style/Home.css";
import storyLogo1 from "../component/Images/Crypto-Learn-Invest-bw-oyl3g9g1y9n29md6xkfxpgebbw87gdfbb0h0u1ci68 2.png";
import storyLogo2 from "../component/Images/Jerry-Piping-bw-oyl3forlrwur6778abi56lm69f24r157w64c9y75z4 2.png";
import storyLogo3 from "../component/Images/LeeveOn-Branding-bw-oyl3fl090kplvrcow9vmwmkbvvknw8qajniecucqo0 2.png";
import homeimg from "../component/Images/homeImg1.png";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      {/* header */}

      <Header />
      <center>
        {/* First Image */}

        <div className="firstImage">
          <img
            style={{ width: "97%", height: "50%", marginTop: "20px" }}
            src={homeimg}
            alt=""
          />
        </div>

        {/* welcome */}

        <div className="welcome" style={{ width: "95%", marginTop: "20px" }}>
          <h1 style={{ color: "#b00000" }}>Welcome to Petrofast Engineers</h1>
          <p style={{ textAlign: "justify", textJustify: "inter-word", fontSize:"19px" }}>
            Petrofast Engineers serves the nation by producing highly reliable
            high tensile fasteners. Fasteners ranging from anchor bolts, hex
            nuts and hex bolts, washers, screws, thread bars, eye bolts, t
            bolts, and stainless steel structural materials are available.
            <br />
            <br />
            Petrofast Engineers believe that infrastructure plays a critical
            role in ensuring a company's growth and success. As a result, we
            have developed a large and capaciously built infrastructure facility
            at our end that is equipped with modern machines and equipment
            needed to meet our clients' requirements on time.
          </p>
        </div>

        {/* distinguish feature */}

        <div className="feature" style={{ width: "95%" }}>
          <h2 style={{ color: "#b00000" }}>Our Distinguish Feature</h2>

          <div
            className="featurebox"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="featureComp1" style={{ width: "300px" }}>
              <h4>Variety of Products Range</h4>
              <p style={{ textAlign: "justify", textJustify: "inter-word",fontSize:"18px" }}>
                Petrofast Engineers manufactures high tensile fasteners for the
                civil construction, petroleum chemical, power and energy
                sectors, gas and pipeline industries, railway fasteners,
                telecommunications, automotive, and automobile industries.
              </p>
            </div>

            <div className="featureComp2" style={{ width: "300px" }}>
              <h4>Quality Testing</h4>
              <p style={{ textAlign: "justify", textJustify: "inter-word",fontSize:"18px" }}>
                As part of our infrastructure, Petrofast Engineers has an
                in-house testing unit. This testing unit was installed to ensure
                that the products are manufactured precisely in accordance with
                industrial standards. It has all of the necessary gadgets,
                tools, and instruments.
              </p>
            </div>

            <div className="featureComp3" style={{ width: "300px" }}>
              <h4>Materials and Coatings</h4>
              <p style={{ textAlign: "justify", textJustify: "inter-word", fontSize:"18px" }}>
                Petrofast Engineers can produce steel grades 4, 5, 6, 8, 10, 12,
                2H, 8S, 10S, and International Standards such as DIN, IS, ISO,
                ANSI, BS, ASTM, ASME, JIS, EN, and others. Our fastener products
                are available in a variety of finishes such as black, zinc
                passivation, powder coating, and hot dip galvanized, among
                others.
              </p>
            </div>
          </div>
        </div>

        {/* Product gallery */}

        {/* <div className="gallery">
          <h2 style={{ color: "#b00000" }}>Product Gallery</h2>
        </div> */}

        {/* Stories */}

        {/* <div className="stories">
          <div className="headingMain" style={{ display: "flex" }}>
            <img
              className="quoteImg"
              style={{ marginLeft: "100px", width: "8%", height: "6%" }}
              src={quoteLogo}
              alt=""
            />
            <h1
              className="storiesHeading"
              style={{ textAlign: "left", marginLeft: "30px" }}
            >
              Real Stories From <br /> Real Customers
            </h1>
          </div>
          <p
            className="inspiredPara"
            style={{ textAlign: "left", marginLeft: "230px" }}
          >
            <em>Get Inspired by these stories</em>
          </p>

          <div className="storiesMainBox">
            <div className="storiessubbox1">
              <div className="storiesBox1">
                <img src={storyLogo1} alt="" />
                <p
                  style={{
                    width: "80%",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <em>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum iste ut nemo laboriosam iure minima ex ullam
                    doloribus. Magni illum repellat nisi suscipit totam alias
                    nobis corporis Consequatur facilis quas impedit, obcaecati
                    minus voluptate ex enim ipsum
                  </em>
                  <br />
                  <h5>
                    Floyd Miles <br /> Vice President, CLI
                  </h5>
                </p>
              </div>
            </div> */}

            {/* <div className="storiesubbox">
              <div className="storiesBox2">
                <img src={storyLogo2} style={{ marginTop: "10px" }} alt="" />
                <p
                  style={{
                    width: "80%",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <em>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum iste ut nemo laboriosam iure minima ex ullam
                    doloribus. Magni illum repellat nisi suscipit totam alias
                    nobis corporis maxime quidem aperiam! Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Consequatur facilis quas
                    impedit,{" "}
                  </em>
                  <br />
                  <h5>
                    Jane Cooper <br />
                    CEO, JPNL
                  </h5>
                </p>
              </div> */}

              {/* <div className="storiesBox3">
                <img src={storyLogo3} alt="" />
                <p
                  style={{
                    width: "80%",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <em>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum iste ut nemo laboriosam iure minima ex ullam
                    doloribus. Magni illum repellat nisi suscipit totam alias
                    nobis corporis maxime quidem aperiam! illum consequuntur
                    voluptate ex enim ipsum
                  </em>
                  <br />
                  <h5>
                    Kristin Watson <br /> Co-Founder LeeveOn Branding
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </center>

      {/* footer */}
      <Footer />
    </>
  );
}
