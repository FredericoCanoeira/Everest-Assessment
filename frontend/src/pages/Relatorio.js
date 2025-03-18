import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import generatePDF from "./generatePDF";
import logo from "../../src/asstes/VVVV.jpeg"
import { Box, Button } from "@mui/material";

const Relatorio = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      padding: '0',
    },
    container: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      height: "100%",
      position: 'relative'
    },
    logo: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      height: '70px',
      width: '100px'
    },
    title: {
      color: 'rgb(57, 57, 152)',
      textAlign: 'left'
    },
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '12px solid #d9d9d9'
    },
    left: {
      fontWeight: 'bold',
      backgroundColor: '#d9e2f3',
      width: '20%',
      padding: '20px'
    },
    right: {
      width: '80%',
      padding: '8px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      textAlign: 'center'
    },
    thtd: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left'
    },
    th: {
      background: '#f0f0f0'
    }
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      generatePDF(report);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-relatorio/${id}`);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img src={logo} alt="Everest 4.0" style={styles.logo} />
        <h2 style={styles.title}>Relatório Individual</h2>

        <div style={styles.section}>
          <div style={styles.left}>Autoavaliação</div>
          <div style={styles.right}>Liderança</div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Introdução</div>
          <div style={styles.right}>Este relatório oferece uma análise detalhada do seu desempenho na autoavaliação...</div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Nome do Utilizador</div>
          <div style={styles.right}>{report?.nome}</div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Resultado</div>
          <div style={styles.right}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={{ ...styles.thtd, ...styles.th }}>Teste</th>
                  <th style={{ ...styles.thtd, ...styles.th }}>Score</th>
                  <th style={{ ...styles.thtd, ...styles.th }}>Resultado</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(report?.respostas || {}).map(([area, respostas]) => (
                  <tr key={area}>
                    <td style={styles.thtd}>{area}</td>
                    <td style={styles.thtd}>{Object.values(respostas).reduce((acc, curr) => acc + curr.points, 0)}</td>
                    <td style={styles.thtd}>{report?.finalScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Classificação</div>
          <div style={styles.right}>{report?.category}</div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Total Score</div>
          <div style={styles.right}>{report?.totalScore}</div>
        </div>
        <div style={styles.section}>
          <div style={styles.left}>Áreas de Melhoria</div>
          <div style={styles.right}>
          sit amet consectetur, adipisicing elit. Harum aut accusamus nihil commodi quos tempore eaque fugit tur dolore quis asperiores doloremque? Dolor!</div>
        </div>
        <div style={styles.section}>
          <div style={styles.left}>Recomendações</div>
          <div style={styles.right}>
          Este relatório foi elaborado Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem doloremqu axime. Aut rem non repellat, quia amet soluta architecto libero hic! Accusamus incidunt fuga blanditiis! com base nas respostas por você fornecidas...</div>
        </div>

        <div style={styles.section}>
          <div style={styles.left}>Apoio ao Cliente Everest</div>
          <div style={styles.right}>935 462 360</div>
        </div>
      </div>
      
    </div>
  );
};

export default Relatorio;
