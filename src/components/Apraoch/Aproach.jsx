import React from "react";
import "./apraoch.css";
import data from "./aproachData";
import CompoHeader from "../common/CompoHeader";
import approachTop from "../../images/ServiceTop3.jpg";
import secImg from "../../images/TriasseaIcon.png";
import centerImage from "../../images/centercircle.png";
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

const Aproach = () => {
  return (
    <div>
      <section>
        <CompoHeader name="Aproach" image={approachTop} />
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
