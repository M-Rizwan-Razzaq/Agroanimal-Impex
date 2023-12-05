import React, { useState } from "react";
import galleryHead from "../../images/gallaryHead.jpg";
import secImg from "../../images/TriasseaIcon.png";
import CompoHeader from "../common/CompoHeader";
import { media } from "./media";
import { IoClose } from "react-icons/io5";
import "./gallery.css";

const Gallery = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <section>
        <CompoHeader name="Gallery" image={galleryHead} />
      </section>
      <section className="mt-20">
        <div className="md:ml-1 lg:ml-2 ">
          <span className="flex justify-center items-center gap-1">
            <img className="w-6" src={secImg} alt="" />
            <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
              Our Media
            </h3>
          </span>
          <h1
            className="form-hedding flex justify-center items-center"
            style={{ fontSize: "50px" }}
          >
            Gallery Section
          </h1>
        </div>
      </section>

      <section className="gallery-container">
        <div className="media-container">
          {media.map((el, index) => (
            <div className="media" key={index} onClick={() => setFile(el)}>
              {el.type === "image" ? (
                <img src={el.url} alt="" />
              ) : (
                <video src={el.url} muted></video>
              )}
            </div>
          ))}
        </div>
        <div
          className="popup-media"
          style={{ display: file ? "block" : "none" }}
        >
          <IoClose className="gallery-closeBtn" onClick={() => setFile(null)} />
          {file?.type === "video" ? (
            <video src={file.url} muted autoPlay controls />
          ) : (
            <img src={file?.url} alt="" />
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
