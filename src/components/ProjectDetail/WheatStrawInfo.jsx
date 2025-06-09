import React, { useEffect } from 'react';

const WheatStrawInfo = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const analysis = [
    { parameter: 'Organic Matter', composition: '92.87 ± 0.01' },
    { parameter: 'Crude Protein', composition: '4.35 ± 0.01' },
    { parameter: 'Ether Extract (Fat content)', composition: '0.9 ± 0.00' },
    { parameter: 'Crude Fiber', composition: '40 ± 0.057' },
    { parameter: 'Nitrogen Free Extract (Soluble Sugars)', composition: '49.40 ± 0.080' },
    { parameter: 'Neutral Detergent Fiber (NDF)', composition: '70 (includes ADF)' },
    { parameter: 'Acid Detergent Fiber (ADF)', composition: '40 - 45' },
    { parameter: 'Total Ash', composition: '5 - 7' },
    { parameter: 'Acid Insoluble Ash', composition: '1 - 2 (Ash Part)' },
    { parameter: 'Calcium', composition: '0.2 - 0.5 (Ash Part)' },
    { parameter: 'Phosphorus', composition: '0.05 - 0.1 (Ash Part)' },
  ];

  const exportStandards = [
    { type: 'Double Compressed Bale', dimension: '22 x 16 x 12', weight: '20–25 Kg' },
    { type: 'Triple Compressed Bale', dimension: '22 x 16 x 10', weight: '25–30 Kg' },
    { type: 'Half Block (Mini)', dimension: '16 x 12 x 10', weight: '10–15 Kg' },
  ];

  const terms = [
    { attribute: 'Origin of Product', value: 'Pakistan' },
    { attribute: 'HS Code', value: '1213.00' },
    { attribute: 'Lab Quality Assessment', value: 'Negotiable (Toxin & Entophyte)' },
    { attribute: 'Minimum Order (Weight)', value: '20,000 – 24,000 Kg' },
    { attribute: 'Minimum Order (Blocks – 22x16x12 inches)', value: '850 Blocks (Negotiable)' },
    { attribute: 'Preferably Shipment', value: 'Sea Port' },
    { attribute: 'Payment Terms', value: 'Advance, CAD, LC (Negotiable)' },
    { attribute: 'Incoterms', value: 'FOB, CIF, CFR, CIP (Negotiable)' },
    { attribute: 'Delivery Time', value: '2 – 3 Months (Negotiable)' },
  ];

  return (
    <div id="wheatstraw" className="max-w-7xl mx-auto px-4 py-10 pt-24 space-y-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Wheat Straw</h2>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <p className="text-gray-700 text-justify">
          Wheat straw is an agricultural by-product and a rich source of fiber. It is an essential part of feed for ruminant animals like cows and goats, commonly called roughages and forages. It serves as a rumen filler and promotes microbial growth in the rumen, enhancing digestion and animal productivity.
        </p>
        <img
          src="/products/wheatstraw (1).jpg"
          alt="Wheat Straw Block"
          className="w-full h-64 object-cover rounded-md shadow"
        />
      </div>

      {/* Proximate Analysis */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Proximate Analysis (Dry Matter Basis 100%)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Parameter / Attributes</th>
                <th className="border px-4 py-2 text-left">Composition</th>
              </tr>
            </thead>
            <tbody>
              {analysis.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.parameter}</td>
                  <td className="border px-4 py-2">{item.composition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Export Standard Sizes */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Export Standard Wheat Straw Block Sizes (inches)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Type (Compression)</th>
                <th className="border px-4 py-2 text-left">Dimensions (inches)</th>
                <th className="border px-4 py-2 text-left">Weight / Block</th>
              </tr>
            </thead>
            <tbody>
              {exportStandards.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.type}</td>
                  <td className="border px-4 py-2">{item.dimension}</td>
                  <td className="border px-4 py-2">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Terms & Conditions</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Attributes</th>
                <th className="border px-4 py-2 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {terms.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.attribute}</td>
                  <td className="border px-4 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Image */}
      <img
        src="/products/wheatstraw (2).jpg"
        alt="Wheat Straw Block"
        className="w-full h-64 object-cover rounded-md shadow"
      />
    </div>
  );
};

export default WheatStrawInfo;
