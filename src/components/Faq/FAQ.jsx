import React from "react";
import "./faq.css";
import faqimage from "../../images/Faq12.jpg";
import secImg from "../../images/TriasseaIcon.png";

const containerStyle = {
  position: "relative",
  textAlign: "center",
  color: "rgb(201, 236, 236)",
};

const imageStyle = {
  width: "100%",
};

const textOnImageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "70px",
  // fontStyle: "bold",
  lineHeight: "0.02rem",
  marginTop: "0.8rem",
};

const links = {
  position: "absolute",
  top: "37%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "23px",
  fontFamily: "cursive",
  display: "flex",
  justifyContent: "center",
  width: "100%", // Ensure the links take up the full width
};

const linkStyle = {
  margin: "0 15px",
  transition: "all 0.2s ease-in-out",
  // marginTop: "9%", // Adjust the margin as needed
};

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  // Add your form submission logic here
};
const FAQ = () => {
  return (
    <div>
      <section>
        <div className="something mt-[4.45%]" style={containerStyle}>
          <img
            className="contactimage h-[400px]"
            src={faqimage}
            alt="Contact Us"
            style={imageStyle}
          />
          <div className="flex justify-between items-center " style={links}>
            <a
              className="text-red-700 hover:text-yellow-400"
              style={linkStyle}
              href="/"
            >
              Home
            </a>
            <h1 className="text-red-700" style={linkStyle}>
              Faq
            </h1>
          </div>
          <h1 style={textOnImageStyle}>Faq</h1>
        </div>
      </section>
      <section className="grid grid-cols-1 mb-10 mt-20 mr-5 gap-20 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="ml-6 mb-4">
          <div className="mb-10 md:ml-1 lg:ml-2 ">
            <span className="flex justify-start ml-0 items-center gap-1">
              <img className="w-6" src={secImg} alt="" />
              <h3 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                Contact With Us
              </h3>
            </span>
            <h1 className="form-hedding" style={{ fontSize: "50px" }}>
              Ready to Work With Us
            </h1>
          </div>
          {/* Form Fields */}
          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="name"
              className="block text-sm ml-2 font-medium text-gray-700"
            >
              Name
            </label>

            <label
              htmlFor="email"
              className="block text-sm ml-4 font-medium text-gray-700"
            >
              Email Address
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="name"
              name="name"
              required={true}
              placeholder="Your Full Name"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="email"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="phone"
              className="block mt-4 ml-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <label
              htmlFor="category"
              className="block mt-4 ml-4 text-sm font-medium text-gray-700"
            >
              Select Service
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              required={true}
              placeholder="Phone"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            <select
              id="category"
              name="category"
              required={true}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Service</option>
              <option value="agriculture">Agriculture Products</option>
              <option value="fresh">Fresh Vegetable</option>
              <option value="dairy">Dairy Products</option>
              <option value="organic">Organic Products</option>
              <option value="farm">Farm House</option>
              <option value="harvest">Harvest Incentive</option>
              <option value="vegetable">Vegetable Firms</option>
              <option value="water">Water Management</option>
            </select>
          </div>

          <label
            htmlFor="message"
            className="block mt-4 ml-2 text-sm font-medium text-gray-700"
          >
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 w-full h-[200px] border border-gray-300 rounded-md"
            style={{ resize: "none" }}
          ></textarea>
          <div className="mt-4">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              required={true}
              className="mr-2"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-700">
              Save my name and email in this browser for the next time I
              comment.
            </label>
          </div>
          <button type="submit" className="submitButton">
            submit
          </button>
        </form>

        <div className="mt-8 md:mt-0 lg:ml-10 lg:mt-5">
          <img
            className="final-img rounded-md cursor-pointer w-[600px] h-[600px]"
            src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/10/Contact-1.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="my-4 bg-slate-600 text-white">
        <div className="w-[50%]">
          <div className="item">
            <div className="header p-6 bg-slate-900 font-white">
              <div>step1</div>
              <div>overview</div>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                voluptatum, dolor magni tenetur magnam commodi praesentium
                repellat, minima distinctio nesciunt provident ex ad quod,
                beatae aspernatur? Delectus dolore saepe soluta.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                voluptatum, dolor magni tenetur magnam commodi praesentium
                repellat, minima distinctio nesciunt provident ex ad quod,
                beatae aspernatur? Delectus dolore saepe soluta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
