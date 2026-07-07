import React from "react";
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
            My name is Hugo Rizzo, a Front-End developer graduated in Computer
            Engineering in Brazil.
          </p>
          <p className="about-description">
            My journey in the technology field began with curiosity about web
            development, which sparked a strong interest and drove me to seek
            further knowledge regarding new technologies and their applications.
          </p>
          <p className="about-description">
            I enjoy transforming ideas into responsive, user-friendly web
            experiences, and I am always looking to learn new tools and ways to
            write cleaner, better code.
          </p>
          <p className="about-description">
            I also have hands-on experience using AI tools to speed up
            development and to integrate AI capabilities directly into systems,
            applying them daily to write better code and build smarter
            solutions.
          </p>
          <p className="about-description">
            Currently, I work as a Fullstack developer at{" "}
            <a className="RookTechPresentation" href="https://rook-tech.com">
              Rook Tech
            </a>
            , where I build and improve real-world products.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
