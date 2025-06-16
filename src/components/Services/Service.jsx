import React, { useState, useEffect } from "react";
import secImg from "../../images/TriasseaIcon.png";
import { serviceData } from "./serviceData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./service.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesPerView = () => {
    if (screenWidth <= 400) return 1;
    else if (screenWidth <= 540) return 2;
    else return 3;
  };

  return (
    <section className="service-div">
      <div className="lg:mt-20 text-center">
        <span className="flex justify-center items-center gap-2">
          <img className="w-8" src={secImg} alt="" />
          <h3 className="text-xl lg:text-2xl font-sans">Our Service</h3>
        </span>
        <h1 className="text-3xl lg:text-4xl font-sans">What We Provide</h1>
      </div>

      <div className="px-[6%]">
        <Swiper
          slidesPerView={getSlidesPerView()}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          className="mySwiper"
        >
          {serviceData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                onClick={() => navigate(`/products${slide.link}`)}
                className="cursor-pointer bg-green-900 rounded-lg text-black transition-all hover:text-white"
              >
                <div className="flex flex-col text-3xl mt-4">
                  <img src={slide.imageUrl} alt={slide.altText} />
                  <span className="block text-lg mt-4 mb-6 ml-4 text-white">
                    {slide.linkText}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
