import React, { useState, useEffect } from "react";
import aboutUsHeader from "../../images/AboutUs.jpg";
import CompoHeader from "../common/CompoHeader";
import About from "../About/About";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imageUrls } from "./aboutdata";
import "./AboutUsPage.css";

const AboutUsPage = () => {
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
    if (screenWidth <= 360) {
      return 3; // For mobile screens
    } else if (screenWidth <= 540) {
      return 4; // For tablet screens
    } else {
      return 6; // For laptop screens
    }
  };

  return (
    <div>
      <section>
        <CompoHeader name="About Us" image={aboutUsHeader} />
      </section>
      <section className="mb-10">
        <About />
      </section>

      <section className="mt-20">
        <h2 className="text-center leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="py-5 sm:py-10">
          <div className="bg-orange-400 mx-auto max-w-8xl">
            <Swiper
              slidesPerView={getSlidesPerView()}
              spaceBetween={30}
              modules={[Autoplay]}
              className="mySwiper "
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <img
                    className="transition duration-300 opacity-50 hover:opacity-100 transform"
                    src={imageUrl}
                    alt={`Brand ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
