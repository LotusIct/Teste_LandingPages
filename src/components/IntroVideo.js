import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="overlay-content">
        <h1>Tecnologia que impulsiona decisões</h1>
        <p className="impacto">Inovação, estratégia e alta performance</p>
        <div className="intro-buttons">
          <a href="#project" className="btn-primary">Ver Projetos</a>
          <a href="#contato" className="btn-secondary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
