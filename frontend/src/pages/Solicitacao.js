// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Solicitacao.css";

// const API_URL = "http://localhost:5000/api/reports"; // URL do backend

// const Solicitacao = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     telefone: "",
//     bi: "",
//     email: "",
//   });

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   // Função para validar se todos os campos estão preenchidos
//   const validateForm = (data) => {
//     return (
//       data.nome.trim() !== "" &&
//       data.telefone.trim() !== "" &&
//       data.bi.trim() !== "" &&
//       data.email.trim() !== ""
//     );
//   };

//   // Função para lidar com a mudança nos campos do formulário
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Validação para o campo de telefone: aceita apenas números e o sinal '+'
//     if (name === "telefone" && !/^[\d+]*$/.test(value)) {
//       return;
//     }

//     const updatedFormData = {
//       ...formData,
//       [name]: value,
//     };

//     setFormData(updatedFormData);
//     setIsButtonDisabled(!validateForm(updatedFormData));
//   };

//   // Função para enviar os dados ao backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     // Gerando um ID único internamente, mas sem exibir ao usuário
//     const generatedId = `${formData.nome.replace(/\s+/g, "").toLowerCase()}-${formData.bi.toLowerCase()}`;

//     const requestData = {
//       nome: formData.nome,
//       telefone: formData.telefone,
//       bi: formData.bi,
//       email: formData.email,
//       userId: generatedId, // O ID agora é enviado apenas para o backend
//     };

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (response.ok) {
//         console.log("Relatório solicitado com sucesso");
//         navigate("/obrigado"); // Redireciona para a página de agradecimento
//       } else {
//         const errorData = await response.json();
//         console.error("Erro ao solicitar relatório:", errorData);
//         setErrorMessage("Erro ao enviar a solicitação. Tente novamente.");
//       }
//     } catch (error) {
//       console.error("Erro ao enviar solicitação:", error);
//       setErrorMessage("Erro na conexão com o servidor.");
//     }
//   };

//   return (
//     <div className="solicitacao-form-container">
//       <h2>Formulário de Solicitação</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="nome">Nome Completo:</label>
//           <input
//             type="text"
//             id="nome"
//             name="nome"
//             value={formData.nome}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="telefone">Número de Telemóvel:</label>
//           <input
//             type="text"
//             id="telefone"
//             name="telefone"
//             value={formData.telefone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="bi">BI:</label>
//           <input
//             type="text"
//             id="bi"
//             name="bi"
//             value={formData.bi}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">E-mail:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit" disabled={isButtonDisabled}>Enviar Informações</button>
//       </form>
//     </div>
//   );
// };

// export default Solicitacao;


// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/Solicitacao.css";

// const API_URL = "http://localhost:5000/api/reports"; // URL do backend

// const Solicitacao = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     telefone: "",
//     bi: "",
//     email: "",
//   });

//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userId = location.state?.userId || "";

//   // Função para validar se todos os campos estão preenchidos
//   const validateForm = (data) => {
//     return (
//       data.nome.trim() !== "" &&
//       data.telefone.trim() !== "" &&
//       data.bi.trim() !== "" &&
//       data.email.trim() !== ""
//     );
//   };

//   // Função para lidar com a mudança nos campos do formulário
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Validação para o campo de telefone: aceita apenas números e o sinal '+'
//     if (name === "telefone" && !/^[\d+]*$/.test(value)) {
//       return;
//     }

//     const updatedFormData = {
//       ...formData,
//       [name]: value,
//     };

//     setFormData(updatedFormData);
//     setIsButtonDisabled(!validateForm(updatedFormData));
//   };

//   // Função para enviar os dados ao backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!userId) {
//       setErrorMessage("Erro: userId não encontrado. Redirecionando...");
//       setTimeout(() => navigate("/obrigado"), 2000);
//       return;
//     }

//     const requestData = {
//       nome: formData.nome,
//       telefone: formData.telefone,
//       bi: formData.bi,
//       email: formData.email,
//       userId, // Associando ao userId do assessment
//     };

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (response.ok) {
//         console.log("Relatório solicitado com sucesso");
//         navigate("/obrigado"); // Redireciona para a página de agradecimento
//       } else {
//         const errorData = await response.json();
//         console.error("Erro ao solicitar relatório:", errorData);
//         setErrorMessage("Erro ao enviar a solicitação. Tente novamente.");
//       }
//     } catch (error) {
//       console.error("Erro ao enviar solicitação:", error);
//       setErrorMessage("Erro na conexão com o servidor.");
//     }
//   };

//   return (
//     <div className="solicitacao-form-container">
//       <h2>Formulário de Solicitação</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="nome">Nome Completo:</label>
//           <input
//             type="text"
//             id="nome"
//             name="nome"
//             value={formData.nome}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="telefone">Número de Telemóvel:</label>
//           <input
//             type="text"
//             id="telefone"
//             name="telefone"
//             value={formData.telefone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="bi">BI:</label>
//           <input
//             type="text"
//             id="bi"
//             name="bi"
//             value={formData.bi}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">E-mail:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit" disabled={isButtonDisabled}>Enviar Informações</button>
//       </form>
//     </div>
//   );
// };

// export default Solicitacao;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Solicitacao.css";

const API_URL = "http://localhost:5000/api/solicitacao"; // URL correta do backend

const Solicitacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    bi: "",
    email: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId || "";

  // Validação dos campos preenchidos
  const validateForm = (data) => {
    return (
      data.nome.trim() !== "" &&
      data.telefone.trim() !== "" &&
      data.bi.trim() !== "" &&
      data.email.trim() !== ""
    );
  };

  // Atualiza os dados do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Permite apenas números e "+"
    if (name === "telefone" && !/^[\d+]*$/.test(value)) {
      return;
    }

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);
    setIsButtonDisabled(!validateForm(updatedFormData));
  };

  // Envio do formulário ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!userId) {
        setErrorMessage("Erro: userId não encontrado. Redirecionando...");
        setTimeout(() => navigate("/"), 2000);
        return;
    }

    const requestData = {
        userId,
        nome: formData.nome,
        telefone: formData.telefone,
        bi: formData.bi.trim() !== "" ? formData.bi : "Não informado",
        email: formData.email,
    };

    console.log("📌 Dados enviados ao backend:", requestData); // 🔍 Verifique se o BI está presente

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            console.log("✅ Solicitação enviada com sucesso!");
            navigate("/obrigado"); 
        } else {
            const errorData = await response.json();
            console.error("❌ Erro ao enviar solicitação:", errorData);
            setErrorMessage("Erro ao enviar a solicitação. Tente novamente.");
        }
    } catch (error) {
        console.error("❌ Erro na conexão com o servidor:", error);
        setErrorMessage("Erro na conexão com o servidor.");
    }
};


  return (
    <div className="solicitacao-form-container">
      <h2>Formulário de Solicitação</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número de Telemóvel:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bi">BI:</label>
          <input
            type="text"
            id="bi"
            name="bi"
            value={formData.bi}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" disabled={isButtonDisabled}>Enviar Informações</button>
      </form>
    </div>
  );
};

export default Solicitacao;
