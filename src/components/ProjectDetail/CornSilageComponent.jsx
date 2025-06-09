import React, { useEffect } from 'react';

const CornSilageComponent = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Corn Silage</h2>
     
     <div className=' w-full h-64 rounded-md mb-4 shadow'> <img
        src="/products/cornsilage.jpg" // Replace with actual image path
        alt="Corn Silage Block"
        className=" w-full h-64 object-contain "
      /></div>

      <p className="mb-4 text-gray-700">
        Corn Silage is a palatable, fermented, and preserved form of fodder used in
        Livestock Feeding. We are committed to deliver product with Product Stewardship
        ensuring quality & in time delivery.
      </p>

      <h3 className="text-lg font-semibold mb-2 text-green-700">Proximate Quality Analysis of Corn Silage (Dry Matter Basis)</h3>
      <table className="w-full mb-4 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 text-left">Component</th>
            <th className="border px-2 py-1 text-left">Percentage %</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Dry Matter', '30 - 35'],
            ['Crude Protein', '7 - 9'],
            ['Ether Extract (Fat)', '1.5'],
            ['Crude Fiber', '18 - 25'],
            ['Nitrogen Free Extract', '55 - 60'],
            ['Acid Detergent Fiber', '25 - 35'],
            ['Neutral Detergent Fiber', '45 - 55'],
            ['Ash', '6 - 8'],
          ].map(([component, percent], idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{component}</td>
              <td className="border px-2 py-1">{percent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 text-green-700">Available Sizes</h3>
      <table className="w-full mb-4 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">Dimension (Inches)</th>
            <th className="border px-2 py-1">Weight (Kg)</th>
            <th className="border px-2 py-1">Packaging</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Standard Block', '24 * 18 * 16', '35 - 45', 'Vacuum packed, Plastic wrapped'],
            ['Large Block', '32 * 24 * 20', '80 - 100', 'Bulk Order'],
            ['Mini Block', '18 * 16 * 14', '25 - 30', 'For Sheep & Goats'],
          ].map(([type, dimension, weight, packaging], idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{type}</td>
              <td className="border px-2 py-1">{dimension}</td>
              <td className="border px-2 py-1">{weight}</td>
              <td className="border px-2 py-1">{packaging}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mb-4 text-gray-700">
        <strong>Packaging Notes:</strong> 60 – 70% Moisture, pH: 4.0, Shelf Life: 1 year
      </p>

      <h3 className="text-lg font-semibold mb-2 text-green-700">Terms & Conditions</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Origin:</strong> Pakistan</li>
        <li><strong>HS Code:</strong> 2308.00</li>
        <li><strong>Lab Quality Assessment (Toxin & Entophyte):</strong> Negotiable</li>
        <li><strong>Feed Additive & Inoculum Addition:</strong> Negotiable</li>
        <li><strong>Minimum Order Weight:</strong> 20,000 - 24,000 Kg</li>
        <li><strong>Preferable Shipment:</strong> Sea Port</li>
        <li><strong>Payment Terms:</strong> Advanced Payment, CAD, L/C (Negotiable)</li>
        <li><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</li>
        <li><strong>Delivery Time:</strong> 2 – 3 Months (Negotiable)</li>
      </ul>

      <div className="mt-6 flex gap-4 items-center">
        <img src="/products/cornimg (1).jpg" alt="Department of Plant Protection" className="w-20 h-auto" />
        <img src="/products/cornimg (2).jpg" alt="Livestock Department" className="w-20 h-auto" />
        <img src="/products/cornimg (3).jpg" alt="Agriculture Department" className="w-20 h-auto" />
        <img src="/products/cornimg (1).jpeg" alt="Meezan Bank" className="w-20 h-auto" />
      </div>
    </section>
  );
};

export default CornSilageComponent;