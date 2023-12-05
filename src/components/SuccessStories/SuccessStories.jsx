// SuccessStories.js
import React from "react";
import {
  BsCheckCircleFill,
  BsPeopleFill,
  BsBarChartLineFill,
} from "react-icons/bs";

const SuccessStories = () => {
  return (
    <section className="bg-gray-100 py-16" id="success-stories">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600">
            Inspiring tales of farmers who have transformed their lives and
            communities through sustainable agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
            <img
              src="https://picsum.photos/200/300?image=1028"
              alt="Success Story Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Farmer John's Sustainable Harvest
              </h3>
              <p className="text-gray-700 mb-4">
                Farmer John, once struggling with dwindling crop yields,
                embraced organic farming practices.
              </p>
              <div className="flex items-center">
                <BsCheckCircleFill className="text-green-500 mr-2" />
                <span className="text-gray-600">Sustainable Practices</span>
              </div>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
            <img
              src="https://picsum.photos/200/300?image=1029"
              alt="Success Story Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Farmer Jane's Community Impact
              </h3>
              <p className="text-gray-700 mb-4">
                Farmer Jane, driven by a passion for empowering her community,
                established a farmers' cooperative.
              </p>
              <div className="flex items-center">
                <BsPeopleFill className="text-blue-500 mr-2" />
                <span className="text-gray-600">Community Empowerment</span>
              </div>
            </div>
          </div>

          {/* Success Story 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
            <img
              src="https://picsum.photos/200/300?image=1030"
              alt="Success Story Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Farmer David's Technological Leap
              </h3>
              <p className="text-gray-700 mb-4">
                Farmer David, embracing technological innovation, adopted
                precision agriculture techniques.
              </p>
              <div className="flex items-center">
                <BsBarChartLineFill className="text-purple-500 mr-2" />
                <span className="text-gray-600">
                  Technological Advancements
                </span>
              </div>
            </div>
          </div>

          {/* Success Story 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
            <img
              src="https://picsum.photos/200/300?image=1040"
              alt="Success Story Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Farmer Mary's Organic Revolution
              </h3>
              <p className="text-gray-700 mb-4">
                Farmer Mary pioneered the organic farming movement in her
                region, showcasing the benefits of pesticide-free agriculture.
              </p>
              <div className="flex items-center">
                <BsCheckCircleFill className="text-green-500 mr-2" />
                <span className="text-gray-600">Organic Farming</span>
              </div>
            </div>
          </div>

          {/* Success Story 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8">
            <img
              src="https://picsum.photos/200/300?image=1050"
              alt="Success Story Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Farmer Sarah's Green Innovation
              </h3>
              <p className="text-gray-700 mb-4">
                Farmer Sarah introduced innovative irrigation methods,
                conserving water and ensuring sustainable farming practices.
              </p>
              <div className="flex items-center">
                <BsBarChartLineFill className="text-purple-500 mr-2" />
                <span className="text-gray-600">Green Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
