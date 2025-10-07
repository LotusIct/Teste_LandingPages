import React from 'react';
import './IntroSection.css';
import introImage from '../assets/fundo.png'; // substitua pelo nome correto da imagem

const IntroSection = () => {
  return (
    <div className="intro-section">
      <img src={introImage} alt="Transformando o Direito com Tecnologia" className="intro-bg" /> 

      <div className="overlay-content">
        <h1>Transformando o Direito com Tecnologia</h1>
        <p>Inovação, estratégia e impacto real.</p>
      </div>
    </div>
  );
};

export default IntroSection;
