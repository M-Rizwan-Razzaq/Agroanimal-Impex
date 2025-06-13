import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router-dom";
import About from "../About/About";
import Service from "../Services/Service";
import NHerosection from "../NHeroSection/NHerosection";
import ScrollToTop from "react-scroll-to-top";
// import Testimonial from "../Testimonial/Testimonial";
import Team from "../TeamMambers/OurTeam";
import "./home.css";
import WhatsAppButton from "./WhatsAppButton";
import Scroll from "./Scroll";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Use useNavigate to navigate after loading
      navigate("/"); // or any other route you want to navigate to
    }
  }, [loading, navigate]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-green-400">
          <HashLoader className="text-gray-700" size={80} />
        </div>
      ) : (
        <>
          <NHerosection />
          <WhatsAppButton />
          <Scroll/>
          <About />
          <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#ef4444", borderRadius: "80px", padding:"6px", }}
/>
          <Service />
          <Team />
        </>
      )}
    </div>
  );
};

export default Home;
