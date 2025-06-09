import React, { useEffect } from 'react';

const MeatManifesto = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const products = [
    { animal: 'Cattle', type: 'Beef', exportForm: 'Chilled / Frozen (Carcass, primal cuts)', packaging: 'Vacuum-packed or boxed, Halal certified' },
    { animal: 'Buffalo', type: 'Buffen', exportForm: 'Frozen / Chilled', packaging: 'Popular in Middle East & ASEAN markets' },
    { animal: 'Goat', type: 'Chevon', exportForm: 'Frozen / Chilled (whole or cuts)', packaging: 'Exported as 6-way or 4-way cuts' },
    { animal: 'Sheep', type: 'Mutton', exportForm: 'Frozen / Chilled', packaging: 'Often bone-in or boneless cuts' },
    { animal: 'Poultry', type: 'Chicken', exportForm: 'Frozen / Chilled (whole, cuts, parts)', packaging: 'IQF, vacuum-packed, trays or polybags' },
  ];

  const images = [
    { src: '/products/beef.jpg', alt: 'Fresh Halal Beef' },
    { src: '/products/mutton.jpg', alt: 'Chilled Mutton Cuts' },
    { src: '/products/chicken.jpg', alt: 'Vacuum-packed Chicken' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10">
      {/* ... previous sections here ... */}
 <h1 className="text-3xl font-bold text-center text-green-800">Meat Manifesto</h1>
      <p className="text-lg text-gray-700 text-center">
        Being Muslim and ethically responsible for delivering Halal meat and fresh taste at consumer dining table.
      </p>
      <p className="text-center font-medium text-green-600">
        Delivering the best taste of Pakistan to the world around
      </p>

      {/* Vision & Mission */}
      <div className="bg-white p-4 border rounded-md shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Our Mission & Vision</h2>
        <p className="text-gray-700">
          We strive to uphold Islamic values, animal welfare, and international standards in every stage of our meat processing and export. Our vision is to make Pakistan a top-tier Halal meat exporter by delivering premium quality to global consumers.
        </p>
      </div>

      {/* Why Pakistan */}
      <div className="bg-gray-100 p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-green-700">Why Pakistan?</h2>
        <p className="text-gray-700">
          Our country is blessed with natural pastures and an ideal climate for raising healthy livestock. Ranked 18th in global Halal meat exports, Pakistan is a trusted source of quality meat.
        </p>
      </div>

      {/* Certifications */}
      <div className="bg-white border p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-green-700">Our Certifications</h2>
        <p className="text-gray-700">
          Agroanimal Impex (Pvt) Ltd is accredited by all relevant Pakistani authorities and international agencies. We are members of reputed trade bodies and certified under ISO, HACCP, and Halal standards.
        </p>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2 text-green-700">Product List</h2>
        <table className="min-w-full bg-white border text-sm">
          <thead>
            <tr className="bg-green-200 text-gray-900">
              <th className="border px-4 py-2">Animal Type</th>
              <th className="border px-4 py-2">Meat Type</th>
              <th className="border px-4 py-2">Export Form</th>
              <th className="border px-4 py-2">Packaging/Remarks</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx} className="text-gray-700">
                <td className="border px-4 py-2">{item.animal}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td className="border px-4 py-2">{item.exportForm}</td>
                <td className="border px-4 py-2">{item.packaging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms */}
      <div className="bg-gray-50 p-4 rounded-md border shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Terms & Conditions</h2>
        <ul className="text-gray-800 space-y-1 list-disc pl-5">
          <li><strong>Origin:</strong> Pakistan</li>
          <li><strong>Minimum Order:</strong> 500 kg (negotiable)</li>
          <li><strong>Lab Quality Assessment:</strong> Toxin & Entophyte - Negotiable</li>
          <li><strong>Quality Tests:</strong> Halal certification, microbiological tests, veterinary certificate, ISO/HACCP standards</li>
          <li><strong>Preferred Shipment:</strong> Sea Port & Air Port</li>
          <li><strong>Payment Terms:</strong> Advance, CAD, TT, LC (Negotiable)</li>
          <li><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</li>
          <li><strong>Delivery Time:</strong> Negotiable, ensuring product stewardship</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white border p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-green-700">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>100% Halal slaughter under Islamic principles</li>
          <li>State-of-the-art cold chain and hygienic packaging</li>
          <li>Certified quality control labs for each batch</li>
          <li>Timely delivery and global export support</li>
          <li>Customized packaging available as per buyer needs</li>
        </ul>
      </div>

      {/* Contact Note */}
      <div className="bg-green-100 p-4 rounded-md text-center shadow">
        <p className="text-lg font-semibold text-green-800">Want to inquire or place an order?</p>
        <p className="text-gray-700">Contact us for samples, pricing, and further details. We look forward to doing business with you!</p>
      </div>
      {/* Product Images Section */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">Product Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover"
              />
              <p className="text-center text-sm font-medium text-gray-700 p-2">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ... remaining sections like Contact Note etc ... */}
    </div>
  );
};

export default MeatManifesto;
