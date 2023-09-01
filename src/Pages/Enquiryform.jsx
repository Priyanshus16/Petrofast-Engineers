import React from "react";
import { useState } from "react";
import formimg from "../component/Images/formimg.png"
import Header from "../component/Header";
import Footer from "../component/Footer";
// import { shadows } from "@mui/system";

export default function Enquiryform() {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');
    const [enquiry, setEnquiry] = useState('');


    const validateButton = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            company: company,
            email: email,
            address: address,
            city: city,
            state: state,
            contact: contact,
            country: country,
            enquiry: enquiry,
        };
        console.log(data);
    }

    const handleName = (e) => {
        setName(e.target.value);

    }

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleContact = (e) => {
        setContact(e.target.value);
    }

    const handleCountry = (e) => {
        setCountry(e.target.value);
    }

    const handleEnquiry = (e) => {
        setEnquiry(e.target.value);
    }



    return (
        <>

        <Header/>
            <center>
                <div className="formImg" style={{marginBottom:"20px"}}>
                    <img style={{ width: "90%", height: "absolute", marginTop: "20px" }} src={formimg} alt="" />
                </div>
                <div className="EnquiryForm" style={{ width: "85%", marginBottom:"15px" }}>
                    <h1 style={{ color: "red" }}>Enquiry Form</h1>
                    <h3>Please Fill the Form Below</h3>
                    <form action="" style={{ marginTop: "40px", textAlign: "center" }}>
                        <div className="formMain"></div>
                        <label htmlFor="Name" ><b>Your Name</b></label>
                        <input className="inputarea" type="text" value={name} onChange={handleName} style={{ width: "70%", marginLeft: "80px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Company Name</b></label>
                        <input type="text" className="inputarea" value={company} onChange={handleCompany} style={{ width: "70%", marginLeft: "43px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Email Id</b></label>
                        <input type="email" className="inputarea" value={email} onChange={handleEmail} style={{ width: "70%", marginLeft: "103px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Address</b></label>
                        <input type="text" className="inputarea" value={address} onChange={handleAddress} style={{ width: "70%", marginLeft: "102px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>City</b></label>
                        <input type="text" className="inputarea" value={city} onChange={handleCity} style={{ width: "70%", marginLeft: "132px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>State</b></label>
                        <input type="text" className="inputarea" value={state} onChange={handleState} style={{ width: "70%", marginLeft: "123px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Contact Number</b></label>
                        <input type="tel" className="inputarea" value={contact} onChange={handleContact} style={{ width: "70%", marginLeft: "37px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Country</b></label>
                        <input type="text" className="inputarea" value={country} onChange={handleCountry} style={{ width: "70%", marginLeft: "100px", lineHeight: "2em" }} /><br /><br />

                        <label htmlFor="Name"><b>Enquiry</b></label>
                        <input type="textarea" className="inputarea" value={enquiry} onChange={handleEnquiry} style={{ width: "70%", marginLeft: "103px", lineHeight: "2em", }} /><br /><br />

                        <div className="btn" style={{ textAlign: "center", marginTop: "5px" }}>
                            <button onClick={validateButton} className="submitbtn" style={{ border: "2px", color: "white", width: "300px", height: "40px", fontSize: "20px", background: "#FB3C1B" }}><b>SUBMIT</b></button>
                        </div>


                    </form>
                </div>

            </center>

            <Footer/>
        </>
    )
}