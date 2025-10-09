import React, { useState } from 'react';
import './Projetos.css';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
const projetos = [
  { titulo: 'Consultoria GDPR para E-commerce', descricao: 'Adequação à legislação europeia para uma empresa global de e-commerce.', tipo: 'Projeto', imagem: p1 },
  { titulo: 'Blockchain & Dados Corporativos', descricao: 'Defesa jurídica em caso de vazamento de dados envolvendo blockchain.', tipo: 'Projeto', imagem: p2 },
  { titulo: 'BI Jurídico', descricao: 'Dashboards e indicadores para decisões estratégicas em escritório.', tipo: 'Projeto', imagem: p3 },
  { titulo: 'Transformação Digital Pública', descricao: 'Digitalização e automação de fluxos em órgão governamental.', tipo: 'Projeto', imagem: p4 },
  { titulo: 'Governança de Dados e TI', descricao: 'Plano de governança com foco em compliance e resultados.', tipo: 'Projeto', imagem: p5 },
  { titulo: 'Capacitação em LGPD', descricao: 'Treinamento corporativo para grandes empresas.', tipo: 'Projeto', imagem: p6 },
  { titulo: 'LegalTech e Startups', descricao: 'Mentoria jurídica para inovação em startups do ecossistema digital.', tipo: 'Parceria', imagem: p7 },
  { titulo: 'Parceria com Universidade X', descricao: 'Projeto acadêmico voltado à pesquisa sobre direito digital.', tipo: 'Parceria', imagem: p8 },
  { titulo: 'Incubadora GovTech', descricao: 'Apoio jurídico e estratégico a startups com foco no setor público.', tipo: 'Parceria', imagem: p9 },
  { titulo: 'Hub de Inovação Jurídica', descricao: 'Criação de comunidade colaborativa entre escritórios e legaltechs.', tipo: 'Parceria', imagem: p10 },
  { titulo: 'Plataforma de Compliance Colaborativo', descricao: 'Parceria com startups para desenvolvimento de soluções SaaS em compliance.', tipo: 'Parceria', imagem: p11 }
];



const Projetos = () => {
  const [filtro, setFiltro] = useState('Todos');

  const filtrados = filtro === 'Todos' ? projetos : projetos.filter(p => p.tipo === filtro);

  return (
    <section id="projetos" className="projetos">
      <div className="projetos-header">
        <h2>Projetos & Parcerias</h2>
        <p>
          Conheça algumas iniciativas que unem <strong>tecnologia</strong>, <strong>estratégia</strong> e <strong>direito</strong>, com impacto real em organizações públicas, privadas e digitais.
        </p>

        <div className="filtros">
         
          <button 
            className={filtro === 'Projeto' ? 'ativo' : ''} 
            onClick={() => setFiltro('Projeto')}
          >
            Projetos
          </button>
          <button 
            className={filtro === 'Parceria' ? 'ativo' : ''} 
            onClick={() => setFiltro('Parceria')}
          >
            Parcerias
          </button>
        </div>
      </div>

      <div className="cards-container">
{filtrados.map((item, idx) => (
  <div
    className={`card ${item.tipo === 'Parceria' ? 'parceria' : 'projeto'}`}
    key={`${filtro}-${idx}-${item.titulo}`}
    style={{
      animationName: 'fadeInUpRebuscado',
      animationDuration: '0.9s',
      animationTimingFunction: 'cubic-bezier(0.25, 1.25, 0.5, 1)',
      animationFillMode: 'both',
      animationDelay: `${idx * 0.1}s`
    }}
  >
   <div className="imagem-wrapper">
  <img src={item.imagem} alt={item.titulo} />
</div>


    <h3>{item.titulo}</h3>
    <p>{item.descricao}</p>
    <span className="tags">{item.tipo}</span>
  </div>
))}



      </div>
    </section>
  );
};

export default Projetos;
