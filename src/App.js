import "tailwindcss/tailwind.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navber/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ContanctUsPage from "./components/ContactUsPage/ContanctUsPage";
import PressDetails from "./components/PressKit/PressDetails";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Involved from "./components/Involved/Involved";
import Press from "./components/PressKit/Press";
import FAQ from "./components/Faq/FAQ";
import Aproach from "./components/Apraoch/Aproach";
import Partnership from "./components/Partnership/Partnership";
import Impact from "./components/Impact/Impact";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Service from "./components/Services/Service";
import Gallery from "./components/Gallery/Gallery";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import MeatManifesto from "./components/ProjectDetail/MeatManifesto";
import GingerManifesto from "./components/ProjectDetail/GingerManifesto";
import ImportAgriDairyTech from "./components/ProjectDetail/ImportAgriDairyTech";
import WheatStrawInfo from "./components/ProjectDetail/WheatStrawInfo";
import BonesExportComponent from "./components/ProjectDetail/BonesExportComponent";
import CornSilageComponent from "./components/ProjectDetail/CornSilageComponent";
import GarlicExportInfo from "./components/ProjectDetail/GarlicExportInfo";
import SurgicalExportInfo from "./components/ProjectDetail/SurgicalExportInfo";
import SaltExportInfo from "./components/ProjectDetail/SaltExportInfo";
import ResearchAndDevelopment from "./components/ProjectDetail/ResearchAndDevelopment";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contactUs" element={<ContanctUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/ouraproach" element={<Aproach />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />

          <Route path="/successstories" element={<Impact />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/involved" element={<Involved />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/partnership" element={<Partnership />} />
          <Route path="/presskit" element={<Press />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/press/:id" element={<PressDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects/meat" element={<MeatManifesto />} />
          <Route path="/projects/ginger" element={<GingerManifesto />} />
          {/* <Route path="/projects/agridairy" element={<ImportAgriDairyTech />} /> */}
          <Route path="/projects/wheatstraw" element={<WheatStrawInfo />} />
          <Route path="/projects/bones" element={<BonesExportComponent />} />
          <Route path="/projects/silage" element={<CornSilageComponent />} />
          <Route path="/projects/garlic" element={<GarlicExportInfo />} />
          <Route path="/projects/agridairy" element={<ImportAgriDairyTech />} />
          <Route path="/projects/salts" element={<SaltExportInfo />} />
          <Route path="/projects/surgical" element={<SurgicalExportInfo />} />
          <Route path="/projects/researchanddevelopment" element={<ResearchAndDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
