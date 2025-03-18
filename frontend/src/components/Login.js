import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";
import { login } from "../api/api";
import { jwtDecode } from "jwt-decode";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      
      // Decode token to check if Super Admin
      const user = jwtDecode(data.token);
      if (user.email === "admin@everest40.com") {
        localStorage.setItem("isSuperAdmin", true);
      } else {
        localStorage.setItem("isSuperAdmin", false);
      }

      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response.data.error || "Login failed");
    }
  };




  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Super Admin Login</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password" onChange={handleChange}
              required
              placeholder="Digite sua senha"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-login">Acessar</button>
          </div>
        </form>
        <div className="auth-options">
          <p>Esqueceu sua senha? <Link to="/forgot-password" className="auth-link">Recuperar senha</Link></p>
          <p>Create a Super Admin? <Link to="/register" className="auth-link">New Super Admin</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
