import React, { useEffect } from "react";
import garlic from "../../assest/garliccollege.jpeg";

import ippc from "../../assest/main/ippc.jpg";
import halal from "../../assest/main/halal.png";
import pest from "../../assest/main/pest control.jpg";
import coo from "../../assest/main/coo.png";


const GarlicExportInfo = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10 text-gray-800">
      {/* Header */}
      <div className="text-center space-y-2">
       
        <div className="flex justify-center">
          <img src={garlic} alt="Rizwan" className="w-48   shadow-lg object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">Garlic Product Export</h1>
        <p className="text-base md:text-lg">
          <strong>AGROANIMAL IMPEX (SMC-PRIVATE) LIMITED</strong> specializes in product stewardship and the export of premium-quality garlic to international markets. Based in Pakistan, we work closely with trusted farmers to ensure a sustainable supply of fresh, aromatic, and nutrient-rich garlic.
        </p>
        <p className="font-semibold text-green-700">Trust us as your reliable partner in the global garlic trade.</p>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-3">Garlic Export Overview</h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Details</th>
              <th className="border px-4 py-2">Packaging</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                item: "Fresh Garlic",
                details: "Whole bulbs, cleaned and sorted",
                packaging: "Mesh bags, 5–30 kg",
              },
              {
                item: "Peeled Garlic",
                details: "Peeled & vacuum packed",
                packaging: "Vacuum packs, 500 g–5 kg",
              },
              {
                item: "Garlic Paste",
                details: "Blended garlic",
                packaging: "Jars or pouches, 250 g–1 kg",
              },
              {
                item: "Garlic Powder",
                details: "Dried & Grinded",
                packaging: "Sealed foil pouches, 1–5 kg",
              },
            ].map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{row.item}</td>
                <td className="border px-4 py-2">{row.details}</td>
                <td className="border px-4 py-2">{row.packaging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Terms & Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Origin of Product:</strong> Pakistan</p>
            <p><strong>HS Code:</strong> 0703.20</p>
            <p><strong>Lab Quality Assessment:</strong> Negotiable (Toxin & Entophyte)</p>
            <p><strong>Minimum Order:</strong> 100 kg (negotiable based on type)</p>
          </div>
          <div>
            <p><strong>Quality Test:</strong> Negotiable, as per ISO/HACCP</p>
            <p><strong>Shipment Mode:</strong> Sea Port & Air Port</p>
            <p><strong>Payment Terms:</strong> Advance, CAD, TT, LC (Negotiable)</p>
            <p><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</p>
            <p><strong>Delivery Time:</strong> Negotiable with product stewardship</p>
          </div>
        </div>
      </div>

      {/* Logo Row */}
   
       <div className="mt-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-700 text-center">
          Export Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Phytosanitary Certificate",
              description:
                "Certifies that the product is free from pests, soil, or microbial contamination.",
              img: ippc  ,
            },
            {
              title: "Fumigation Certificate",
              description:
                "Validates fumigation treatment to meet quarantine requirements.",
              img: pest ,
            },
            {
              title: "Certificate of Origin",
              description:
                "Proof of cultivation and harvest in Pakistan.",
              img: coo ,
            },
            {
              title: "Halal Certificate",
              description:
                "If the ginger/garlic is processed, a Halal certification is often necessary.",
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
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center justify-center mt-6">
        {[
          { src: "/products/cornimg (1).jpeg", alt: "Meezan Bank" },
          { src: "/products/tadp.jpeg", alt: "TDAP" },
          { src: "/products/haccp.jpeg", alt: "HACCP" },
          { src: "/products/fbr.png", alt: "FBR" },
          { src: "/products/psw.jpeg", alt: "PSW" },
          { src: "/products/secp.jpeg", alt: "SECP" },
          { src: "/products/cornimg (1).jpg", alt: "Plant Protection" },
          { src: "/products/cornimg (2).jpg", alt: "Agriculture Department" },
        ].map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} className="h-12 object-contain mx-auto" />
        ))}
      </div>
    </div>
  );
};

export default GarlicExportInfo;
