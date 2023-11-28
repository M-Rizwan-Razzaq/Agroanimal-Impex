import React from "react";

const CompoHeader = ({ name, image }) => {
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
  const containerStyle = {
    position: "relative",
    textAlign: "center",
    color: "rgb(201, 236, 236)",
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
    width: "100%",
  };

  const linkStyle = {
    margin: "0 15px",
    transition: "all 0.2s ease-in-out",
    // marginTop: "9%", // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <img
        className="contactimage h-[400px]"
        src={image}
        alt="Contact Us"
        style={imageStyle}
      />
      <div className="flex justify-between items-center " style={links}>
        <a className="hover:text-yellow-400" style={linkStyle} href="/">
          Home
        </a>
        <h1 style={linkStyle}>{name}</h1>
      </div>
      <h1 style={textOnImageStyle}>{name}</h1>
    </div>
  );
};

export default CompoHeader;
