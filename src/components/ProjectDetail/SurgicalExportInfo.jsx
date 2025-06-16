import React, { useEffect } from "react";
import surgical from "../../assest/surgicalcollege.jpeg";

const SurgicalExportInfo = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
  <div className="mt-24 p-6 space-y-10 max-w-7xl mx-auto text-gray-800">
      
      {/* Header Section */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <img
            src={surgical}
            alt="surgical"
            className="w-40 h-40  shadow-lg object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">Surgical Instruments Export</h1>
        <p className="text-base md:text-lg">
          <strong>Sialkot, Pakistan</strong> is the largest producer of surgical instruments globally.
          <br />
          <strong>AGROANIMAL IMPEX (SMC-PRIVATE) LIMITED</strong> provides high-quality surgical instruments for medical and veterinary fields, offering affordable prices due to Pakistan’s low labor cost and skilled professionals. We meet national and international compliance requirements with certifications such as CE, GMP, ISO9001, ISO13485, ISO10993, FDA, and MDR.
        </p>
      </div>

      {/* Exportable Instruments Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-3">Exportable Surgical Instruments</h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">S.No.</th>
              <th className="border px-4 py-2">Instrument Name</th>
              <th className="border px-4 py-2">Size</th>
              <th className="border px-4 py-2">Dimensions (mm)</th>
              <th className="border px-4 py-2">Packaging Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["01", "Scalpel Handle", "Standard", "120 x 10 x 5", "Individually packed, 100/box"],
              ["02", "Mayo Scissors", "6.5 inch", "165 x 45 x 10", "1 pair per pouch, 50/box"],
              ["03", "Artery Forceps", "Standard", "120 x 10 x 5", "Individually packed, 100/box"],
              ["04", "Mosquito Forceps", "5 inch", "127 x 40 x 8", "Sterile pack, 100/box"],
              ["05", "Needle Holder", "6 inch", "150 x 35 x 9", "Non-sterile, 50/unit box"],
              ["06", "Surgical Retractor", "Small", "100 x 30 x 7", "Individually wrapped, 25/box"],
              ["07", "Bone Cutter", "9 inch", "230 x 70 x 15", "1 per carton, foam padded"],
            ].map(([no, name, size, dim, pack], i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{no}</td>
                <td className="border px-4 py-2">{name}</td>
                <td className="border px-4 py-2">{size}</td>
                <td className="border px-4 py-2">{dim}</td>
                <td className="border px-4 py-2">{pack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms & Conditions Section */}
      <div className="bg-gray-50 border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Terms & Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Origin of Product:</strong> Pakistan</p>
            <p><strong>HS Code:</strong> 901890</p>
            <p><strong>Minimum Order:</strong> Win-Win & Negotiable</p>
          </div>
          <div>
            <p><strong>Preferred Shipment:</strong> Air & Sea Port</p>
            <p><strong>Payment Terms:</strong> Advance, CAD, LC (Negotiable)</p>
            <p><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</p>
            <p><strong>Delivery Time:</strong> 2–3 Months (Negotiable)</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-8">
        <h4 className="text-center font-semibold text-lg mb-4">Certifications</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center justify-center">
          {[
            { src: "/products/ce.png", alt: "CE" },
            { src: "/products/gmp.jpeg", alt: "GMP" },
            { src: "/products/iso9001.jpeg", alt: "ISO9001" },
            { src: "/products/iso13485.png", alt: "ISO13485" },
            { src: "/products/iso10993.jpeg", alt: "ISO10993" },
            { src: "/products/fda.png", alt: "FDA" },
            { src: "/products/mdr.png", alt: "MDR" },
          ].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurgicalExportInfo;
