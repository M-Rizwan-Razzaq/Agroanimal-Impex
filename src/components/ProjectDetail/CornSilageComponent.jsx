import React, { useEffect } from "react";
import ippc from "../../assest/main/ippc.jpg";
import halal from "../../assest/main/halal.png";
import pest from "../../assest/main/pest control.jpg";
import nongmo from "../../assest/main/nongmo.webp";

const CornSilageComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">
        Corn Silage
      </h2>

      <div className="w-full h-64 sm:h-72 lg:h-80 rounded-md shadow overflow-hidden">
        <img
          src="/products/silagecollege (2).jpeg"
          alt="Corn Silage Block"
          className="w-full h-full  object-cover lg:object-fill rounded-md"
        />
      </div>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Corn Silage is a palatable, fermented, and preserved form of fodder used
        in Livestock Feeding. We are committed to deliver product with Product
        Stewardship ensuring quality & in time delivery.
      </p>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">
          Proximate Quality Analysis of Corn Silage (Dry Matter Basis)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left">Component</th>
                <th className="border px-3 py-2 text-left">Percentage %</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dry Matter", "30 - 35"],
                ["Crude Protein", "7 - 9"],
                ["Ether Extract (Fat)", "1.5"],
                ["Crude Fiber", "18 - 25"],
                ["Nitrogen Free Extract", "55 - 60"],
                ["Acid Detergent Fiber", "25 - 35"],
                ["Neutral Detergent Fiber", "45 - 55"],
                ["Ash", "6 - 8"],
              ].map(([component, percent], idx) => (
                <tr key={idx}>
                  <td className="border px-3 py-2">{component}</td>
                  <td className="border px-3 py-2">{percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">
          Available Sizes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Type</th>
                <th className="border px-3 py-2">Dimension (Inches)</th>
                <th className="border px-3 py-2">Weight (Kg)</th>
                <th className="border px-3 py-2">Packaging</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Standard Block",
                  "24 * 18 * 16",
                  "35 - 45",
                  "Vacuum packed, Plastic wrapped",
                ],
                ["Large Block", "32 * 24 * 20", "80 - 100", "Bulk Order"],
                ["Mini Block", "18 * 16 * 14", "25 - 30", "For Sheep & Goats"],
              ].map(([type, dimension, weight, packaging], idx) => (
                <tr key={idx}>
                  <td className="border px-3 py-2">{type}</td>
                  <td className="border px-3 py-2">{dimension}</td>
                  <td className="border px-3 py-2">{weight}</td>
                  <td className="border px-3 py-2">{packaging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        <strong>Packaging Notes:</strong> 60 – 70% Moisture, pH: 4.0, Shelf
        Life: 1 year
      </p>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">
          Terms & Conditions
        </h3>
        <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg space-y-1">
          <li>
            <strong>Origin:</strong> Pakistan
          </li>
          <li>
            <strong>HS Code:</strong> 2308.00
          </li>
          <li>
            <strong>Lab Quality Assessment (Toxin & Entophyte):</strong>{" "}
            Negotiable
          </li>
          <li>
            <strong>Feed Additive & Inoculum Addition:</strong> Negotiable
          </li>
          <li>
            <strong>Minimum Order Weight:</strong> 20,000 - 24,000 Kg
          </li>
          <li>
            <strong>Preferable Shipment:</strong> Sea Port
          </li>
          <li>
            <strong>Payment Terms:</strong> Advanced Payment, CAD, L/C
            (Negotiable)
          </li>
          <li>
            <strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)
          </li>
          <li>
            <strong>Delivery Time:</strong> 2 – 3 Months (Negotiable)
          </li>
        </ul>
      </div>
      <div className="mt-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-700 text-center">
          Export Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Phytosanitary Certificate",
              description:
                "Confirms the product is free from pests and diseases. Issued by the Department of Plant Protection (DPP), Ministry of National Food Security.",
              img: ippc  ,
            },
            {
              title: "Fumigation Certificate",
              description:
                "Ensures the shipment has been treated with approved fumigants to eliminate pests and insects.",
              img: pest ,
            },
            {
              title: "Non-GMO Certificate",
              description:
                "Declares that the product does not contain genetically modified organisms, required by countries that ban GMOs.",
              img: nongmo ,
            },
            {
              title: "Halal Certificate",
              description:
                "Certifies that the product meets Islamic dietary laws in case it's consumed or used in Halal-certified farms.",
              img: halal ,
            },
          ].map(({ title, description, img }, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow rounded-lg text-center"
            >
              <img
                src={img}
                alt={title}
                className="w-20 h-20 mx-auto object-contain mb-3"
              />
              <h4 className="text-md font-semibold text-green-800">{title}</h4>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
        {[
          {
            src: "/products/cornimg (1).jpg",
            alt: "Department of Plant Protection",
          },
          { src: "/products/cornimg (2).jpg", alt: "Livestock Department" },
          { src: "/products/cornimg (3).jpg", alt: "Agriculture Department" },
          { src: "/products/cornimg (1).jpeg", alt: "Meezan Bank" },
        ].map(({ src, alt }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt}
            className="w-20 sm:w-24 md:w-28 h-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default CornSilageComponent;
