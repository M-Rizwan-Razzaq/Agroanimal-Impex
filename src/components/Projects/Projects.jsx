import React, { useState } from "react";
import faqimage from "../../images/Faq12.jpg";
import secImg from "../../images/TriasseaIcon.png";
import CompoHeader from "../common/CompoHeader";
import "./projects.css";

const Projects = () => {
  const dataArray = [
    [
      {
        id: 1,
        name: "",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-15.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        id: 2,
        name: "Self-Improvement",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-14.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        id: 3,
        name: "Travel",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-13.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        id: 4,
        name: "Desk and Office",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-12.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        id: 5,
        name: "Self-Improvement",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-11.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        id: 6,
        name: "Travel",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-10.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        id: 7,
        name: "Desk and Office",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-09.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        id: 8,
        name: "Self-Improvement",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-08.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        id: 9,
        name: "Travel",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-07.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
    ],
    [
      {
        id: 10,
        name: "Self-Improvement",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-06.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        id: 11,
        name: "Travel",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-05.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        id: 12,
        name: "Desk and Office",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-04.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        id: 13,
        name: "Self-Improvement",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-03.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        id: 14,
        name: "Travel",
        description:
          "It is a long established fact that reader will the readable content",
        imageSrc:
          "https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-02.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
    ],
  ];
  const [data, setData] = useState(dataArray[0]);
  const [state, setState] = useState(null);

  const handclick1 = () => {
    setData(dataArray[0]);
    setState(1);
  };
  const handclick2 = () => {
    setData(dataArray[1]);
    setState(2);
  };

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

      <section className="mb-20">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none max-w-2xl">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
                {data.map((callout) => (
                  <div key={callout.id} className="group relative">
                    <div className="content relative w-full h-[420px] mb-8 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-[420px] rounded-lg w-full object-cover object-center"
                      />
                      {/* Display on hover */}
                      <div className="overlay w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-50 bg-green-700 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 my-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl text-yellow-400 hover:text-yellow-400">
                          <a href={callout.href}>{callout.name}</a>
                        </h3>
                        <p className="ml-[3%] mr-[3%] text-base font-semibold text-gray-900">
                          {callout.description}
                        </p>
                        <a href={callout.href}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-8 my-4 hover:text-lime-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </a>
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

      <section className="flex content-center justify-center gap-1">
        <button
          className={
            state !== 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button
          onClick={handclick1}
          type="button"
          className={`text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`}
        >
          1
        </button>
        <button
          onClick={handclick2}
          type="button"
          className={`text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`}
        >
          2
        </button>
        <button
          type="button"
          className={
            state === 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Projects;
