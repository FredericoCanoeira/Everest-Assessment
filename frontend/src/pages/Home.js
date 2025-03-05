import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Auto-avaliação de Liderança</h1>
      <p>Seja bem-vindo!</p>
      <p>
        Aqui, você terá a oportunidade de refletir sobre suas competências, identificar pontos fortes e descobrir áreas de desenvolvimento. Nosso objectivo é ajudá-lo a crescer profissionalmente e alcançar seus objectivos.
      </p>
      <p>
        Clique em <Link to="/assessment">"Realizar o teste"</Link> para começar sua jornada de autoconhecimento.
      </p>
      <Link to="/assessment" >
      {/* <button>Iniciar Autoavaliação</button> */}
      </Link>
    </div>
  );
};

export default Home;
