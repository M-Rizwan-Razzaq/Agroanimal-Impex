import React from "react";
import "./partnership.css";
import CompoHeader from "../common/CompoHeader";
import PartnershipImage from "../../images/partnership.jpg";

function Partnership() {
  return (
    <div>
      <section>
        <CompoHeader
          className="h-[600px]"
          name="Partnership"
          image={PartnershipImage}
        />
      </section>

      <section className=" mt-20">
        <div>
          <h1 className="flex justify-center text-5xl">
            Partnerships for Sustainable Agriculture
          </h1>
          <p className="flex justify-center items-center text-2xl ml-10 mr-10 mt-10 text-green-600 text-center">
            Agriculture’s far-reaching impacts make it equally crucial to widen
            our view and gain new insights by entering multidisciplinary
            partnerships across agricultural value chains. Partnership is
            essential if we are to successfully drive advances in sustainable
            agriculture. Together, we can help farmers grow healthy, affordable,
            high-quality food safely and protect the land that we all hold in
            trust for future generations.
          </p>
          <p className="flex justify-center items-center text-base mt-10 ml-10 mr-10 text-center text-gray-500">
            We are a team of dedicated people who care about the future of
            farming. We apply our knowledge and passion to help farmers find the
            right balance to achieve better yield.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-20 ml-10 mr-10">
          <div>
            <h1 className="text-3xl flex text-start">
              Transformation requires partnership
            </h1>
            <p className="mt-5 text-lg">
              We fully support the implementation of the United Nations
              Sustainable Development Goals (SDGs) to establish and foster
              sustainable business practices at economic, social and
              environmental level.
            </p>
            <p className="mt-5 text-lg">
              We focus on topics where we as a company can make a significant
              contribution, such as food security, climate action, responsible
              consumption and partnership.
            </p>
          </div>
          <div className="ml-10">
            <img
              className="w-[600px] h-[350px]"
              src="https://dynamicassets.basf.com/is/image/basf/E_SDG_logo_without_UN_emblem_square_CMYK:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center mt-20">
        <div className="relative h-[350px] ml-20 mr-20 w-full bg-green-500">
          <img
            className="absolute h-[350px] w-[580px]"
            src="https://dynamicassets.basf.com/is/image/basf/United%20for%20the%20Biggest%20Job%20on%20Earth_P293e_1000025247:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
          <h1 className="absolute top-3 left-[51%] text-white text-3xl">
            BASF hosts roundtable discussions on cotton at the United Nations
            headquarters
          </h1>
          <p className="absolute bottom-[8%] left-[51%] text-xl">
            Farmers across the globe are working to meet the ever-increasing
            demand for sustainably grown cotton. BASF brought together a global
            delegation of farmers from Europe and the United States to ensure
            their voices are heard and supported. This is one way how BASF
            contributes to the United Nations Sustainable Development Goals.
          </p>
        </div>
      </section>

      <section className="mt-20"></section>
    </div>
  );
}

export default Partnership;
