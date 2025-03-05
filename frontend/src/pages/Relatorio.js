// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// const Relatorio = () => {
//   const { id } = useParams();
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/reports/${id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Relatório não encontrado");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setReport(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Carregando relatório...</p>;
//   if (error) return <p>Erro: {error}</p>;

//   return (
//     <div className="relatorio-container">
//       <h1>Relatório de {report.nome}</h1>
//       <p><strong>ID:</strong> {report.userId}</p>
//       <p><strong>Nome:</strong> {report.nome}</p>
//       <p><strong>Email:</strong> {report.email}</p>
//       <p><strong>Telefone:</strong> {report.telefone}</p>
//       <p><strong>BI:</strong> {report.bi}</p>
//       <p><strong>Data de Criação:</strong> {new Date(report.createdAt).toLocaleString()}</p>
//     </div>
//   );
// };

// export default Relatorio;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const Relatorio = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/relatorio/${userId}`);

//         if (!response.ok) {
//           throw new Error("Erro ao buscar relatório");
//         }
//         const data = await response.json();
//         setReport(data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Erro ao carregar relatório:", err);
//         setError("Erro ao carregar os dados.");
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, [userId]);

//   // Função para baixar relatório em PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Relatório de Avaliação - ${report.nome}`, 10, 10);

//     const tableData = [];
//     Object.keys(report.respostas).forEach((categoria) => {
//       Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
//         tableData.push([categoria, key, value.text, value.points]);
//       });
//     });

//     doc.autoTable({
//       head: [["Categoria", "Questão", "Resposta", "Pontos"]],
//       body: tableData,
//     });

//     doc.save(`Relatorio_${userId}.pdf`);
//   };

//   // Função para excluir o relatório
//   const handleDelete = async () => {
//     if (window.confirm("Tem certeza que deseja excluir este relatório?")) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/report/${userId}`, {
//           method: "DELETE",
//         });
//         if (!response.ok) {
//           throw new Error("Erro ao excluir relatório");
//         }
//         alert("Relatório excluído com sucesso!");
//         navigate("/dashboard");
//       } catch (error) {
//         console.error("Erro ao excluir relatório:", error);
//         alert("Erro ao excluir relatório.");
//       }
//     }
//   };

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="relatorio-container">
//       <h1>Relatório de {report.nome}</h1>
//       <p><strong>Email:</strong> {report.email}</p>
//       <p><strong>Telefone:</strong> {report.telefone}</p>
//       <p><strong>BI:</strong> {report.bi}</p>

//       <h2>Respostas da Avaliação</h2>
//       {Object.keys(report.respostas).map((categoria) => (
//         <div key={categoria}>
//           <h3>{categoria}</h3>
//           <ul>
//             {Object.entries(report.respostas[categoria]).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value.text} - <em>Pontos: {value.points}</em>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button onClick={handleDownloadPDF} className="btn-pdf">Baixar PDF</button>
//       <button onClick={handleDelete} className="btn-delete">Excluir Relatório</button>
//     </div>
//   );
// };

// export default Relatorio;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const Relatorio = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/report/${userId}`);

//         if (!response.ok) {
//           const errorMessage = await response.text(); // Captura a resposta de erro
//           throw new Error(`Erro ao buscar relatório: ${errorMessage}`);
//         }

//         const data = await response.json();
//         setReport(data);
//       } catch (err) {
//         console.error("Erro ao carregar relatório:", err);
//         setError("Erro ao carregar os dados. Verifique se o relatório existe.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, [userId]);

//   // Função para baixar relatório em PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Relatório de Avaliação - ${report.nome}`, 10, 10);

//     const tableData = [];
//     Object.keys(report.respostas).forEach((categoria) => {
//       Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
//         tableData.push([categoria, key, value.text, value.points]);
//       });
//     });

//     doc.autoTable({
//       head: [["Categoria", "Questão", "Resposta", "Pontos"]],
//       body: tableData,
//     });

//     doc.save(`Relatorio_${userId}.pdf`);
//   };

//   // Função para excluir o relatório
//   const handleDelete = async () => {
//     if (window.confirm("Tem certeza que deseja excluir este relatório?")) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/report/${userId}`, {
//           method: "DELETE",
//         });
//         if (!response.ok) {
//           throw new Error("Erro ao excluir relatório");
//         }
//         alert("Relatório excluído com sucesso!");
//         navigate("/dashboard");
//       } catch (error) {
//         console.error("Erro ao excluir relatório:", error);
//         alert("Erro ao excluir relatório.");
//       }
//     }
//   };

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="relatorio-container">
//       <h1>Relatório de {report.nome}</h1>
//       <p><strong>Email:</strong> {report.email}</p>
//       <p><strong>Telefone:</strong> {report.telefone}</p>
//       <p><strong>BI:</strong> {report.bi}</p>

//       <h2>Respostas da Avaliação</h2>
//       {Object.keys(report.respostas).map((categoria) => (
//         <div key={categoria}>
//           <h3>{categoria}</h3>
//           <ul>
//             {Object.entries(report.respostas[categoria]).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value.text} - <em>Pontos: {value.points}</em>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button onClick={handleDownloadPDF} className="btn-pdf">Baixar PDF</button>
//       <button onClick={handleDelete} className="btn-delete">Excluir Relatório</button>
//     </div>
//   );
// };

// export default Relatorio;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const Relatorio = () => {
//   const { id } = useParams(); // Alteração para pegar o parâmetro 'id' na URL
//   const navigate = useNavigate();
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/report/${id}`); // Usando 'id' na URL

//         if (!response.ok) {
//           const errorMessage = await response.text(); // Captura a resposta de erro
//           throw new Error(`Erro ao buscar relatório: ${errorMessage}`);
//         }

//         const data = await response.json();
//         setReport(data);
//       } catch (err) {
//         console.error("Erro ao carregar relatório:", err);
//         setError("Erro ao carregar os dados. Verifique se o relatório existe.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, [id]);

//   // Função para baixar relatório em PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Relatório de Avaliação - ${report.nome}`, 10, 10);

//     const tableData = [];
//     Object.keys(report.respostas).forEach((categoria) => {
//       Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
//         tableData.push([categoria, key, value.text, value.points]);
//       });
//     });

//     doc.autoTable({
//       head: [["Categoria", "Questão", "Resposta", "Pontos"]],
//       body: tableData,
//     });

//     doc.save(`Relatorio_${id}.pdf`);
//   };

//   // Função para excluir o relatório
//   const handleDelete = async () => {
//     if (window.confirm("Tem certeza que deseja excluir este relatório?")) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/report/${id}`, {
//           method: "DELETE",
//         });
//         if (!response.ok) {
//           throw new Error("Erro ao excluir relatório");
//         }
//         alert("Relatório excluído com sucesso!");
//         navigate("/dashboard");
//       } catch (error) {
//         console.error("Erro ao excluir relatório:", error);
//         alert("Erro ao excluir relatório.");
//       }
//     }
//   };

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="relatorio-container">
//       <h1>Relatório de {report.nome}</h1>
//       <p><strong>Nome:</strong> {report.nome}</p>
//       <p><strong>BI:</strong> {report.bi}</p>
//       <p><strong>Email:</strong> {report.email}</p>
//       <p><strong>Telefone:</strong> {report.telefone}</p>

//       <h2>Respostas da Avaliação</h2>
//       {Object.keys(report.respostas).map((categoria) => (
//         <div key={categoria}>
//           <h3>{categoria}</h3>
//           <ul>
//             {Object.entries(report.respostas[categoria]).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value.text} - <em>Pontos: {value.points}</em>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button onClick={handleDownloadPDF} className="btn-pdf">Baixar PDF</button>
//       <button onClick={handleDelete} className="btn-delete">Excluir Relatório</button>
//     </div>
//   );
// };

// export default Relatorio;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Relatorio = () => {
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
    const doc = new jsPDF();
    doc.text(`Relatório de Avaliação - ${report.nome}`, 10, 10);

    const tableData = [];
    Object.keys(report.respostas).forEach((categoria) => {
      Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
        tableData.push([categoria, key, value.text, value.points]);
      });
    });

    doc.autoTable({
      head: [["Categoria", "Questão", "Resposta", "Pontos"]],
      body: tableData,
    });

    doc.save(`Relatorio_${id}.pdf`);
  };

  // Função para editar o relatório
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

