import React, { useEffect } from "react";

const ResearchAndDevelopment = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const images = [
    {
      src: "/products/sugercare.jpg",
      alt: "Sugar Detecting Device",
    },
    {
      src: "/products/poct.jpg",
      alt: "Point-of-Care Device",
    },
    {
      src: "/products/loc.jpg",
      alt: "Lab-on-Chip Device",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16  sm:px-6 md:px-8 py-10 text-gray-800 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          Research & Development
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          AGROANIMAL IMPEX (SMC-PRIVATE) LIMITED is committed to contributing
          to research and development around the world.
        </p>
      </div>

      {/* R&D Vision */}
      <div className="bg-gray-50 border rounded-lg p-6 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Our R&D Vision
        </h2>
        <ul className="list-disc list-inside text-sm md:text-base space-y-2">
          <li>
            Strong commitment to global innovation and knowledge sharing in the
            health and diagnostics domain.
          </li>
          <li>
            Active R&D interests in <strong>Veterinary</strong> and{" "}
            <strong>Medical Diagnostic</strong> technologies.
          </li>
          <li>
            Product stewardship strategy ensures our R&D outputs are accessible
            in developing regions like Pakistan.
          </li>
        </ul>
      </div>

      {/* Research Devices Image Section */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-center mb-6">
          Research Focus – Diagnostic Devices
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-fill"
              />
              <div className="text-center text-sm font-medium p-2 bg-gray-100">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
