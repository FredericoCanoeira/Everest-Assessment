import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPower } from "react-icons/fi"; // Ícone de desligar
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  // Função de Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token de autenticação
    navigate("/login"); // Redireciona para login
  };

  return (
    <div className="sidebar">
      <h2>Painel Admin</h2>
      <ul>
        <li onClick={() => navigate("/")}>Início</li>
        <li onClick={() => navigate("/dashboard")}>Relatórios</li>
      </ul>

      {/* Ícone de Logout com texto abaixo */}
      <div className="logout-container" onClick={handleLogout}>
        <FiPower className="logout-icon" />
        <span className="logout-text">Sair</span>
      </div>
    </div>
  );
};

export default Sidebar;
