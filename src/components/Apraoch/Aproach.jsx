import React from "react";
import "./apraoch.css";
import data from "./aproachData";
import CompoHeader from "../common/CompoHeader";
import approachTop from "../../images/ServiceTop3.jpg";
import secImg from "../../images/TriasseaIcon.png";
import centerImage from "../../images/centercircle.png";
import vidimg from "../../images/vidImg.jpg";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import YouTube from "react-youtube";

const DottedCircle = ({ children }) => {
  return <div className="dotted-circle">{children}</div>;
};

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`circle-image ${className}`} />;
};

const TextContainer = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl">{title}</h1>
      <p className="my-3 text-gray-400">{description}</p>
    </div>
  );
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
  lineHeight: "6rem",
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

const Aproach = () => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
  };

  const videoOpts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <section>
        <CompoHeader name="Aproach" image={approachTop} />
      </section>

      <section className="mt-40">
        <div style={containerStyle}>
          <img
            className="contactimage h-[800px]"
            src={vidimg}
            alt="Contact Us"
            style={imageStyle}
          />
          <div className="flex justify-between items-center " style={links}>
            <FaCanadianMapleLeaf className="mb-10 text-7xl text-green-200" />
          </div>
          <h1 className="font-bold text-green-200" style={textOnImageStyle}>
            Agriculture & Eco Farming
          </h1>
          <button
            className="absolute bottom-[25%] left-[48%] hover:text-green-500"
            onClick={playVideo}
          >
            <FaPlayCircle className="mt-10 text-7xl" />
          </button>

          {isVideoPlaying && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"
                onClick={stopVideo}
              />
              <YouTube
                videoId="FHpdGfjU0yU" // Replace with your YouTube video ID
                opts={videoOpts}
                className="z-10"
              />
            </div>
          )}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 md:ml-1 lg:ml-2 ">
          <span className="flex justify-center items-center gap-1">
            <img className="w-6" src={secImg} alt="" />
            <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
              Work Process
            </h3>
          </span>
          <h1
            className="form-hedding flex justify-center items-center"
            style={{ fontSize: "50px" }}
          >
            The Agriculture Process
          </h1>
        </div>

        <div className="w-full my-10 flex justify-center items-center h-[100vh]">
          <DottedCircle>
            <img
              src={centerImage}
              className="approach-centerImage w-[430px] h-[300px]"
              alt=""
            />
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <TextContainer
                  className={`text-container${index + 1} w-[200px]`}
                  title={item.title}
                  description={item.description}
                />
                <Image
                  className={`img-${index % 2 === 0 ? "top" : "bottom"}${
                    index < 2 ? "Left" : "Right"
                  }`}
                  src={item.imageSrc}
                  alt={`Image ${index + 1}`}
                />
              </React.Fragment>
            ))}
          </DottedCircle>
        </div>
      </section>
    </div>
  );
};

export default Aproach;
