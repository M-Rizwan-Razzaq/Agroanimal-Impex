import About from "../About/About";
import Service from "../Services/Service";
import "./home.css";
// import HeroSection from "../Herosection/HeroSection";
import NHerosection from "../NHeroSection/NHerosection";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../TeamMambers/OurTeam";
const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <NHerosection />
      <About />
      <Testimonial />
      <Service />
      <Team />
    </div>
  );
};

export default Home;
