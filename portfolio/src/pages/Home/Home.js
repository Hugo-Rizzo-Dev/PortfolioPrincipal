import React from "react";
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <div className="presentation">
        <div class="container">
          <h1 className="myName">Hi, my name is</h1>
          <h2 className="nameandDev">Hugo Rizzo.</h2>
          <h3 className="nameandDev">I am a Full Stack Web Developer.</h3>
          <p>
            I'm studying Computer Engineering and I'm a developer at the company <a className="RookTechPresentation" href="https://rook-tech.com">Rook Tech</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
