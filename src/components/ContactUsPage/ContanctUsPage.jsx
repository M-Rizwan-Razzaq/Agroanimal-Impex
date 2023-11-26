import React from "react";
import contactUsImage from "../../images/contactus1.jpg"; // Adjust the path to your image
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import "./ContactUsPage.css";

const ContactUsPage = () => {
  const containerStyle = {
    position: "relative",
    textAlign: "center",
    color: "rgb(201, 236, 236)",
  };

  const imageStyle = {
    width: "100%",
  };

  const textOnImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "70px",
    // fontStyle: "bold",
    lineHeight: "0.02rem",
    marginTop: "0.8rem",
  };

  const links = {
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "23px",
    fontFamily: "cursive",
    display: "flex",
    justifyContent: "center",
    width: "100%", // Ensure the links take up the full width
  };

  const linkStyle = {
    margin: "0 15px",
    transition: "all 0.2s ease-in-out",
    // marginTop: "9%", // Adjust the margin as needed
  };

  return (
    <div>
      <div className="something mt-[4.9%]" style={containerStyle}>
        <img
          className="contactimage h-[400px]"
          src={contactUsImage}
          alt="Contact Us"
          style={imageStyle}
        />
        <div className="flex justify-between items-center " style={links}>
          <a className="hover:text-yellow-400" style={linkStyle} href="/">
            Home
          </a>
          <h1 style={linkStyle}>Contact</h1>
        </div>
        <h1 style={textOnImageStyle}>Contact</h1>
      </div>
      <div className="main-box grid grid-cols-3 mt-[6%] mb-[6%] gap-4 ml-3 mr-3">
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <IoLocationOutline
              className="text-yellow-400"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 gap-10 justify-center items-center">
            <p>Our Location</p>
            <h1>2nd Block Melbourne</h1>
          </div>
        </div>
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <MdOutlinePhoneInTalk
              className="text-red-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div
            className="contact grid grid-cols-1 gap-10 justify-center items-center"
            style={{}}
          >
            <p>Hotline</p>
            <h1>+000 (123) 456 88</h1>
          </div>
        </div>
        <div
          className="idenity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(202, 229, 247)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <MdOutlineMailOutline
              className="text-pink-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 gap-10 justify-center items-center">
            <p>Email Address</p>
            <h1>support@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
