import React, { useState } from "react";
import api from "../services/api"; // ⚠️ Certifique-se de que o caminho está correto

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando:", userData); // ✅ Log para verificar os dados

    try {
      const response = await api.saveUser(userData); // ⚠️ Chamada correta
      console.log("Resposta da API:", response);
      alert(response.message);
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={userData.telefone}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UserForm;
