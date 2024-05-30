import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Vender = () => {
  return (
    <div className="App">
    
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquise por produto, loja ou categoria"
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glasss" className="search-icon" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <hr className="divider" />
      <h1 className="main-title">VENDER NA COQUEIRAL</h1>
      <p className="info-text">
        Você deve criar a sua conta na Coqueiral, clicando <a href="#" className="highlight">AQUI</a> e, durante o cadastro, informar que tem a intenção de vender. Preencha o necessário e a moderação irá analisar o perfil. Se tudo estiver certinho, em até 48 horas sua loja está prontinha e você pode começar a anunciar os seus produtos na plataforma. :)
      </p>
      <div className="contact-form">
        <input
          type="email"
          className="email-input"
          placeholder="Seu email"
        />
        <textarea
          className="question-input"
          placeholder="Sua dúvida"
        />
        <button className="send-button">Enviar</button>
      </div>
      <footer className="footer">
        <p className="footer-text">Contato</p>
        <p className="footer-text">coqueiralrecife@contato.br</p>
        <p className="footer-text">© 2023 BY COQUEIRAL</p>
      </footer>
    </div>
  );
};

export default Vender;
