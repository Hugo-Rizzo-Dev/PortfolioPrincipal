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
        My name is Hugo Rizzo, I'm a Fullstack developer.
        </p>
        <p className="about-description">
        I am passionate about technology and software development.
        </p>
        <p className="about-description">
        I am currently studying Computer Engineering.
        </p>
      </section>
    </div>
    <Footer />
    </main>
  );
};

export default About;
