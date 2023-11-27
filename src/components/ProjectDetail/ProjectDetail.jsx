import React from 'react'
import { useParams } from 'react-router-dom/dist'
import compoheaderimg from "../../images/contactus1.jpg"
import CompoHeader from '../common/CompoHeader';
const ProjectDetail = () => {

    const {id}  = useParams();
    console.log(id);
  return (
    <div>
     <CompoHeader name="project Detail" image={compoheaderimg} />
    
    {id}</div>
  )
}

export default ProjectDetail