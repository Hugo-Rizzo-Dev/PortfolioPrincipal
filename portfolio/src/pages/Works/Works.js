import React from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import img1S from "../../images/Search/Search1.png"
import img2S from "../../images/Search/Search2.png"
import img3S from "../../images/Search/Search3.png"
import img1Sh from "../../images/ShoppingList/Buy1.png"
import img2Sh from "../../images/ShoppingList/Buy2.png"
import img3Sh from "../../images/ShoppingList/Buy3.png"

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
            <button className="carousel-button next" onClick={handleNext}>&gt;</button>
        </div>
    );
};

const Works = () => {
    const works = [
        {
            id: 1,
            images: [img1S, img2S, img3S],
            title: "CEP SEARCH",
        },
        {
            id: 2,
            images: [img2Sh, img1Sh, img3Sh],
            title: "Shopping List",
        },

    ];

    return (
        <main>
            <Navbar />
            <section className="works-grid">
                {works.map((work) => (
                    <div key={work.id} className="grid-item">
                        <Carousel images={work.images} />
                        <h3 className="item-title">{work.title}</h3>
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    );
};

export default Works;
