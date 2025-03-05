import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Layout.css"; 

const Layout = ({ children }) => {
  const location = useLocation();


  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
          {/*<h1>Everest Assessment</h1>*/}
        <nav className="nav">
           {/* Exibe "Realizar o teste" somente na página inicial ("/") */}
            {location.pathname === "/" && (
            <a href="/assessment" className="link">Realizar o teste</a>
          )}
        {/*<a href="/home" style={styles.link}>Início</a>*/}
            {/*<a href="/Dashboard" style={styles.link}>Dashboard</a>*/}
            {/*<a href="/results" style={styles.link}>Ranking</a>*/}
            {/*<a href="/results" style={styles.link}>Resultados</a>*/}
            {/*<a href="/" style={styles.link}>Login</a>*/}
            {/*<a href="/register" style={styles.link}>Registrar</a>*/}
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="main">{children}</main>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Everest - Consultoria e Gestão de Carreiras, LDA</p>
      </footer>
    </div>
  );
};

export default Layout;
