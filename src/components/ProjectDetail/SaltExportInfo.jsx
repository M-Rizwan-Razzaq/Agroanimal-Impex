import React, { useEffect } from "react";
import salts from "../../assest/saltcollege.jpg";
import ippc from "../../assest/main/coo.png";
import halal from "../../assest/main/halal.png";
import pest from "../../assest/main/labsalt.webp";
import nongmo from "../../assest/main/packaging.webp";

const SaltExportInfo = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="mt-24 p-6 space-y-10 max-w-7xl mx-auto text-gray-800">
      {/* Image */}
      <div className="text-center">
        <img
          src={salts}
          alt="salt"
          className="w-48 mx-auto rounded shadow-lg object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold">Pakistani Himalayan Salt Products</h1>
        <p className="text-base md:text-lg">
          <strong>Food Grade Salt</strong> is a crystalline product containing over 98% Sodium Chloride.
          <br />
          <strong>Pakistani Himalayan Pink Salt</strong> has secured a Geographical Indication (GI) Tag.
          <br />
          <strong>Uses:</strong> Table Salt, Dairy Lick Salt Rocks, Home Decoration.
        </p>
      </div>

      {/* Salt Export Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-3 text-center md:text-left">
          Pakistani Himalayan Salt – Export Forms, Usage & Packaging
        </h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">S. No.</th>
              <th className="border px-4 py-2">Export Form</th>
              <th className="border px-4 py-2">Usage</th>
              <th className="border px-4 py-2">Packaging</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Raw Rock Salt", "Industrial use, salt lamps", "Jute bags, 50 kg or bulk packaging"],
              ["2", "Granulated Salt", "Culinary use, food processing", "PP bags, 1 kg to 25 kg"],
              ["3", "Fine Salt (Table Salt)", "Household cooking, table salt", "Plastic pouches, 500g to 1 kg"],
              ["4", "Salt Lumps", "Animal lick blocks, decorative items", "Carton boxes or bulk in wooden crates"],
              ["5", "Salt Tiles/Bricks", "Cooking slabs, spa therapy, wall panels", "Bubble wrap, carton boxes"],
              ["6", "Bath Salt (Crystals)", "Personal care, spa, wellness", "Plastic jars, pouches (500g - 2kg)"],
              ["7", "Salt Lamps", "Home decor, air purification", "Individual boxes with foam padding"],
            ].map(([no, form, usage, pack], i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{no}</td>
                <td className="border px-4 py-2">{form}</td>
                <td className="border px-4 py-2">{usage}</td>
                <td className="border px-4 py-2">{pack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Terms & Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>Origin of Product:</strong> Pakistan</p>
            <p><strong>HS Code:</strong> 250100</p>
            <p><strong>Lab Quality Assessment:</strong> Negotiable</p>
            <p><strong>Feed Additive/Inoculum Addition:</strong> Negotiable</p>
          </div>
          <div className="space-y-2">
            <p><strong>Minimum Order:</strong> 20,000 – 24,000 Kg</p>
            <p><strong>Preferred Shipment:</strong> Air & Sea Port</p>
            <p><strong>Payment Terms:</strong> Advance, CAD, LC (Negotiable)</p>
            <p><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</p>
            <p><strong>Delivery Time:</strong> Negotiable, ensuring product stewardship</p>
          </div>
        </div>
      </div>

      {/* Certifications Logo Row */}
      <div className="mt-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-700 text-center">
          Export Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Certificate of Origin",
              description:
                "Verifies that the salt was mined and processed in Pakistan.",
              img: ippc  ,
            },
            {
              title: "Lab Testing Report",
              description:
                "Shows mineral composition, purity, and safety for consumption or industrial use.",
              img: pest ,
            },
            {
              title: "Packaging & Labeling Compliance",
              description:
                "Compliance with target market’s regulations, including net weight, source, nutritional facts, etc.",
              img: nongmo ,
            },
            {
              title: "Halal Certificate",
              description:
                "Required if used for consumption to confirm it contains no haram additives.",
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
      <div className="mt-8">
        <h4 className="text-center font-semibold text-lg mb-4">Certifications</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
          {[
            { src: "/products/smeta.jpeg", alt: "SMETA" },
            { src: "/products/iso salt.webp", alt: "ISO 22000" },
            { src: "/products/fssc.png", alt: "FSSC 22000" },
            { src: "/products/haccp.jpeg", alt: "HACCP" },
            { src: "/products/sgs.png", alt: "SGS" },
          ].map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="h-12 object-contain mx-auto" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaltExportInfo;
