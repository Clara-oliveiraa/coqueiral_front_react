import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Etica = () => {
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
      <h1 className="main-title">NOSSA ÉTICA</h1>
      <section id="etica">
        <div class="container">
          <div class="imagem">
            <img src="src/imagens/camisa_dos_sonho.png" alt="Imagem representativa da Coqueiral" />  </div>

          <div class="texto">
            <h2>Coqueiral: Espaço para moda local</h2>
            <p>A Coqueiral é um espaço dedicado aos produtores de moda locais em Pernambuco, oferecendo visibilidade para suas produções e facilitando a venda de produtos regionais. O objetivo é conectar as pessoas com a cultura local e proporcionar uma experiência de compra segura e autêntica, fora dos grandes eventos e locais centrais.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">Contato</p>
        <p className="footer-text">coqueiralrecife@contato.br</p>
        <p className="footer-text">© 2023 BY COQUEIRAL</p>
      </footer>
    </div>
  );
};

export default Etica;
