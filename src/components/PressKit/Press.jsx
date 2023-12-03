import React from "react";
import "./press.css";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";
import CompoHeader from "../common/CompoHeader";
import compoheaderimg from "../../images/contactus1.jpg";
import { useNavigate } from "react-router-dom";
export const pressKitData = [
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    title: "Press Kit Title 1",
    date: "December 1, 2023",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  // ... (add more press kit data)
];
const truncateDescription = (description, maxWords = 20) => {
  const words = description.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return description;
};

const Press = () => {


  const navigate =  useNavigate();
  return (

    <div>
<CompoHeader name="press-Kit" image={compoheaderimg} />
   
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Press</h2>
          <p className="mt-4 text-gray-600">
            We're excited to share our story with you. Here you'll find press
            releases, media kits, and other resources to help you learn more
            about our company and our work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-center">
                <HiOutlineDocumentText className="h-6 w-6 text-gray-400" />
                <h3 className="ml-4 text-lg font-medium text-gray-900">
                  Press Releases
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Find the latest news and announcements about our company.
              </p>
            </div>
            <a href="#" className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg">
              View Press Releases
            </a>
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-center">
                <BiNews className="h-6 w-6 text-gray-400" />
                <h3 className="ml-4 text-lg font-medium text-gray-900">
                  Media Kit
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Download our media kit for more information about our company.
              </p>
            </div>
            <a
              href="#"
              className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg"
            >
              Download Media Kit
            </a>
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-center">
                <RiVideoFill className="h-6 w-6 text-gray-400" />
                <h3 className="ml-4 text-lg font-medium text-gray-900">
                  Videos
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Watch our latest videos to learn more about our company and our
                work.
              </p>
            </div>
            <a
              href="#"
              className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* press section  */}
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">letast Release Press</h2>

  {/* Press Kit List */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {pressKitData.map((press, index) => (
      <div key={index} className="bg-white shadow overflow-hidden rounded-lg" onClick={()=>navigate(`/press/${index + 1}`)}>
        <img
          className="w-full h-48   object-center"
          src={`https://picsum.photos/200/300?image=${index + 1000}`}
          alt={`Press Kit ${index + 1}`}
        />
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">{press.title}</h3>
          <p className="text-sm text-gray-600 mb-2">Date: {press.date}</p>
          <p className="text-sm text-gray-600 mb-2">Author: {press.author}</p>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{truncateDescription(press.description)}</p>
          <a href="#" className="text-green-600 hover:text-green-800 font-medium">
            Read More
          </a>
        </div>
      </div>
    ))}
  </div>
  {/* End of Press Kit List */}
</div>


    </div>
  );
};

export default Press;
