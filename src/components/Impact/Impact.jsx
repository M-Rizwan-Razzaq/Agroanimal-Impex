import React, { useState } from "react";
import data from "./impactdata";
import CompoHeader from "../common/CompoHeader";
import impact from "../../images/impacts.jpg";
import secImg from "../../images/TriasseaIcon.png";
import "./Impact.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const countersData = [
  { value: 600, label: "Happy Clients" },
  { value: 450, label: "Staff Members" },
  { value: 40, label: "Countries" },
];

const Impact = () => {
  const [counterOn, seCounterOn] = useState(false);
  return (
    <div>
      <section>
        <CompoHeader name="Impact" image={impact} />
      </section>
      <div className="mt-10 md:ml-1 lg:ml-2 ">
        <span className="flex justify-center items-center gap-1">
          <img className="w-6" src={secImg} alt="" />
          <h3 className="text-xl xm:text-lg lg:text-xl antialiased font-sans">
            Our Impact
          </h3>
        </span>
        <h1 className="form-hedding text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex justify-center items-center">
          The impact it has can be huge
        </h1>
      </div>
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="sm:col-span-1">
          {data.map((item, index) => (
            <div key={index} className="sm:col-span-1">
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-3 sm:mb-5 md:mb-8 lg:mb-5 xl:mb-8 ml-3 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5">
                {item.title}
              </h1>

              <p className="tagP text-gray-500 ml-3 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5 mb-3 sm:mb-5 md:mb-8 lg:mb-5 xl:mb-8">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="sm:col-span-1 flex justify-center">
          <img
            className="last-img rounded-lg rounded-tr-lg rounded-br-lg cursor-pointer w-full mx-auto sm:mx-0"
            src="https://images.squarespace-cdn.com/content/v1/5df1453b1180e26a82cf7100/a387cf28-3b53-4f58-883d-042f482160ed/Tree+Planting+1.jpg?format=1500w"
            alt=""
          />
        </div>
      </section>
      <section className="mt-5 mr-5">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-3 sm:mb-5 md:mb-8 lg:mb-5 xl:mb-8 ml-3 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5">
          THE SOLUTION
        </h1>

        <p className="tagP text-gray-500 ml-3 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5 mb-3 sm:mb-5 md:mb-8 lg:mb-5 xl:mb-8">
          Our Impact Earth initiatives include solar power, rainwater
          harvesting, tree-planting, and educational upcycling to rethink the
          use of trash in our school environment. Each of our students
          participates in environmental activities culminating in an
          Environmental Awareness Day each term.
        </p>
      </section>

      <section className="mt-5 bg-gray-100 p-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {countersData.map((item, index) => (
            <ScrollTrigger
              key={index}
              onEnter={() => seCounterOn(true)}
              onExit={() => seCounterOn(false)}
            >
              <div className="flex flex-col min-w-[190px] items-center p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl text-green-600">
                  {counterOn && (
                    <CountUp start={0} end={item.value} duration={2} />
                  )}
                  +
                </h1>
                <p className="text-lg font-semibold text-gray-700">
                  {item.label}
                </p>
              </div>
            </ScrollTrigger>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Impact;
