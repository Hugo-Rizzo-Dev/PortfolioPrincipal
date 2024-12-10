import React from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../images/HR.png';

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do Projeto 1",
    image: img1,
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    image: img1,
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
    image: img1,
  },
  {
    title: "Projeto 4",
    description: "Descrição do Projeto 4",
    image: img1,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="works-page-wrapper">
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
