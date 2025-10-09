import React from 'react';
import './IntroSection.css';
import introImage from '../assets/portma2.png'; // substitua pelo nome correto da imagem

const IntroSection = () => {
  return (
    <div className="intro-section">
      <img src={introImage} alt="Transformando o Direito com Tecnologia" className="intro-bg" /> 

      <div className="overlay-content">
        <h1>Tecnologia que impulsiona decisões</h1>
        <p>Inovação, estratégia e impacto real</p>
      </div>
    </div>
  );
};

export default IntroSection;
