import React from "react";
import "./CompoHeader.css";

const CompoHeader = ({ name, image }) => {
  const imageStyle = {
    width: "100%",
  };

  const containerStyle = {
    position: "relative",
    textAlign: "center",
    color: "rgb(201, 236, 236)",
  };

  const linkStyle = {
    margin: "0 15px",
    transition: "all 0.2s ease-in-out",
    // marginTop: "9%", // Adjust the margin as needed
  };

  return (
    <div style={containerStyle} className="">
      <img
        className="contactimage h-[440px]"
        src={image}
        alt="Contact Us"
        style={imageStyle}
      />
      <div className="links flex justify-between items-center ">
        <a className="hover:text-yellow-400" style={linkStyle} href="/">
          Home
        </a>
        <h1 style={linkStyle}>{name}</h1>
      </div>
      <h1 className="textOnImageStyle">{name}</h1>
    </div>
  );
};

export default CompoHeader;
