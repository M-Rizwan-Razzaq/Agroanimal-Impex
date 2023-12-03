// PressDetails.js

import React from "react";
import  pressKitData from "./pressData";
import { useParams } from "react-router-dom";
const PressDetails = () => {
    const { id } = useParams();
    const press = pressKitData[Number(id)]; 
  
    if (!press) {
      return <div>Press not found</div>;
    }
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <img
        className="w-full h-64 object-cover object-center mb-6"
        src={`https://picsum.photos/200/300?image=${Number(id) + 999}`}
        alt={`Press Kit ${press.id}`}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">{press.title}</h2>
        <p className="text-sm text-gray-600 mt-2">Date: {press.date}</p>
        <p className="text-sm text-gray-600 mb-2">Author: {press.author}</p>
        <p className="text-sm text-gray-600 mb-6">{press.description}</p>
        {/* Additional details can be added here */}
      </div>
    </div>
  );
};

export default PressDetails;
