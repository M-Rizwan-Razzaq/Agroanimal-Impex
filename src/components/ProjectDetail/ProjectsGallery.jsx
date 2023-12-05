import React from "react";

const ProjectsGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-8  project-gallery-box">
      {[...new Array(8)].map((elm) => (
        <div className="md:h-[57vh] h-[48vh] max-w-[300px] m-auto">
          <img
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/gallery-footer-04.jpg"
            alt=""
            className="project-detail-card-gallary rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
