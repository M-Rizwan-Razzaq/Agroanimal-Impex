import React, { useEffect } from 'react';
// import agridairy from "../../assest/agricollege.jpeg"; 
// import surgical from "../../assest/surgicalcollege.jpeg";



const ImportAgriDairyTech = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const products = [
    {
      sno: 1,
      type: 'Ultrasound Scanner (Portable)',
      hsCode: '9018.12',
      category: 'Livestock Equipment',
      uses: 'Used for pregnancy diagnosis and reproductive monitoring in dairy animals',
      packaging: 'Handheld with probes',
    },
    {
      sno: 2,
      type: 'Automatic Milking Machine & Single Bucket',
      hsCode: '8434.20 / 8434.10',
      category: 'Dairy Equipment',
      uses: 'Automates milking to improve hygiene, reduce labor, and enhance efficiency',
      packaging: 'With teat cups and vacuum unit',
    },
    {
      sno: 3,
      type: 'Milk Analyzer',
      hsCode: '9027.80.90',
      category: 'Dairy Equipment',
      uses: 'Rapid testing of milk quality including fat, SNF, and protein levels',
      packaging: 'Portable or tabletop units',
    },
    {
      sno: 4,
      type: 'Semen (Indigenous & Exotic Breeds)',
      hsCode: '0511.10',
      category: 'Dairy',
      uses: 'Indigenous: Sahiwal, Cholistani, Dhanni | Exotic: Holstein Friesian, Jersey',
      packaging: '0.25 ML straws in liquid nitrogen container',
    },
    {
      sno: 5,
      type: 'Forages & Fodder Seeds',
      hsCode: '1209.29.80',
      category: 'Agriculture Products',
      uses: 'Improves crop yield, weather stress resistance',
      packaging: 'Seeds of forage plants',
    },
    {
      sno: 6,
      type: 'Agriculture By-products (Cakes and Meals)',
      hsCode: '2302–2308 / 2306.90',
      category: 'Agriculture Products',
      uses: 'Alternate feeding sources in dairy sector',
      packaging: 'Negotiable',
    },
    {
      sno: 7,
      type: 'Medical & Veterinary Items (Syringes, Catheters, etc.)',
      hsCode: '9018.39 / 9018.90.84',
      category: 'Veterinary Medical',
      uses: 'Innovation in animal health management',
      packaging: 'N/A',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-center text-green-700">IMPORT</h1>
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        AGRICULTURE & DAIRY TECHNOLOGY PRODUCTS
      </h2>

      <p className="text-center text-gray-700">
        We specialize in importing cutting-edge agriculture and dairy technology products to enhance efficiency and productivity. Our range includes precision farming equipment, dairy machinery, and smart irrigation systems, aiming to help local farmers and dairy producers improve yield, reduce costs, and ensure quality.
      </p>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-800 font-medium">
            <tr>
              <th className="border px-4 py-2">S.No.</th>
              <th className="border px-4 py-2">Product Type</th>
              <th className="border px-4 py-2">HS Code</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Uses</th>
              <th className="border px-4 py-2">Packaging / Format</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.sno} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.sno}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td className="border px-4 py-2">{item.hsCode}</td>
                <td className="border px-4 py-2">{item.category}</td>
       <td className="border px-4 py-2" title={item.uses}>{item.uses}</td>
                <td className="border px-4 py-2">{item.packaging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Images Section */}
     {/* Images Section - Matching Table Products */}
<div className="text-center mt-10">
  <h3 className="text-lg font-semibold text-green-700 mb-4">Product Visuals</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        src: "/products/ultrasound.jpg",
        alt: "Ultrasound Scanner",
        label: "Ultrasound Scanner",
      },
      {
        src: "/products/milkingmachine.jpg",
        alt: "Milking Machine",
        label: "Milking Machine",
      },
      {
        src: "/products/milkanalyzer.jpg",
        alt: "Milk Analyzer",
        label: "Milk Analyzer",
      },
      {
        src: "/products/semem.jpeg",
        alt: "Semen (Indigenous & Exotic)",
        label: "Semen (Indigenous & Exotic)",
      },
      {
        src: "/products/forage.jpg",
        alt: "Forage & Fodder Seeds",
        label: "Fodder Seeds",
      },
      {
        src: "/products/cotton seed cake.jpg",
        alt: "Agriculture By-products",
        label: "Cakes & Meals",
      },
      {
        src: "/products/diathermy.jpg",
        alt: "Agriculture By-products",
        label: "Diathermy",
      },
      {
        src: "/products/syringe.jpg",
        alt: "Vet Items (Syringes, Catheters)",
        label: "Syringes",
      },
      {
        src: "/products/silk suture.jpg",
        alt: "Vet Items (silk suture,)",
        label: "Silk Suture",
      },
      {
        src: "/products/insemination.jpg",
        alt: "Vet Items (insemination)",
        label: "Insemination",
      },
      {
        src: "/products/catgut ch.jpg",
        alt: "Vet Items (catgut)",
        label: "Catgut sutures",
      },
      {
        src: "/products/catheter.jpg",
        alt: "Vet Items (Catheter)",
        label: "Catheter",
      },
    ].map(({ src, alt, label }, idx) => (
      <div key={idx} className="text-center ">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-fill rounded-md shadow-md"
        />
        <p className="mt-2 text-sm text-gray-700">{label}</p>
      </div>
    ))}
  </div>
</div>


      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {/* Replace with actual logo images */}
        <img src="/agrologo.png" alt="Company Logo" className="h-20" />
        <img src="/products/iso salt.webp" alt="ISO Certified" className="h-20" />
        <img src="/products/secp.jpeg" alt="SECP" className="h-20" />
        <img src="/products/cornimg (1).jpeg" alt="Meezan Bank" className="h-20" />
        <img src="/products/sbp.png" alt="State Bank of Pakistan" className="h-20" />
      </div>
    </div>
  );
};

export default ImportAgriDairyTech;
