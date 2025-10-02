import React from 'react';
import './Servicos.css';

const servicosLista = [
  'Consultoria em Proteção de Dados e Privacidade (LGPD)',
  'Defesa Estratégica em Litígios Digitais',
  'Compliance e Auditoria de Segurança Cibernética',
  'Implementação de Governança Digital',
  'BI Jurídico: Análise de Dados para Decisão Estratégica',
  'Treinamentos Corporativos em Direito Digital',
  'Planejamento Estratégico com Foco em Inovação',
  'Gerenciamento de Riscos em Projetos de Transformação Digital'
];

const Servicos = () => {
  return (
    <section id="servicos" className="servicos">
      <div className="servicos-header">
        <h2>Serviços</h2>
        <p>
          Soluções integradas com foco em estratégia, inovação e segurança jurídica. Conheça as áreas onde atuo:
        </p>
      </div>

      <div className="servicos-grid">
        {servicosLista.map((servico, index) => (
          <div className="servico-card" key={index}>
            <div className="servico-numero">{index + 1}</div>
            <p>{servico}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
