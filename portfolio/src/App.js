import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Experience from "./pages/Experience/Experience.js";
import Works from "./pages/Works/Works.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
