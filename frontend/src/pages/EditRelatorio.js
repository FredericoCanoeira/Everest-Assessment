import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditRelatorio = () => {
  const { id } = useParams(); // Get the report ID from the URL
  const navigate = useNavigate();
  const [report, setReport] = useState({
    nome: "",
    email: "",
    telefone: "",
    bi: "",
    finalScore: "",
    category: "",
    respostas: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the current report data
  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/report/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar relatório");
        }
        const data = await response.json();
        setReport(data);
      } catch (err) {
        console.error("Erro ao carregar relatório:", err);
        setError("Erro ao carregar os dados. Verifique se o relatório existe.");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Show loading alert
      Swal.fire({
        title: "Aguarde...",
        text: "Atualizando relatório...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(`http://localhost:5000/api/report/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(report), // Send the updated report data
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar relatório");
      }

      // Close loading alert
      Swal.close();

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Relatório atualizado com sucesso!",
        confirmButtonText: "OK",
      }).then(() => {
        navigate(`/relatorio/${id}`); // Navigate back to the report view
      });
    } catch (err) {
      console.error("Erro ao atualizar relatório:", err);

      // Close loading alert
      Swal.close();

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao atualizar os dados.",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-relatorio-container">
      <h1>Editar Relatório de {report.nome}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>Nome : </label> <br />
          <input
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
            type="text"
            name="nome"
            value={report.nome}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>Email : </label> <br />
          <input
            type="email"
            name="email"
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
            value={report.email}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>Telefone:</label> <br />
          <input
            type="text"
            name="telefone"
            value={report.telefone}
            onChange={handleInputChange}
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
          />
        </div>
        <br />
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>BI:</label> <br />
          <input
            type="text"
            name="bi"
            value={report.bi}
            onChange={handleInputChange}
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
          />
        </div>
        <br />
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>Resultado Final (%): </label> <br />
          <input
            type="number"
            name="finalScore"
            value={report.finalScore}
            onChange={handleInputChange}
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
          />
        </div>
        <br />
        <div>
          <label style={{ fontSize: "18px", fontWeight: 500, color: "green" }}>Classificação : </label> <br />
          <input
            type="text"
            name="category"
            value={report.category}
            onChange={handleInputChange}
            style={{ marginLeft: "1px", marginTop: "5px", outline: "none", border: "1.5px solid green", borderRadius: "3px", padding: "5px", width: "300px" }}
          />
        </div>
        <br />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditRelatorio;