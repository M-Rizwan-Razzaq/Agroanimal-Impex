import React from "react";
import "./partnership.css";
import CompoHeader from "../common/CompoHeader";
import PartnershipImage from "../../images/partnership.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

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
          <p className="flex justify-center items-center text-2xl ml-10 mr-10 mt-10 text-green-900 text-center">
            Agriculture’s far-reaching impacts make it equally crucial to widen
            our view and gain new insights by entering multidisciplinary
            partnerships across agricultural value chains. Partnership is
            essential if we are to successfully drive advances in sustainable
            agriculture. Together, we can help farmers grow healthy, affordable,
            high-quality food safely and protect the land that we all hold in
            trust for future generations.
          </p>
          <p className="flex justify-center items-center text-base mt-10 ml-10 mr-10 text-center text-gray-800">
            We are a team of dedicated people who care about the future of
            farming. We apply our knowledge and passion to help farmers find the
            right balance to achieve better yield.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-20 ml-10 mr-10 shadow-2xl rounded-lg ">
          <div className="ml-10">
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
              className="w-[600px] h-[350px] rounded-tr-lg rounded-br-lg"
              src="https://dynamicassets.basf.com/is/image/basf/E_SDG_logo_without_UN_emblem_square_CMYK:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 bg-green-900 ml-10 mr-10 rounded-lg shadow-2xl">
        <div className="">
          <img
            className="h-[380px] w-[700px] rounded-tl-lg rounded-bl-lg "
            src="https://dynamicassets.basf.com/is/image/basf/United%20for%20the%20Biggest%20Job%20on%20Earth_P293e_1000025247:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
        <div className="ml-3 mr-6">
          <h1 className="text-3xl mt-5 text-gray-800">
            BASF hosts roundtable discussions on cotton at the United Nations
            headquarters
          </h1>
          <p className="text-lg text-white mt-5">
            Farmers across the globe are working to meet the ever-increasing
            demand for sustainably grown cotton. BASF brought together a global
            delegation of farmers from Europe and the United States to ensure
            their voices are heard and supported. This is one way how BASF
            contributes to the United Nations Sustainable Development Goals.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 bg-green-900 ml-10 mr-10 rounded-lg shadow-2xl">
        <div className="ml-3 mr-6">
          <h1 className="text-3xl mt-5 text-gray-800">
            BASF, Syngenta, and Arisa collaborate to improve labor standards in
            India’s vegetable seeds sector.
          </h1>
          <p className="text-lg text-white mt-5">
            Launch of phase two for their multistakeholder collaboration, Wage
            Improvements in Seed Hybrids (WISH). Initiated in 2022, WISH focuses
            on addressing minimum wage compliance issues and child labor issues
            in India’s vegetable seed sector.
          </p>
        </div>
        <div className="">
          <img
            className="h-[380px] w-[700px] rounded-tr-lg rounded-br-lg "
            src="https://dynamicassets.basf.com/is/image/basf/20160725_113653-1:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
      </section>

      <section className="mt-20 ml-10 py-4 mr-10 shadow-2xl rounded-lg">
        <h1 className="flex justify-center items-center ml-8 text-5xl text-green-900 opacity-100">
          Examples of collaborations and joint initiatives
        </h1>
        <div className="opacity-100">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-green-900 rounded-lg">
                <a
                  href="/"
                  className="flex flex-col text-3xl mt-4 hover:text-white"
                >
                  <img
                    className=""
                    src="https://dynamicassets.basf.com/is/image/basf/CSF-T-shirt-pink:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=414&hei=233"
                    alt=""
                  />
                  <span className="ml-4 mt-8 mb-6">
                    Certified Sustainable FiberMax (CSF)
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-900 rounded-lg">
                <a
                  href="/"
                  className="flex flex-col text-3xl mt-4 hover:text-white"
                >
                  <img
                    className="w-[200px]"
                    src="https://dynamicassets.basf.com/is/image/basf/cotton_banner:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=414&hei=233"
                    alt=""
                  />
                  <span className="ml-4 mt-8 mb-6">
                    Certified Sustainable FiberMax (CSF)
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-900 rounded-lg">
                <a
                  href="/"
                  className="flex flex-col text-3xl mt-4 hover:text-white"
                >
                  <img
                    className=""
                    src="https://dynamicassets.basf.com/is/image/basf/Climate-smart-barley-production:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=414&hei=233"
                    alt=""
                  />
                  <span className="ml-4 mt-8 mb-6">
                    Certified Sustainable FiberMax (CSF)
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-900 rounded-lg">
                <a
                  href="/"
                  className="flex flex-col text-3xl mt-4 hover:text-white"
                >
                  <img
                    className=""
                    src="https://dynamicassets.basf.com/is/image/basf/P389_2283_B:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=414&hei=233"
                    alt=""
                  />
                  <span className="ml-4 mt-8 mb-6">
                    Certified Sustainable FiberMax (CSF)
                  </span>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 mb-20 bg-green-900 ml-10 mr-10 rounded-lg shadow-2xl">
        <div className="ml-3 mr-6">
          <h1 className="text-3xl mt-5 text-gray-800">
            Partnering With Farmers And Their Communities Around The Globe
          </h1>
          <p className="text-lg text-white mt-5">
            Learn more about our collaboration with farmers and their
            communities around the globe and how we create impact together.
          </p>
        </div>
        <div className="ml-[100px]">
          <img
            className="h-[330px] w-[540px] rounded-tr-lg rounded-br-lg "
            src="https://dynamicassets.basf.com/is/image/basf/empowering-women-in-india:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1280&hei=720"
            alt=""
          />
        </div>
      </section>

      <section className="bg-green-900 mb-10 w-[80%] ml-10 mr-10 rounded-lg shadow-2xl">
        <h1 className="ml-6 text-3xl py-6 text-gray-800">
          Change drivers within Partnerships for Sustainable Agriculture
        </h1>
        <div className="text-lg ml-6 pb-8 text-white">
          <div className="flex flex-row items-center gap-2 mb-2 cursor-pointer hover:text-yellow-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>SmallHolder Empowerment</p>
          </div>
          <div className="flex flex-row items-center gap-2 mb-2 cursor-pointer hover:text-yellow-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Farm Network</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;
