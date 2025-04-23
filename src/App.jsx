import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RankDetails from "./components/RankDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank/:regNo" element={<RankDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
