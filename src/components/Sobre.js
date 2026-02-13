import React, { useEffect, useRef, useState } from 'react';
import './Sobre.css';

import foto1 from '../assets/advogado.jpg';
import foto2 from '../assets/advogado.jpg';
import foto3 from '../assets/advogado.jpg';

const dadosCards = [
  { tipo: 'Carreira', ano: '1992', titulo: 'Início da Carreira Jurídica', descricao: 'Primeiros projetos de consultoria empresarial focados em direito e gestão.', local: 'Escritório Silva & Associados' },
  { tipo: 'Formação', ano: '2005', titulo: 'MBA em Administração Estratégica', descricao: 'Aprofundamento em administração, planejamento e liderança.', local: 'Fundação Getúlio Vargas (FGV)' },
  { tipo: 'Carreira', ano: '2010', titulo: 'Projetos de Transformação Digital', descricao: 'Atuação em grandes empresas para adaptação a novas tecnologias.', local: 'Consultoria Digital ABC' },
  { tipo: 'Certificação', ano: '2015', titulo: 'PMP - Gerenciamento de Projetos', descricao: 'Certificação internacional em gerenciamento de projetos.', local: 'Project Management Institute (PMI)' },
  { tipo: 'Formação', ano: '2020', titulo: 'Especialização em BI e Marketing Digital', descricao: 'Foco em análise de dados e estratégias digitais de marketing.', local: 'Google & Hubspot Academy' },
  { tipo: 'Carreira', ano: 'Atual', titulo: 'Consultor Estratégico', descricao: 'Liderança em projetos de inovação, BI e governança digital.', local: 'Consultoria Estratégica Marcos Galbiati' },
];

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">

      <div className="container">

        {/* SEÇÃO 1 */}
        <div className="sobre-secao">
          <div className="sobre-bloco">
            <div className="sobre-imagem">
              <img src={foto1} alt="Marcos Galbiati" />
            </div>
            <div className="sobre-texto">
              <h2 className="sobre-titulo">Introdução</h2>
              <p>Prazer, sou Marcos Galbiati, consultor estratégico com mais de 30 anos de atuação em gestão, inovação e transformação digital.</p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 2 */}
        <div className="sobre-secao">
          <div className="sobre-bloco reverse">
            <div className="sobre-imagem">
              <img src={foto2} alt="Formação" />
            </div>
            <div className="sobre-texto">
              <h2 className="sobre-titulo">Formação e Experiência</h2>
              <p>Minha formação de base é em Direito, com foco em análise de negócios e inteligência estratégica.</p>
              <p>Especialização em Administração, Projetos, BI e Marketing Digital.</p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 */}
        <div className="sobre-secao">
          <div className="sobre-bloco">
            <div className="sobre-imagem">
              <img src={foto3} alt="Metodologia" />
            </div>
            <div className="sobre-texto">
              <h2 className="sobre-titulo">Metodologia e Abordagem</h2>
              <p>Experiência em governança, indicadores e marketing estratégico.</p>
              <p>Abordagem prática, analítica e orientada a resultados.</p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="sobre-secao">
          <h2 className="sobre-titulo central">Minha Trajetória</h2>
          <div className="timeline-horizontal">
            {dadosCards.map((item, idx) => (
              <div key={idx} className="timeline-item-horizontal">
                <span className="year">{item.ano}</span>

                <div className="timeline-content">
                  <span className="tag">{item.tipo}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                  <p><strong>{item.local}</strong></p>
                </div>

                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
          <div className="citacao-container">
            <blockquote className="citacao">
              “Estratégia não é apenas planejar o futuro. 
              É construir, com inteligência e propósito, 
              os resultados de hoje.”
            </blockquote>
            <span className="autor">— Marcos Galbiati</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sobre;
