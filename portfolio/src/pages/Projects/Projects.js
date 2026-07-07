import React from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import img1S from "../../images/Search/Search1.png";
import img2S from "../../images/Search/Search2.png";
import img3S from "../../images/Search/Search3.png";
import img1Sh from "../../images/ShoppingList/Buy1.png";
import img2Sh from "../../images/ShoppingList/Buy2.png";
import img3Sh from "../../images/ShoppingList/Buy3.png";
import img1Fk from "../../images/Fokus/Fokus1.png";
import img2Fk from "../../images/Fokus/Fokus2.png";
import img3Fk from "../../images/Fokus/Fokus3.png";
import langoD1 from "../../images/LangoDawg/LangoDawg1.png";
import langoD2 from "../../images/LangoDawg/LangoDawg2.png";
import langoD3 from "../../images/LangoDawg/LangoDawg3.png";
import langoD4 from "../../images/LangoDawg/LangoDawg4.png";
import langoD5 from "../../images/LangoDawg/LangoDawg5.png";
import langoD6 from "../../images/LangoDawg/LangoDawg6.png";
import langoD7 from "../../images/LangoDawg/LangoDawg7.png";
import langoD8 from "../../images/LangoDawg/LangoDawg8.png";
import langoD9 from "../../images/LangoDawg/LangoDawg9.png";
import langoM1 from "../../images/LangoDawgMobile/Image 1.jpg";
import langoM2 from "../../images/LangoDawgMobile/Image 2.jpg";
import langoM3 from "../../images/LangoDawgMobile/Image 3.jpg";
import langoM4 from "../../images/LangoDawgMobile/Image 4.jpg";
import langoM5 from "../../images/LangoDawgMobile/Image 5.jpg";
import langoM6 from "../../images/LangoDawgMobile/Image 6.jpg";
import langoM7 from "../../images/LangoDawgMobile/Image 7.jpg";
import langoM8 from "../../images/LangoDawgMobile/Image 8.jpg";

const Carousel = ({ images, onImageClick }) => {
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
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                className="carousel-image fade-in" 
                onClick={() => onImageClick(images, currentIndex)}
            />
            <button className="carousel-button next" onClick={handleNext}>&gt;</button>
        </div>
    );
};

const Modal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    if (!images) return null;

    return (
        <div className="modal-overlay fade-in" onClick={onClose}>
            <div className="modal-content slide-in" onClick={(e) => e.stopPropagation()}>
                <div className="modal-image-wrapper">
                    <button className="modal-button prev" onClick={onPrev}>&lt;</button>
                    <img src={images[currentIndex]} alt="Expanded" className="modal-image fade-in" />
                    <button className="modal-button next" onClick={onNext}>&gt;</button>
                </div>
                <button className="modal-close" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

const Projects = () => {
    const [modalData, setModalData] = React.useState({ images: null, currentIndex: 0 });

    const works = [
        {
            id: 1,
            images: [langoD1, langoD2, langoD3, langoD4, langoD5, langoD6, langoD7, langoD8, langoD9],
            title: <a className='linkProjects' href='https://langodawg.com/'>LangoDawg</a>,
        },
        {
            id: 2,
            images: [langoM1, langoM2, langoM3, langoM4, langoM5, langoM6, langoM7, langoM8],
            title: "LangoDawg Mobile",
        },
        {
            id: 3,
            images: [img1S, img2S, img3S],
            title: <a className='linkProjects' href='https://github.com/Hugo-Rizzo-Dev/search'>CEP SEARCH</a>,
        },
        {
            id: 4,
            images: [img2Sh, img1Sh, img3Sh],
            title: <a className='linkProjects' href='https://github.com/Hugo-Rizzo-Dev/listaDeCompras2'>SHOPPING LIST</a>,
        },
        {
            id: 5,
            images: [img1Fk, img2Fk, img3Fk],
            title: <a className='linkProjects' href='https://github.com/Hugo-Rizzo-Dev/Fokus'>FOKUS</a>,
        },
    ];

    const openModal = (images, currentIndex) => {
        setModalData({ images, currentIndex });
    };

    const closeModal = () => {
        setModalData({ images: null, currentIndex: 0 });
    };

    const handlePrev = () => {
        setModalData((prev) => ({
            ...prev,
            currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
        }));
    };

    const handleNext = () => {
        setModalData((prev) => ({
            ...prev,
            currentIndex: prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1,
        }));
    };

    return (
        <main>
            <Navbar />
            <section className="projects-grid">
                {works.map((work) => (
                    <div key={work.id} className="grid-item">
                        <Carousel images={work.images} onImageClick={openModal} />
                        <h3 className="item-title">{work.title}</h3>
                    </div>
                ))}
            </section>
            <Modal 
                images={modalData.images} 
                currentIndex={modalData.currentIndex} 
                onClose={closeModal} 
                onPrev={handlePrev} 
                onNext={handleNext} 
            />
            <Footer />
        </main>
    );
};

export default Projects;
