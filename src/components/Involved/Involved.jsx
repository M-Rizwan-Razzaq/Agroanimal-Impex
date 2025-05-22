import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import wheatStraw from "../../assest/wheatstraw.jpg";
import silage from "../../assest/silage.jpg";
import bones from "../../assest/bones.jpg";
import meat from "../../assest/meat.jpg";
import salts from "../../assest/salts.jpg";
import garlic from "../../assest/garlic.jpg";
import ginger from "../../assest/ginger.jpg";
import surgical from "../../assest/Sergical.jpg";

const Involved = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2022/07/05/08/41/agriculture-7302617_1280.jpg"
            alt="Farm Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center text-white absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Get Involved with Agroanimal Impex</h1>
          <p className="text-lg mt-4">
            Join us in revolutionizing the agricultural and animal feed industries. Discover a wide range of products, from feed to meat, and contribute to sustainable growth.
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-8">
            Explore Our Products
          </button>
        </div>
      </section>

      <div className="md:px-6 px-3">
        {/* Products Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Quality Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Wheat Straw */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={wheatStraw}
                alt="Wheat Straw"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Wheat Straw</h4>
              <p className="text-gray-700">
                High-quality wheat straw for animal bedding and feed. Sustainable and eco-friendly.
              </p>
            </div>

            {/* Product 2: Silage */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={silage}
                alt="Silage"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Silage</h4>
              <p className="text-gray-700">
                Nutrient-rich silage to promote healthy livestock and ensure sustainable farming practices.
              </p>
            </div>

            {/* Product 3: Bones */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={bones}
                alt="Bones"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Bones</h4>
              <p className="text-gray-700">
                High-quality bones for animal feed and nutritional purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Products */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 4: Meat */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={meat}
                alt="Meat"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Meat</h4>
              <p className="text-gray-700">
                Fresh and high-quality meat sourced from trusted suppliers for the food industry.
              </p>
            </div>

            {/* Product 5: Salts */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={salts}
                alt="Salts"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Salts</h4>
              <p className="text-gray-700">
                Premium salts for animal health, food seasoning, and preservation.
              </p>
            </div>

            {/* Product 6: Garlic */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={garlic}
                alt="Garlic"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Garlic</h4>
              <p className="text-gray-700">
                High-quality garlic for food, medicinal purposes, and animal health.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 7: Ginger */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={ginger}
                alt="Ginger"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Ginger</h4>
              <p className="text-gray-700">
                Fresh ginger for culinary use and health benefits.
              </p>
            </div>

            {/* Product 8: Surgical Items */}
            <div className="rounded-lg shadow-md p-4">
              <img
                src={surgical}
                alt="Surgical"
                className="w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Surgical Items</h4>
              <p className="text-gray-700">
                Premium surgical tools for animal care and veterinary needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
          <p className="text-lg mb-8">
            Contact us today to place an order or learn more about how our products can benefit your agricultural and livestock needs.
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
            Get in Touch
          </button>
        </section>
      </div>
    </div>
  );
};

export default Involved;
