import React, { useEffect, useState } from "react";
import API_URL from "../../config";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${API_URL}/api/self-assessment`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Erro ao buscar resultados:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resultados de Autoavaliação</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>Usuário ID:</strong> {result.userId} <br />
            <strong>Categoria:</strong> {result.category} <br />
            <strong>Pontuação Final:</strong> {result.finalScore} <br />
            <strong>Respostas:</strong>
            <ul>
              {result.answers.map((answer, idx) => (
                <li key={idx}>
                  <strong>Competência:</strong> {answer.competency} <br />
                  <strong>Questão:</strong> {answer.questionId} - {answer.answer} <br />
                  <strong>Pontos:</strong> {answer.points} <br />
                  {answer.followUpAnswer && <strong>Detalhe:</strong>} {answer.followUpAnswer}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default Results;
