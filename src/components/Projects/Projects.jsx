import React, { useState } from "react";
import faqimage from "../../images/Faq12.jpg";
import secImg from "../../images/TriasseaIcon.png";
import CompoHeader from "../common/CompoHeader";
import "./projects.css";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const Projects = () => {
  return (
    <div>
      <section>
        <CompoHeader name="Projects" image={faqimage} />
      </section>
      <section className="mt-40">
        <div className="mb-6 md:ml-1 lg:ml-2 ">
          <span className="flex justify-center items-center gap-1">
            <img className="w-6" src={secImg} alt="" />
            <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
              Our Project
            </h3>
          </span>
          <h1
            className="form-hedding flex justify-center items-center"
            style={{ fontSize: "50px" }}
          >
            Completed Projects
          </h1>
        </div>
      </section>
      {/* <section className="mb-20">
        <div className="bg-gray-100">
          <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none max-w-2xl ">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-[520px] overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-[420px] rounded-lg w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mb-20">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none max-w-2xl">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="content relative w-full h-[420px] mb-8 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-[420px] rounded-lg w-full object-cover object-center"
                      />
                      {/* Display on hover */}
                      <div className="overlay w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-50 bg-green-400 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl text-gray-500 hover:text-yellow-300">
                          <a href={callout.href}>{callout.name}</a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                          {callout.description}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                        {/* Add link here if needed */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
