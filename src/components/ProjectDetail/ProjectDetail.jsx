import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom/dist";
import compoheaderimg from "../../images/contactus1.jpg";
import CompoHeader from "../common/CompoHeader";
import { GoArrowLeft, GoArrowRight, GoCheckCircleFill } from "react-icons/go";
import "./projectdetail.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import project1 from "../../assest/project1.jpg";
import project2 from "../../assest/project2.jpg";
import project3 from "../../assest/project3.jpg";
import project4 from "../../assest/project4.jpg";

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
export const projectsData = [
  {
    id: 1,
    image: project1,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 2,
    image: project2,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 3,
    image: project3,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 4,
    image: project4,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 5,
    image: project1,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 6,
    image: project2,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 7,
    image: project3,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
  {
    id: 8,
    image: project4,
    title: "Simple Generator",
    desciption:
      "It is a long established fact that reader will the readable content",
  },
];

const ProjectDetail = () => {
  const [hovered, setHovered] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  

  const [currentProject, setCurrentProject] = useState({
    id: Number(id),
    project: {},
    nextproject: null,
    preproject: null,
  });

  useEffect(() => {
    const index = projectsData.findIndex((elm) => elm.id === Number(id));

    const preproject = projectsData[index - 1] || null;

    const nextproject = projectsData[index + 1] || null;
    setCurrentProject({
      ...currentProject,
      project: projectsData[index],
      preproject,
      nextproject,
      id: Number(id),
    });
  }, [id]);

  console.log(currentProject);

  return (
    <div>
      <CompoHeader name="project Detail" image={compoheaderimg} />

      <div className="md:px-[30px] px-[10px] py-8">
        {/* top img div */}
        <div
          style={{ border: "1px solid red" }}
          className="w-full md:h-[90vh] h-45vh  relative md:overflow-hidden border rounded-lg "
        >
          <img
            src={currentProject.project.image}
            alt=""
            className="w-full h-full rounded-lg project-detail-top-img"
          />
          <div
            style={{ border: "1px solid black" }}
            className="md:absolute -bottom-1 md:right-28 rounded-md  md:pl-[55px] pl-[30px]   md:pt-[35px] pt-[20px] md:pb-[45px] pb-[25px] text-white bg-green-800 w-full max-w-[340px] project-detail-top-detail"
          >
            {projectDetailData.map((elm) => (
              <div className="md:mt-5 mt-3 text-[18px]">
                <p className="mb-[6px] text-gray-300">{elm.title}</p>
                <p>{elm.ans}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-14">
          <h2 className="md:text-5xl text-4xl font-semibold my-8">
            About Project
          </h2>
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

        <div className="md:flex justify-between gap-10">
          <div
            style={{ border: "1px solid  lightgray" }}
            className="rounded md:px-16 md:pt-14 md:pb-10  px-5 pt-8 pb-6 md:mb-0 mb-7"
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
            className="rounded md:px-16 md:pt-14 md:pb-10  px-5 pt-8 pb-6"
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
        <div className="grid grid-cols-4 gap-8  project-gallery-box">
          {[...new Array(8)].map((elm) => (
            <div className="md:h-[57vh] h-[48vh] max-w-[300px] m-auto">
              <img
                src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/gallery-footer-04.jpg"
                alt=""
                className="rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between next-pre-box border-b-gray-500 md:py-10 py-6 mt-12">
          {Number(id) !== 1 && (
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => navigate(`/projectdetail/${Number(id) - 1}`)}
            >
              <GoArrowLeft size={20} />
              <div>
                <p className="md:text-xl text-lg text-gray-400"> Previous </p>
                <h2 className="mt-1 text-2xl next-pre-heading  text-green-900 hover:text-orange-400 font-semibold">
                  heading
                </h2>
              </div>
            </div>
          )}

          {Number(id) !== projectsData.length && (
            <div
              className="flex ml-auto gap-3 cursor-pointer"
              onClick={() => navigate(`/projectdetail/${Number(id) + 1}`)}
            >
              <div>
                <p className="md:text-xl text-lg text-gray-400 float-right">
                  {" "}
                  Next{" "}
                </p>
                <h2 className="mt-1 text-2xl next-pre-heading text-green-900 hover:text-orange-400 font-semibold">
                  heading
                </h2>
              </div>
              <GoArrowRight size={20} />
            </div>
          )}
        </div>

        <h2 className="mt-14 md:text-5xl text-3xl mb-7 font-semibold">
          Related Project
        </h2>

        <div>
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2000}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite={true}
            responsive={{
              0: { items: 1 },
              602: { items: 2 },
              1024: { items: 3 },
              1424: { items: 4 },
            }}
          >
            {projectsData.map((elm) => (
              <ProjectDetailCard
                elm={elm}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
