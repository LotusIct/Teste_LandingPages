// src/components/IntroVideo.jsx
import React from 'react';
import './IntroVideo.css';

const IntroVideo = () => {
  return (
    <div className="intro-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>

      <div className="overlay-content">
        <h1>Transformando o Direito com Tecnologia</h1>
        <p>Inovação, estratégia e impacto real.</p>
      </div>
    </div>
  );
};

export default IntroVideo;
