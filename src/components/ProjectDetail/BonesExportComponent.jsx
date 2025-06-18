import React, { useEffect } from "react";
import ippc from "../../assest/main/animalquarantine.png";
import halal from "../../assest/main/halal.png";
import pest from "../../assest/main/pest control.jpg";
import nongmo from "../../assest/main/health.png";
import coo from "../../assest/main/coo.png";


const BonesExportComponent = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-gray-300">
          Bones Export
        </h2>

        {/* Image Placeholder */}
       <div className="w-full  mx-auto flex items-center justify-center bg-gray-200  rounded-md mb-8 p-4">
  <img
    src="/products/bonecollege.jpeg"
    alt="Cornbone Product"
    className="w-96 object-fill rounded-md shadow"
  />
</div>

        <p className="mb-4">
          We are specialized and experienced in the export of high-quality animal
          bones sourced from healthy, government-inspected livestock. Our range
          includes products used in the manufacture of gelatin, organic fertilizers,
          animal feed, pet food, crafts, and industrial applications processed under
          strict hygiene standards.
        </p>
        <p className="mb-4">
          Raw bones are evaluated and inspected for quality to ensure BSE-free
          (Bovine Spongiform Encephalopathy virus) processing. They are collected
          from end consumers of meat to guarantee the health of animals.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Bone Types</h3>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border border-gray-300 w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Bone Type</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Nutritional Components (%)</th>
                <th className="border px-4 py-2">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Dry Defatted Bones</td>
                <td className="border px-4 py-2">Cleaned, boiled, dried</td>
                <td className="border px-4 py-2">Ca: 25–30, P: 12–15</td>
                <td className="border px-4 py-2">Animal feed, pet food</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Crushed/Broken Bones</td>
                <td className="border px-4 py-2">Mechanically broken</td>
                <td className="border px-4 py-2">Ca: 20–25, Protein: 10–12</td>
                <td className="border px-4 py-2">Fertilizer, bone meal</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bone Meal</td>
                <td className="border px-4 py-2">Large unbroken bones</td>
                <td className="border px-4 py-2">Ca: 28–32, P: 12–16</td>
                <td className="border px-4 py-2">Fertilizer, feed</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Whole Bones</td>
                <td className="border px-4 py-2">Finely ground, sterilized</td>
                <td className="border px-4 py-2">Rich in collagen</td>
                <td className="border px-4 py-2">Crafts, gelatin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Raw Bones</td>
                <td className="border px-4 py-2">Unprocessed, frozen</td>
                <td className="border px-4 py-2">Moisture: 30%, Protein: 20%</td>
                <td className="border px-4 py-2">Pet chews</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Packaging</h3>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border border-gray-300 w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Size / Weight</th>
                <th className="border px-4 py-2">Material</th>
                <th className="border px-4 py-2">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">WPP Bags</td>
                <td className="border px-4 py-2">25 / 50 kg</td>
                <td className="border px-4 py-2">Woven polypropylene</td>
                <td className="border px-4 py-2">Crushed bones, bone meal</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jumbo Bags</td>
                <td className="border px-4 py-2">500–1,000 kg</td>
                <td className="border px-4 py-2">UV-treated WPP</td>
                <td className="border px-4 py-2">Bulk bone meal</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">HDPE Drums</td>
                <td className="border px-4 py-2">100–200 liters</td>
                <td className="border px-4 py-2">High-density polyethylene</td>
                <td className="border px-4 py-2">Defatted bones</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cardboard Cartons</td>
                <td className="border px-4 py-2">25–30 kg</td>
                <td className="border px-4 py-2">Corrugated board</td>
                <td className="border px-4 py-2">Whole bones</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bulk Containers</td>
                <td className="border px-4 py-2">Up to 20 MT</td>
                <td className="border px-4 py-2">Palletized bales</td>
                <td className="border px-4 py-2">Dry bones</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Origin of Product: Pakistan</li>
          <li>HS Code: 0506.10</li>
          <li>Minimum Order: 20,000 - 24,000 Kg</li>
          <li>Preferable Shipment: Sea Port</li>
          <li>Payment Terms: Advance Payment, CAD, LC (Negotiable)</li>
          <li>Incoterms: FOB, CIF, CFR, CIP (Negotiable)</li>
          <li>Delivery Time: 2 – 3 Months (Negotiable)</li>
        </ul>

<div className="mt-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-700 text-center">
          Export Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Animal Quarantine Clearance",
              description:
                "Confirms bones are disease-free and safe for processing or industrial use.",
              img: ippc  ,
            },
            {
              title: "Fumigation Certificate",
              description:
                "Treatment confirmation to kill pathogens or pests.",
              img: pest ,
            },
            {
              title: "Health Certificate",
              description:
                "Issued after veterinary inspection to verify origin and safety.",
              img: nongmo ,
            },
            {
              title: "Halal Certificate",
              description:
                "Ensures bones were derived from Halal-slaughtered animals.",
              img: halal ,
            },
            {
              title: "Certificate of Origin",
              description:
                "Provides traceability and trade validation.",
              img: coo ,
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
        {/* <div className="mt-6 flex gap-4 flex-wrap">
          <div className="bg-gray-100 px-4 py-2 rounded">Punjab Halal Development Authority</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Livestock & Dairy Development Dept</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Pakistan Animal Quarantine Dept</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Punjab Food Authority</div>
        </div> */}
      </div>
    </section>
  );
};

export default BonesExportComponent;