import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../component/Mlogo/mainlogo.png";
import { useNavigate } from "react-router";

export default function Header() {
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
  const gotopr1 = () => {
    navigate("/productrange1");
  };
  const gotopr2 = () => {
    navigate("/productrange2");
  };
  const gotopr3 = () => {
    navigate("/productrange3");
  };
  const gotopr4 = () => {
    navigate("/productrange4");
  };
  const gotopr5 = () => {
    navigate("/productrange5");
  };
  const gotopr6 = () => {
    navigate("/productrange6");
  };
  const gotopr7 = () => {
    navigate("/productrange7");
  };
  const gotopr8 = () => {
    navigate("/productrange8");
  };
  const gotopr9 = () => {
    navigate("/productrange9");
  };
  const gotopr10 = () => {
    navigate("/productrange10");
  };
  const gotopr11 = () => {
    navigate("/productrange11");
  };
  const gotopr12 = () => {
    navigate("/productrange13");
  };
  return (
    <>
      <Navbar className="pt-4" expand="lg">
        <Container>
          <Navbar.Brand className="fs-6 fw-normal" href="#home">
            <img src={img} alt="" width={50} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bac />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="mx-3 fs-6 fw-bolder"
                href="#home"
                onClick={() => gotohome()}
                
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="mx-3 fs-6 fw-bolder"
                href="#about"
                onClick={() => gotoaboutus()}
              >
                About
              </Nav.Link>
              <NavDropdown
                title="Product Range "
                className="mx-3 fs-6 fw-bolder"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr1()}
                >
                  Bolts
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr2()}
                >
                  Nuts
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr3()}
                >
                  Washers
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr5()}
                >
                  Foundation /Anchor Bolts
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr6()}
                >
                  Threaded Bolts
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr7()}
                >
                  Threaded Studs
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr8()}
                >
                  T-bolts /Eye Bolts
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr9()}
                >
                  Road Crash Barrier Fasteners
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr10()}
                >
                  Petrochemical/ Pipelines
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr11()}
                >
                  Civil Constructions Fasteners
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ backgroundColor: "#F6E3A7", color: "#B00000" }}
                  onClick={() => gotopr12()}
                >
                  Trading Division
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="mx-3 fs-6 fw-bolder"
                href="#qualitycertificate"
                onClick={() => gotocertificate()}
              >
                Quality Certifications
              </Nav.Link>
              <Nav.Link
                className="mx-3 fs-6 fw-bolder"
                href="#enquiryform"
                onClick={() => gotoenquiry()}
              >
                Enquiry Form
              </Nav.Link>
              <Nav.Link
                className="mx-3 fs-6 fw-bolder"
                href="#contactus"
                onClick={() => gotocontactus()}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
