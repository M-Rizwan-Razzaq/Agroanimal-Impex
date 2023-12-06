import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Service from "../Services/Service";
import NHerosection from "../NHeroSection/NHerosection";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../TeamMambers/OurTeam";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          <About />
          <Testimonial />
          <Service />
          <Team />
        </>
      )}
    </div>
  );
};

export default Home;
