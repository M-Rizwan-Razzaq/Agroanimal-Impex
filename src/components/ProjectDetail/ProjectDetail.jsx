import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import compoheaderimg from "../../images/contactus1.jpg";
import CompoHeader from "../common/CompoHeader";
import { GoArrowLeft, GoArrowRight, GoCheckCircleFill } from "react-icons/go";
import "./projectdetail.css";
 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import project1 from "../../assest/project1.jpg"

import ProjectDetailCard from "./ProjectDetailCard";
const projectDetailData = [
  {
    title: "Date:",
    ans: "September 22, 2023",
  },
  {
    title: "Client:",
    ans: "Themeforest, Evanto",
  },
  {
    title: "Website:",
    ans: "Https://Farmor.Com",
  },
  {
    title: "Location:",
    ans: "Melbourne, Australia",
  },
];
export const projectsData  =  [
  {
    id:1,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:2,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:3,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:4,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:5,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
    {
    id:6,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:7,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  },
  {
    id:8,
    image:project1,
    title:"Simple Generator",
    desciption:"It is a long established fact that reader will the readable content"

  }
]

const ProjectDetail = () => {
  
  const [hovered,setHovered]  = useState(null);
  return (
    <div>
      <CompoHeader name="project Detail" image={compoheaderimg} />

      <div className="md:px-[30px] px-[10px] py-8">
        {/* top img div */}
        <div
          style={{ border: "1px solid red" }}
          className="w-full h-[90vh] relative border rounded-lg overflow-hidden"
        >
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/project-07.jpg"
            alt=""
            className="w-full h-full"
          />
          <div
            style={{ border: "1px solid black" }}
            className="absolute -bottom-1 right-28 rounded-md pl-[55px]   pt-[35px] pb-[45px] text-white bg-green-800 w-[340px]"
          >
            {projectDetailData.map((elm) => (
              <div className="mt-5 text-[18px]">
                <p className="mb-[6px] text-gray-300">{elm.title}</p>
                <p>{elm.ans}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-14">
          <h2 className="text-5xl font-semibold my-8">About Project</h2>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor dolor eu fringilla tristique. Curabitur eget velit
            facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit metus,
            non aliquet neque. Quisque porta consectetur luctus. Praesent eros
            tortor, sagittis ut magna a, venenatis ultrices enim. Mauris id
            commodo nibh. Integer a rhoncus eros, ac lobortis felis. Aenean
            convallis luctus augue.
          </p>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Phasellus vitae dapibus neque. Sed ac augue viverra, volutpat erat
            sed, aliquam turpis. Quisque commodo metus quis ex condimentum
            maximus. Sed eget dui pharetra, ornare ex lamcorpe, vulputate
            sapien. Maecenas quis fringilla enim. Sed sodales ultricies orci, a
            vehicula nisl tincidunt et. Vestibulum id tellus lectus. Nam arcu
            risus, luctus vitae pulvinar blandit, aliquam non lacus. Aliquam id
            turpis semper.
          </p>

          <h3 className="text-[1.3rem] font-semibold my-7 ">
            Challenges And Solutions
          </h3>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor dolor eu fringilla tristique. Curabitur eget velit
            facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit metus,
            non aliquet neque. Quisque porta consectetur luctus. Praesent eros
            tortor, sagittis ut magna a, venenatis ultrices enim. Mauris id
            commodo nibh. Integer a rhoncus eros, ac lobortis felis. Aenean
            convallis luctus augue, id placerat mi maximus vitae.
          </p>
        </div>

        <div className="flex justify-between gap-10">
          <div
            style={{ border: "1px solid  lightgray" }}
            className=" rounded px-16 pt-14 pb-10"
          >
            <h3 className="text-2xl mb-4">Challenges</h3>
            <p className="opacity-[.8] mb-7 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              porttitor dolor eu fringilla tristique. Curabitur eget velit
              facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit
              metus, non aliquet neque.
            </p>

            <div>
              {[...new Array(6)].map((elm) => (
                <div className="flex gap-3 mb-4">
                  <span>
                    <GoCheckCircleFill
                      size={20}
                      className="text-orange-400 mt-[3px]"
                    />
                  </span>
                  <p className="opacity-[.9] text-[16px] text-gray-700">
                    Proin lobortis rutrum leo, a ultrices mauris euismod
                    porttitor.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ border: "1px solid  lightgray" }}
            className=" rounded px-16 pt-14 pb-10"
          >
            <h3 className="text-2xl mb-4">Challenges</h3>
            <p className="opacity-[.8] mb-7 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              porttitor dolor eu fringilla tristique. Curabitur eget velit
              facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit
              metus, non aliquet neque.
            </p>

            <div>
              {[...new Array(6)].map((elm) => (
                <div className="flex gap-3 mb-4">
                  <span>
                    <GoCheckCircleFill
                      size={20}
                      className="text-orange-400 mt-[3px]"
                    />
                  </span>
                  <p className="opacity-[.9] text-[16px] text-gray-700">
                    Proin lobortis rutrum leo, a ultrices mauris euismod
                    porttitor.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mt-7 text-2xl mb-5 font-semibold">Project Gallry</h2>
        <div className="grid grid-cols-4 gap-8">
          {[...new Array(8)].map((elm) => (
            <div className="h-[57vh]">
              <img
                src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/gallery-footer-04.jpg"
                alt=""
                className="rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between next-pre-box border-b-gray-500 py-10 mt-12">
          <div className="flex gap-3 cursor-pointer">
            <GoArrowLeft size={20} />
            <div>
              <p className="text-xl text-gray-400"> Previous </p>
              <h2 className="mt-1 text-2xl text-green-900 hover:text-orange-400 font-semibold">
                heading
              </h2>
            </div>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <div>
              <p className="text-xl text-gray-400 float-right"> Next </p>
              <h2 className="mt-1 text-2xl text-green-900 hover:text-orange-400 font-semibold">
                heading
              </h2>
            </div>
            <GoArrowRight size={20} />
          </div>
        </div>

        <h2 className="mt-14 text-5xl mb-7 font-semibold">Related Project</h2>

        <div>
        <AliceCarousel autoPlay={true}  autoPlayInterval={2000} disableButtonsControls={true} disableDotsControls={true} infinite={true}    responsive={{
    0: { items: 1},
    602: { items: 2},
    1024: { items: 3},
    1424: { items: 4},
  }}
      >
                {projectsData.map((elm) => (

                  
                 <ProjectDetailCard elm={elm} hovered={hovered} setHovered={setHovered}/>


                ))}
             
</AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
