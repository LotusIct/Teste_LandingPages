import React from 'react';
import './Contato.css';
import logo from '../assets/logomg.png';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <div className="contato-formulario">
          <h2>Entre em contato</h2>
          <form>
            <div className="form-group">
              <input type="text" id="nome" placeholder=" " />
              <label htmlFor="nome">Nome</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" placeholder=" " />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <textarea id="mensagem" placeholder=" "></textarea>
              <label htmlFor="mensagem">Mensagem</label>
            </div>

            <button className='submit' type="submit">Enviar</button>
          </form>

          <div className="contato-links">
            <div className="link-item">
              <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </div>
            <div className="link-item"> 
              <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div className="contato-imagem">
          {/* <img src={imagemContato} alt="Contato" />*/}
        </div> 
      </div>

      {/* Linha separadora */}
      <hr className="contato-linha" />

      {/* Rodapé */}
      <footer className="contato-footer">
        <div className="footer-logo">
          <img src={logo} alt="Logo" /> 
        </div>
        <div className="footer-text">
          <p className='impacto'>Liderando TI com visão estratégica e alta performance.</p>
          &copy; {new Date().getFullYear()} Marcos Galbiati. Todos os direitos reservados.
        </div>
      </footer>
    </section>
  );
};

export default Contato;
