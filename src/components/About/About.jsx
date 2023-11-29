import React from "react";
import "./About.css";
import aboutUs1 from "../../images/about us1.png";
import aboutUs2 from "../../images/about us2.png";
import aboutUs3 from "../../images/about us3 (1).png";
import aboutUs4 from "../../images/about us4.png";
import secImg from "../../images/TriasseaIcon.png";

import mainImage1 from "../../images/h1-banner01.jpg";
import mainImage2 from "../../images/h1-banner02.jpg";

const About = () => {
  const dataArray = [
    {
      image: aboutUs1,
      tag: "Agriculture & Foods",
      description:
        "A picturesque farm with golden fields of wheat and a traditional barn.",
    },
    {
      image: aboutUs2,
      tag: "Vegetables & Fruits",
      description:
        "Colorful assortment of fresh fruits and vegetables on a wooden table.",
    },
    {
      image: aboutUs3,
      tag: "Food Beverage",
      description:
        "From crisp vegetables to juicy fruits, our Food Beverage offerings showcase the vibrant richness of nature’s bounty.",
    },
    {
      image: aboutUs4,
      tag: "Animal Nutrition",
      description:
        "Healthy animal feed in a bowl, providing essential nutrients for livestock.",
    },
  ];

  return (
    <section className="grid grid-cols-1 mt-20 mr-10 gap-20 md:grid-cols-2 lg:grid-cols-2">
      <div className="md:ml-8 lg:ml-2">
        <span className="flex justify-start ml-6 items-center gap-2">
          <img className="w-8" src={secImg} alt="" />
          <h3 className="text-xl md:text-2xl lg:text-3xl antialiased font-sans">
            About Us
          </h3>
        </span>
        <h1 className="mb-4 ml-6 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Organic & Healthy Food
        </h1>
        <p className="text-gray-500 ml-6 mb-4 text-sm md:text-base lg:text-lg">
          At [out Company Name], we are passionate about promoting a healthy
          lifestyle through the consumption of organic and healthy food.
          Committed to the well-being of our customers, we source only the
          finest organic ingredients to create a range of wholesome products.
          Join us on a journey towards nourishing your body and supporting a
          sustainable, organic future.
        </p>
        <div className="px-4">
          {dataArray.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center items-center gap-3 item-center mb-4 md:mb-8 lg:mb-10 mr-3 md:mr-6"
            >
              <img
                className="h-15 w-15 md:h-24 md:w-20 lg:h-23 lg:w-28 rounded-full bg-lime-100 hover:bg-orange-300 fill-white ml-3 md:ml-0"
                src={data.image}
                alt=""
              />
              <div className="text-center md:text-left">
                <h4 className="text-lg lg:text-3xl md:text-2xl cursor-pointer hover:text-orange-400">
                  {data.tag}
                </h4>
                <p className="text-sm md:text-base lg:text-lg">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 text-base md:text-lg lg:text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-4 mt-8"
        >
          Read More
          <svg
            className="w-5 h-5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <div className="image-container mt-8 md:mt-0 lg:ml-20 lg:mt-20">
        <img
          className="hover:scale-105 transition duration-500 cursor-pointer w-full"
          src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/h1-banner03.svg"
          alt=""
        />
        <img
          className="hover:scale-105 transition duration-500 cursor-pointer w-full mt-4 md:mt-0 "
          src={mainImage1}
          alt=""
        />
        <img
          className="hover:scale-105 transition duration-500 cursor-pointer mt-4 md:mt-0"
          src={mainImage2}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
