import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./Pages/Projects";
import { Contacts } from "./Pages/Contacts";
import { ProjectDetails } from "./Pages/ProjectDetails";
import { Skills } from "./Pages/Skills";
import { ScrollToTop } from "./utils/scrollToTop";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
