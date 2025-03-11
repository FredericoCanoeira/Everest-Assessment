import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import generatePDF from "./generatePDF";


const Relatorio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("report",report)

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/report/${id}`);

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Erro ao buscar relatório: ${errorMessage}`);
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

  const handleDownloadPDF = () => {
    if (report) {
      generatePDF(report); // Generate and download the PDF
    }
  };


  const handleEdit = () => {
    navigate(`/edit-relatorio/${id}`);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;



  return (
    <div className="relatorio-container">
      <h1>Relatório de {report.nome}</h1>

      {/* Exibindo os dados do formulário de solicitação */}
      <h2>Informações Pessoais</h2>
      <p><strong>Nome:</strong> {report.nome}</p>
      <p><strong>Email:</strong> {report.email}</p>
      <p><strong>Telefone:</strong> {report.telefone}</p>
      <p><strong>BI:</strong> {report.bi}</p>

      {/* Exibindo as informações do Assessment */}
      <h2>Respostas da Avaliação</h2>
      <p><strong>Resultado Final:</strong> {report.finalScore}%</p>
      <p><strong>Classificação:</strong> {report.category}</p>

      {Object.keys(report.respostas).map((categoria) => (
        <div key={categoria}>
          <h3>{categoria}</h3>
          <ul>
            {Object.entries(report.respostas[categoria]).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value.text} - <em>Pontos: {value.points}</em>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={handleDownloadPDF} className="btn-pdf">Baixar PDF</button>
      <button onClick={handleEdit} className="btn-edit">Editar Relatório</button>
    </div>
  );
};

export default Relatorio;

//****************************************