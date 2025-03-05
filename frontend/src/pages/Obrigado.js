import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Obrigado.css';

const Obrigado = () => {
  const navigate = useNavigate();

  // Função para voltar à página inicial
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="obrigado-container">
      <h1>Obrigado!</h1>
      <p>
        Agradecemos pela solicitação, o seu pedido foi registado e será atendido em 74 horas.
        <br />
        Para mais informação ou esclarecimentos adicionais queira contactar-nos pelos seguintes:
      </p>
      <div className="contact-info">
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:apoiocliente@everest40.com" className="contact-link">
            apoiocliente@everest40.com
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a
            href="https://wa.me/935462360"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            935 462 360
          </a>
        </p>
      </div>
      <button className="home-button" onClick={handleGoHome}>
        Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default Obrigado;
