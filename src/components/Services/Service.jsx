import React from "react";
import secImg from "../../images/TriasseaIcon.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./service.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Service = () => {
  return (
    <section className="service-div">
      <div className="lg:mt-20">
        <div className="">
          <span className="flex justify-center items-center items-center gap-2">
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
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <span>
            <img
              src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-04.jpg"
              alt=""
            />
            <a
              href="/"
              className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
            >
              Dairy Products
            </a>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-1.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Agriculture production
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-2.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Organic products
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-3.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Fresh vegetables
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-05.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Water Managment
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-06.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Vegetables Firms
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-07.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Harvest Incentive
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/sv-08.jpg"
            alt=""
          />
          <a
            href="/"
            className="flex justify-center items-center text-3xl mt-2 hover:text-yellow-500"
          >
            Farm House
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Service;
