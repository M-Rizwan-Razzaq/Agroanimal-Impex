import React, { useState, useEffect } from "react";
import secImg from "../../images/TriasseaIcon.png";
import { serviceData } from "./serviceData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./service.css";

const Service = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSlidesPerView = () => {
    if (screenWidth <= 400) {
      return 1; // For mobile screens
    } else if (screenWidth <= 540) {
      return 2; // For tablet screens
    } else {
      return 3; // For laptop screens
    }
  };

  return (
    <section className="service-div">
      <div className="lg:mt-20">
        <div className="">
          <span className="flex justify-center items-center gap-2">
            <img className="w-8" src={secImg} alt="" />
            <h3 className="flex justify-center items-center text-xl md:text-xl lg:text-2xl antialiased font-sans">
              Our Service
            </h3>
          </span>
          <h1 className="hedding flex justify-center items-center text-xl md:text-3xl lg:text-4xl antialiased font-sans">
            What We Provide
          </h1>
        </div>
      </div>
      <div className="px-[6%]">
        <Swiper
          slidesPerView={getSlidesPerView()}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          {serviceData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-900 rounded-lg text-black transform transition-all ease-in-out duration-300 hover:text-white">
                <a href="#" className="flex flex-col text-3xl mt-4">
                  <img className="" src={slide.imageUrl} alt={slide.altText} />
                  <span className="block text-base  md:text-lg mt-4 md:mt-8 mb-4 md:mb-6 ml-4 md:ml-4 text-white">
                    {slide.linkText}
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
