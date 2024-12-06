import React, { useEffect } from 'react';
import "../../style/App.css";
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";

const Experience = () => {

    useEffect(() => {
        const items = document.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Remove a classe quando o item não estiver mais visível
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.2, // Define a porcentagem de visibilidade para ativar a animação
        });

        items.forEach(item => {
            observer.observe(item);
        });

        // Cleanup da observação quando o componente desmontar
        return () => {
            items.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <main>
            <Navbar />
            
            <section className="timeline">
                <h1 className='certifications'>Certifications</h1>
                
                <div className="timeline-item">
                    <div className="content">
                        <h2>Bootstrap5: crie uma landing page responsiva</h2>
                        <p>Earned on September 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/c4c2c05f-ad72-498c-9271-9833e1345a63" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>HTML e CSS: responsividade com mobile-first</h2>
                        <p>Earned on September 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/b0f001e1-daa5-4fe2-8950-0c20055fa341" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>HTML e CSS: Classes, posicionamento e Flexbox</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/510e1251-18d5-4b6b-b3f6-5e6bd9ad3804" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>
                
                <div className="timeline-item">
                    <div className="content">
                        <h2>HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/e52395ae-9267-4745-a30d-bc6a53571e5e" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>HTML e CSS: cabeçalho, footer e variáveis CSS</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/013a2395-a287-4af8-9ac4-b71d0d7a0e1c" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>HTML e CSS: trabalhando com responsividade e publicação de projetos</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/1ad7c960-9d15-4375-ad54-c05865aed522" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>JavaScript para Web: Crie páginas dinâmicas</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/b383b5b8-dde1-4618-81d3-c1beee924c1f" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>Lógica de programação: comece em lógica com o jogo Pong e JavaScript</h2>
                        <p>Earned on August 2023</p>
                        <a href="https://cursos.alura.com.br/certificate/1a3007b4-5b23-426a-b044-df8d60dad66c" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>O básico de Git e GitHub</h2>
                        <p>Earned on September 2024</p>
                        <a href="https://app.rocketseat.com.br/certificates/50364482-4ba2-414b-8b23-592ecf66a734" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>Fundamentos de HTML e CSS</h2>
                        <p>Earned on December 2024</p>
                        <a href="https://app.rocketseat.com.br/certificates/52a1152e-ff6a-4469-b6ca-c27a631a1e89" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="content">
                        <h2>JavaScript</h2>
                        <p>Earned on December 2024</p>
                        <a href="https://app.rocketseat.com.br/certificates/66d99da6-0ab6-4d86-91a0-18b61e9cdce6" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="content">
                        <h2>Introdução ao Node.js</h2>
                        <p>Earned on December 2024</p>
                        <a href="https://app.rocketseat.com.br/certificates/98d7e4da-6076-45dd-b5f6-adadf3cfdc18" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Experience;
