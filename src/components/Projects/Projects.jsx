import React,{useState} from 'react'
import "./projects.css"
import compoheaderimg from "../../images/contactus1.jpg"
import CompoHeader from '../common/CompoHeader'
import project1 from "../../assest/project1.jpg"
import secImg from "../../images/TriasseaIcon.png"
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom/dist'
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
const Projects = () => {
  const [hovered,setHovered]  = useState(null);
const navigate =  useNavigate();
  return (
    <div className="mb-8">
      <CompoHeader name="projects" image={compoheaderimg} />

      <div className="my-10 flex flex-col justify-center items-center">
            <span className="flex items-center gap-1">
              <img className="w-6" src={secImg} alt="" />
              <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                Our Projects
              </h3>
            </span>
            <h1 className="form-hedding text-[50px]">
              Completed Projects
            </h1>
          </div>


      <div className="grid grid-cols-3 gap-8 py-6 px-10 cursor-pointer ">
        {projectsData.map((elm) => (
          <div
            key={elm.id}
            className="relative h-[80vh] overflow-hidden rounded-lg"
            onMouseEnter={() => setHovered(elm.id)}
            onMouseLeave={() => setHovered(null)}
          
          >
            <img src={elm.image} alt="" className={`w-full h-full ${hovered===elm.id? "projects-img-scal":""}`} />
            {hovered === elm.id && (
              <div className="absolute top-0 bottom-0 left-0 right-0 project-detail bg-green-900 opacity-60 flex flex-col justify-center items-center text-center px-10" onClick={()=>navigate(`/projectdetail/${elm.id}`)}>
                <h3 className="text-3xl font-semibold text-white mb-2">{elm.title}</h3>
                <p className="text-white text-base">{elm.desciption}</p>
                <IoArrowForward   className="absolute bottom-5 right-5 text-white font-bold text-4xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;