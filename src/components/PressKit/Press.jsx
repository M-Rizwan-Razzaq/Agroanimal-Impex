import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./press.css";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import CompoHeader from "../common/CompoHeader";
import compoheaderimg from "../../images/contactus1.jpg";

import PressCard from "./PressCard";
import pressKitData from "./pressData";

const Press = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <CompoHeader name="Certificates" image={compoheaderimg} />

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Certificates</h2>
            <p className="mt-4 text-gray-600">
              Explore our collection of verified certificates that represent our achievements, skills, and successful course completions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-6 py-5">
                <div className="flex items-center">
                  <HiOutlineDocumentCheck className="h-6 w-6 text-gray-400" />
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    Course Certificates
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Certificates awarded after completing professional training and educational programs.
                </p>
              </div>
              <a
                href="#"
                className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg"
              >
                View Certificates
              </a>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-6 py-5">
                <div className="flex items-center">
                  <PiCertificateBold className="h-6 w-6 text-gray-400" />
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    Awards & Honors
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Recognitions and awards for outstanding performance and contributions.
                </p>
              </div>
              <a
                href="#"
                className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg"
              >
                View Awards
              </a>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-6 py-5">
                <div className="flex items-center">
                  <MdOutlineVerified className="h-6 w-6 text-gray-400" />
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    Verifications
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Verified certifications and credentials issued by trusted platforms.
                </p>
              </div>
              <a
                href="#"
                className="px-6 py-3 bg-green-900 text-white text-sm font-medium rounded-b-lg"
              >
                Verify Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* certificate section  */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Latest Certificates
        </h2>

        {/* Certificate List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pressKitData.map((press, index) => (
            <PressCard press={press} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
