import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook para navegação após login
import { Link } from "react-router-dom"; // Componente Link para navegação
import { useAuth } from "../context/AuthContext"; // Importando o contexto de autenticação
import "../styles/Login.css"; // Importando estilos

function Login() {
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [password, setPassword] = useState(""); // Estado para armazenar a senha
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const navigate = useNavigate(); // Hook para navegação
  const { login } = useAuth(); // Pegando a função de login do contexto

  // Função para processar o login
  const handleLogin = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Validação básica: Checa se email e senha foram preenchidos
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Chama a função de login do AuthContext
    const success = login(email, password);
    if (success) {
      navigate("/dashboard"); // Redireciona para o painel administrativo
    } else {
      setError("E-mail ou senha incorretos!"); // Exibe erro caso as credenciais sejam inválidas
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Exibe mensagem de erro se houver */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
              required
              placeholder="Digite sua senha"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-login">Acessar</button>
          </div>
        </form>
        <div className="auth-options">
          {/* <p>Não tem uma conta? <Link to="/register" className="auth-link">Criar uma conta</Link></p> */}
          <p>Esqueceu sua senha? <Link to="/forgot-password" className="auth-link">Recuperar senha</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
