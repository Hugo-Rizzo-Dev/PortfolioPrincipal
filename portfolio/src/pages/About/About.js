import React from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";

const About = () => {
  return (
    <main>
    <Navbar />
    <div className="about-container">
      <section className="about-header">
        <h1>ABOUT ME</h1>
        <p className="about-description">
        My name is Hugo Rizzo, I'm a Front-End developer.
        </p>
        <p className="about-description">
        I am passionate about technology and Front-End development.
        </p>
        <p className="about-description">
        I am currently a Computer Engineering student in Brazil and work at <a className="RookTechPresentation" href="https://rook-tech.com">Rook Tech</a>.
        </p>
      </section>
    </div>
    <Footer />
    </main>
  );
};

export default About;
