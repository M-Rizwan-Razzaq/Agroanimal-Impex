import React from "react";
import "./AboutUsPage.css";
import aboutUsHeader from "../../images/AboutUs.jpg";
import CompoHeader from "../common/CompoHeader";
import About from "../About/About";
const AboutUsPage = () => {
  return (
    <div>
      <section>
        <CompoHeader name="About Us" image={aboutUsHeader} />
      </section>
      <section className="mb-10">
        <About />
      </section>
    </div>
  );
};

export default AboutUsPage;
