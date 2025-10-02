import React, { useEffect, useRef, useState } from 'react';
import './Sobre.css';

const dadosCards = [
  {
    tipo: 'Carreira',
    ano: '1992',
    titulo: 'Início da Carreira Jurídica',
    descricao: 'Primeiros projetos de consultoria empresarial focados em direito e gestão.',
    local: 'Escritório Silva & Associados',
  },
  {
    tipo: 'Formação',
    ano: '2005',
    titulo: 'MBA em Administração Estratégica',
    descricao: 'Aprofundamento em administração, planejamento e liderança.',
    local: 'Fundação Getúlio Vargas (FGV)',
  },
  {
    tipo: 'Carreira',
    ano: '2010',
    titulo: 'Projetos de Transformação Digital',
    descricao: 'Atuação em grandes empresas para adaptação a novas tecnologias.',
    local: 'Consultoria Digital ABC',
  },
  {
    tipo: 'Certificação',
    ano: '2015',
    titulo: 'PMP - Gerenciamento de Projetos',
    descricao: 'Certificação internacional em gerenciamento de projetos.',
    local: 'Project Management Institute (PMI)',
  },
  {
    tipo: 'Formação',
    ano: '2020',
    titulo: 'Especialização em BI e Marketing Digital',
    descricao: 'Foco em análise de dados e estratégias digitais de marketing.',
    local: 'Google & Hubspot Academy',
  },
  {
    tipo: 'Carreira',
    ano: 'Atual',
    titulo: 'Consultor Estratégico',
    descricao: 'Liderança em projetos de inovação, BI e governança digital.',
    local: 'Consultoria Estratégica Marcos Galbiati',
  },
];

const Sobre = () => {
  const itensRef = useRef([]);
  const [visiveis, setVisiveis] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            const index = Number(target.getAttribute('data-index'));
            setVisiveis((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    itensRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itensRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
  <section id="sobre" className="sobre">
  {/* INTRODUÇÃO COM IMAGEM */}
  <div className="intro-container">
    <div className="intro-imagem">
      <img src="/caminho/para/sua-imagem.jpg" alt="Foto de Marcos Galbiati" />
    </div>
    <div className="intro-texto">
      <h3>Prazer, sou Marcos Galbiati.</h3>
      <p>Consultor estratégico com mais de 30 anos de atuação em gestão, inovação e transformação digital.</p>
    </div>
  </div>

  {/* TEXTO EM DUAS COLUNAS */}
  <div className="sobre-colunas">
    <div className="coluna">
      <p>
        Minha formação de base é em Direito, mas minha trajetória foi construída com foco em análise de negócios, desenvolvimento organizacional e inteligência estratégica.
      </p>
      <p>
        Ao longo dos anos, me especializei em áreas como <strong>Administração de Empresas</strong>, <strong>Gerenciamento de Projetos</strong>, <strong>Business Intelligence</strong> e <strong>Marketing Digital</strong>. Essa combinação me permite oferecer uma visão integrada entre gestão de processos, análise de dados e posicionamento de mercado, com foco em inovação e performance.
      </p>
       <p>
        Atuo como consultor e estrategista em projetos que exigem capacidade analítica, visão sistêmica e tomada de decisão orientada por dados. Utilizo ferramentas de BI, frameworks de planejamento estratégico e metodologias ágeis para desenhar soluções que maximizam resultados e otimizam recursos.
      </p>
    </div>
    <div className="coluna">
     
      <p>
        Tenho experiência na liderança de projetos multidisciplinares, implementação de processos de governança, análise de indicadores de desempenho e estruturação de planos de marketing digital voltados à geração de valor e posicionamento competitivo.
      </p>
      <p>
        Minha abordagem é prática, técnica e orientada a resultados. Acredito na gestão baseada em dados, na comunicação clara e na construção de estratégias sólidas que respeitam o contexto e os objetivos de cada organização. Estou preparado para contribuir com soluções inteligentes, seja no ambiente corporativo, digital ou institucional.
      </p>
    </div>
  </div>


      <div className="timeline">
        {dadosCards.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const isVisible = visiveis.includes(idx);
          return (
            <div
              key={idx}
              data-index={idx}
              ref={(el) => (itensRef.current[idx] = el)}
              className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}
            >
              <div className="content">
                <span className="tag">{item.tipo}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <p>
                  <strong>Local:</strong> {item.local}
                </p>
              </div>

              {/* Data fora do conteúdo */}
              <span className={`year ${isLeft ? 'year-left' : 'year-right'}`}>
                {item.ano}
              </span>

              <div className="flag"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sobre;
