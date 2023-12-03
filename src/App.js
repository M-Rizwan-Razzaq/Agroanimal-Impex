import "tailwindcss/tailwind.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navber/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ContanctUsPage from "./components/ContactUsPage/ContanctUsPage";
 import PressDetails from "./components/PressKit/PressDetails";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Involved from "./components/Involved/Involved";
import Gallary from "./components/Gallary/Gallary";
import Patners from "./components/patners/Patners";
import Press from "./components/PressKit/Press";
import FAQ from "./components/Faq/FAQ";
import Aproach from "./components/Apraoch/Aproach";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import BlogDetail from "./components/BlogDetail/BlogDetail";
 
//structure
function App() {



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/contactUs" element={<ContanctUsPage />} />
          <Route path="/ouraproach" element={<Aproach/>} />
          <Route path="/successstories" element={<SuccessStories />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
           <Route path="/involved" element={<Involved />} />
          <Route path="/gallery" element={<Gallary />} />

          <Route path="/patners" element={<Patners />} />
          <Route path="/presskit" element={<Press />} />
          <Route path="/press/:id" element={<PressDetails/>} />
          <Route path="/faq" element={<FAQ/>} />
          


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
