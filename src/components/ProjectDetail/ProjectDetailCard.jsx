import React from 'react'
import { IoArrowForward } from "react-icons/io5";
const ProjectDetailCard = ({hovered,setHovered,elm}) => {
  return (
    <div
            key={elm.id}
             
            className=" slider-div relative   md:h-[65vh] h-[55vh] overflow-hidden rounded-lg min-w-[200px]  md:mr-6  max-w-[400px]"
            onMouseEnter={() => setHovered(elm.id)}
            onMouseLeave={() => setHovered(null)}
          
          >
            <img src={elm.image} alt="" className={`w-full h-full ${hovered===elm.id? "projects-img-scal":""}`} />
            {hovered === elm.id && (
              <div className="absolute top-0 bottom-0 left-0 right-0 project-detail bg-green-700 opacity-60 flex flex-col justify-center items-center text-center px-10">
                <h3 className="text-3xl font-semibold text-white mb-2">{elm.title}</h3>
                <p className="text-white text-base">{elm.desciption}</p>
                <IoArrowForward   className="absolute bottom-5 right-5 text-white font-bold text-4xl" />
              </div>
            )}
          </div>
  )
}

export default ProjectDetailCard