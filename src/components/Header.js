import React from 'react';
import './Header.css';
//import logo from '../assets/logo.png'; // logo real aqui
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      {/* Lado esquerdo: Logo */}
      <div className="header-left">
        {/* <img src={logo} alt="Logo Marcos Galbiati" className="logo-img" /> */}
      </div>

      {/* Centro: Navegação */}
      <nav className="nav">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Direita: Redes Sociais */}
      <div className="header-right">
        <a
          href="https://www.linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/55SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp />
        </a>
      </div>
    </header>
  );
};

export default Header;
