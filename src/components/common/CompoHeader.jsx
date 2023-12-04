import React from "react";
import "./CompoHeader.css";

const CompoHeader = ({ name, image }) => {
  
  return (
    <div   className="relative text-center commo-header-img ">
      <img
        className="contactimage h-[440px] w-full"
        src={image}
        alt="Contact Us"
        />
      <div className="links flex justify-between items-center ">
        <a className="hover:text-yellow-400 mx-[15px] transition-all .2s ease-in-out" href="/">
          Home
        </a>
        <h1 className="mx-[15px] transition-all .2s ease-in-out">{name}</h1>
      </div>
      <h1 className="textOnImageStyle">{name}</h1>
    </div>
  );
};

export default CompoHeader;