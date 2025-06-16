import React, { useEffect } from 'react';

const GingerManifesto = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  const exportForms = [
    { form: 'Fresh Ginger', description: 'Raw, unprocessed ginger root, cleaned and packed for export.' },
    { form: 'Dried Ginger', description: 'Sun-dried or machine-dried ginger slices or whole roots.' },
    { form: 'Powdered Ginger', description: 'Finely ground ginger used for culinary and medicinal purposes.' },
    { form: 'Ginger Slices', description: 'Thin slices of dried or fresh ginger, often vacuum packed.' },
    { form: 'Ginger Paste', description: 'Crushed ginger blended into a paste, packed in jars or pouches.' },
  ];

  const nutrition = [
    { nutrient: 'Calories', amount: '80 kcal' },
    { nutrient: 'Carbohydrates', amount: '17.8 g' },
    { nutrient: 'Protein', amount: '1.8 g' },
    { nutrient: 'Fat', amount: '0.8 g' },
    { nutrient: 'Fiber', amount: '2.0 g' },
    { nutrient: 'Vitamin C', amount: '5 mg' },
    { nutrient: 'Magnesium', amount: '43 mg' },
    { nutrient: 'Potassium', amount: '415 mg' },
  ];

  const uses = [
    { use: 'Culinary', description: 'Used as a spice in cooking for its flavor and aroma.' },
    { use: 'Medicinal', description: 'Helps with digestion, nausea, and inflammation. Also used in livestock animals.' },
    { use: 'Tea', description: 'Brewed into herbal teas for its soothing properties.' },
    { use: 'Cosmetics', description: 'Used in skincare products for anti-inflammatory benefits.' },
    { use: 'Food Processing', description: 'Used in sauces, marinades, and health drinks.' },
  ];

  const images = [
    { src: '/products/rootginger.jpg', alt: 'Fresh Ginger Root' },
    { src: '/products/dryginger.jpg', alt: 'Dried Ginger Slices' },
    { src: '/products/powderginger.jpg', alt: 'Ginger Powder Pack' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-center text-orange-800">GINGER PRODUCT</h1>

      <p className="text-gray-700 text-center">
        <strong>AGROANIMAL IMPEX (SMC-PRIVATE) LIMITED</strong> is specialized in product stewardship and export of premium-quality ginger to international markets.
        Based in Pakistan, an agricultural country, our close liaison with local farmers ensures a sustainable and consistent supply of fresh, aromatic, and nutrient-rich ginger.
      </p>
      <p className="text-gray-700 text-center">
        Our state-of-the-art processing facilities adhere to international hygiene and quality standards, including ISO, HACCP, and GlobalG.A.P. Certifications.
        With a commitment to excellence, timely delivery, and customer satisfaction, we serve clients across Asia, the Middle East, Europe, and North America.
        Trust AGROANIMAL IMPEX as your reliable partner in global ginger trade.
      </p>

      {/* Product Images Section */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-orange-700 mb-4 text-center">Product Showcase</h2>
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

      {/* Export Forms */}
      <div className="bg-white border p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-orange-700 mb-2">Ginger Export Information</h2>
        <table className="w-full border text-sm">
          <thead className="bg-orange-100 text-gray-900">
            <tr>
              <th className="border px-4 py-2 text-left">Form</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {exportForms.map((item, idx) => (
              <tr key={idx} className="text-gray-700">
                <td className="border px-4 py-2">{item.form}</td>
                <td className="border px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nutritional Value */}
      <div className="bg-gray-100 p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-orange-700">Ginger Nutritional Value (per 100g)</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-6 text-gray-800 mt-2">
          {nutrition.map((item, idx) => (
            <li key={idx}>
              <strong>{item.nutrient}:</strong> {item.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Uses */}
      <div className="bg-white border p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold text-orange-700">Uses of Ginger</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          {uses.map((item, idx) => (
            <li key={idx}><strong>{item.use}:</strong> {item.description}</li>
          ))}
        </ul>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 p-4 rounded-md border shadow">
        <h2 className="text-xl font-semibold text-orange-700 mb-2">Terms & Conditions</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-1">
          <li><strong>Origin of Product:</strong> Pakistan</li>
          <li><strong>Lab Quality Assessment:</strong> Toxin & Entophyte (Negotiable)</li>
          <li><strong>Minimum Order Requirements:</strong> 100 kg per order (negotiable based on product type)</li>
          <li><strong>Quality Test:</strong> Negotiable, quality assurance by ISO/HACCP standards</li>
          <li><strong>Preferably Mode of Shipment:</strong> Sea Port & Air Port</li>
          <li><strong>Payment Terms:</strong> Advanced Payment, CAD, TT, LC (Negotiable)</li>
          <li><strong>Incoterms:</strong> FOB, CIF, CFR, CIP (Negotiable)</li>
          <li><strong>Delivery Time:</strong> Negotiable, ensuring product stewardship</li>
        </ul>
      </div>
    </div>
  );
};

export default GingerManifesto;
