import React from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Valorant",
    description: "Valorant é um jogo de FPS estratégico em 5v5...",
    image: "/path-to-image1.jpg",
  },
  {
    title: "Bloons TD 6",
    description: "Bloons TD 6 é um jogo de Tower Defense...",
    image: "/path-to-image2.jpg",
  },
  {
    title: "Days Gone",
    description: "Days Gone é um jogo de sobrevivência...",
    image: "/path-to-image3.jpg",
  },
  {
    title: "Call of Duty Modern Warfare II",
    description: "Call of Duty combina modos de história e multiplayer...",
    image: "/path-to-image4.jpg",
  },
];

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Para telas menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="works-page">
      <Navbar />
      <section className="works-section">
        <h2 className="works-title">Meus Projetos</h2>
        <Slider {...settings} className="works-slider">
          {projects.map((project, index) => (
            <div key={index} className="works-card">
              <div className="works-card-overlay">
                <h3 className="works-card-title">{project.title}</h3>
                <p className="works-card-description">{project.description}</p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="works-card-image"
              />
            </div>
          ))}
        </Slider>
      </section>
      <Footer />
    </main>
  );
};

export default Works;
