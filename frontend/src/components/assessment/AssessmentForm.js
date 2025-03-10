// import React, { useState } from "react";
// import "./AssessmentForm.css";
// import Question from "../common/Question";
// import { useNavigate } from "react-router-dom";

// const competencies = {
//   "Visão Estratégica e Planeamento Estratégico": [
//     {
//       id: 1,
//       text: "Conhece os objectivos estratégicos da sua empresa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos estratégicos da empresa",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem definidos os objectivos desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Existe um Plano de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Plano de actividades da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Controlo de gestão": [
//     {
//       id: 1,
//       text: "Tem definidos os indicadores de desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os indicadores de desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Existe um Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "No último mês elaborou e remeteu ao seu superior hierárquico o Relatório de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Relatório de Gestão/ Desempenho do último mês da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Planeamento e organização do trabalho": [
//     {
//       id: 1,
//       text: "Semanalmente, cria uma Lista de Prioridades?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo a Lista de Prioridades referente às últimas duas semanas",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem rotinas definidas de acompanhamento do trabalho dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo as rotinas de acompanhamento do trabalho dos elementos da equipa sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Nos últimas 3 semanas realizou alguma sessão de trabalho em grupo com a equipa para acompanhamento da execução dos objectivos e actividades?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar a evidência da última sessão de trabalho em grupo realizada com a equipa para acompanhamento da execução dos objectivos e actividades",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 4,
//       text: "Existe um Mapa de tarefas da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de tarefas da equipa",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Desenvolvimento e supervisão da equipa": [
//     {
//       id: 1,
//       text: "Nos últimos 12 meses realizou um diagnóstico de competências dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o último relatório de diagnóstico de competências dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem um plano de desenvolvimento de competências do ano corrente dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o plano de desenvolvimento de competências do ano corrente dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Tem uma Mapa de registos diários da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de registos diários da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
// };

// // Componente principal do formulário de avaliação
// const AssessmentForm = () => {
//   // Estados para o controle do formulário
//   const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [finalScore, setFinalScore] = useState(0);
//   const [category, setCategory] = useState("");
//   const [followUpAnswer, setFollowUpAnswer] = useState("");
//   const [showFollowUp, setShowFollowUp] = useState(false);
//   const [categoryMessage, setCategoryMessage] = useState(""); // Variável de estado para a mensagem de categoria

//   const navigate = useNavigate();

//   // Obtenção das questões da competência atual
//   const competenciesKeys = Object.keys(competencies);
//   const currentCompetency = competenciesKeys[currentCompetencyIndex];
//   const currentQuestions = competencies[currentCompetency];
//   const currentQuestion = currentQuestions[currentQuestionIndex];

//   // Função para processar a resposta do usuário
//   const processAnswer = (answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers.push({
//       competency: currentCompetency,
//       questionId: currentQuestion.id,
//       answer: answer.text,
//       points: answer.points,
//       followUpAnswer: followUpAnswer || null,
//     });
//     setAnswers(updatedAnswers);
//     setFollowUpAnswer(""); // Reseta o follow-up
//     setShowFollowUp(false); // Oculta o follow-up ao avançar

//     // Avança para a próxima questão ou competência
//     if (currentQuestionIndex < currentQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
//       setCurrentCompetencyIndex(currentCompetencyIndex + 1);
//       setCurrentQuestionIndex(0);
//     } else {
//       // Calcula a pontuação total e categoria
//       const maxScore = competenciesKeys.reduce((acc, key) => {
//         return acc + competencies[key].reduce((sum, question) => {
//           const maxPoints = Math.max(...question.options.map((option) => option.points));
//           return sum + maxPoints;
//         }, 0);
//       }, 0);

//       const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
//       const scorePercentage = Math.round((totalScore / maxScore) * 100);

//       setFinalScore(scorePercentage);

//       // Determina a categoria com base na pontuação
//       let finalCategory = "";
//       let message = "";
//       if (totalScore >= 95) {
//         finalCategory = "Líder Everest";
//         message = "Parabéns! Você demonstrou competências de liderança extraordinárias.";
//       } else if (totalScore >= 49) {
//         finalCategory = "Líder Kilimanjaro";
//         message = "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar.";
//       } else {
//         finalCategory = "Líder Moco";
//         message = "Nível inicial. Você precisa desenvolver diversas competências.";
//       }
//       setCategory(finalCategory);
//       setCategoryMessage(message); // Define a mensagem correspondente
//       setIsCompleted(true); // Marca a avaliação como concluída
//     }
//   };

//   // Função que lida com a resposta do usuário
//   const handleAnswer = (answer) => {
//     if (answer.text === "Sim" && answer.followUp) {
//       setShowFollowUp(true); // Exibe o follow-up se a resposta for "Sim"
//     } else {
//       processAnswer(answer); // Processa diretamente se não houver follow-up
//     }
//   };

//   // Função para submeter o follow-up (resposta adicional)
//   const handleFollowUpSubmit = () => {
//     if (followUpAnswer) {
//       const answer = currentQuestion.options.find((opt) => opt.text === "Sim");
//       processAnswer(answer); // Processa a resposta do follow-up
//     } else {
//       alert("Por favor, complete o campo de follow-up antes de continuar.");
//     }
//   };

//   // Função para redirecionar para a página de pagamento
//   const handleRedirectToPayment = () => {
//     navigate("/payment-information");
//   };

//   return (
//     <div className="assessment-form">
//       {!isCompleted ? (
//         <>
//           <h3 className="competency-title">Competência: {currentCompetency}</h3>
//           {!showFollowUp ? (
//             <div className="question-container">
//             <Question
//               question={currentQuestion.text}
//               options={currentQuestion.options}
//               onAnswer={handleAnswer}
//             />
//             </div>
//           ) : (
//             // Renderiza apenas o follow-up (campo adicional)
//             <div className="follow-up">
//               <p>{currentQuestion.options.find((opt) => opt.text === "Sim")?.followUp}</p>
//               {currentQuestion.options.find((opt) => opt.inputType === "textarea") && (
//                 <textarea
//                   value={followUpAnswer}
//                   onChange={(e) => setFollowUpAnswer(e.target.value)}
//                   placeholder="Digite sua resposta aqui"
//                 />
//               )}
//               {currentQuestion.options.find((opt) => opt.inputType === "file") && (
//                 <input
//                   type="file"
//                   onChange={(e) => setFollowUpAnswer(e.target.files[0] || null)}
//                 />
//               )}
//               <button onClick={handleFollowUpSubmit}>Enviar</button>
//             </div>
//           )}
//         </>
//       ) : (
//         // Exibe os resultados finais após a conclusão
//         <div className="results">
//           <h2>Resultado Final</h2>
//           <p>Sua pontuação total: {finalScore}%</p>
//           <p>Classificação: <strong>{category}</strong></p>
//           <p>{categoryMessage}</p> {/* Exibe a mensagem correspondente à categoria */}
//           <button className="final-result-button" onClick={handleRedirectToPayment}>
//             Solicitar o relatório completo para saber os seus pontos fortes e áreas que necessita melhorar
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssessmentForm;

// import React, { useState } from "react";
// import "./AssessmentForm.css";
// import Question from "../common/Question";
// import { useNavigate } from "react-router-dom";

// const competencies = {
//   "Visão Estratégica e Planeamento Estratégico": [
//     {
//       id: 1,
//       text: "Conhece os objectivos estratégicos da sua empresa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos estratégicos da empresa",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem definidos os objectivos desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Existe um Plano de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Plano de actividades da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Controlo de gestão": [
//     {
//       id: 1,
//       text: "Tem definidos os indicadores de desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os indicadores de desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Existe um Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "No último mês elaborou e remeteu ao seu superior hierárquico o Relatório de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Relatório de Gestão/ Desempenho do último mês da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Planeamento e organização do trabalho": [
//     {
//       id: 1,
//       text: "Semanalmente, cria uma Lista de Prioridades?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo a Lista de Prioridades referente às últimas duas semanas",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem rotinas definidas de acompanhamento do trabalho dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo as rotinas de acompanhamento do trabalho dos elementos da equipa sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Nos últimas 3 semanas realizou alguma sessão de trabalho em grupo com a equipa para acompanhamento da execução dos objectivos e actividades?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar a evidência da última sessão de trabalho em grupo realizada com a equipa para acompanhamento da execução dos objectivos e actividades",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 4,
//       text: "Existe um Mapa de tarefas da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de tarefas da equipa",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Desenvolvimento e supervisão da equipa": [
//     {
//       id: 1,
//       text: "Nos últimos 12 meses realizou um diagnóstico de competências dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o último relatório de diagnóstico de competências dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem um plano de desenvolvimento de competências do ano corrente dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o plano de desenvolvimento de competências do ano corrente dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Tem uma Mapa de registos diários da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de registos diários da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
// };

// const AssessmentForm = () => {
//     const [formData, setFormData] = useState({ respostas: {} });
//     const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [isCompleted, setIsCompleted] = useState(false);
//     const [showFollowUp, setShowFollowUp] = useState(false);
//     const [followUpValue, setFollowUpValue] = useState("");
//     const [followUpText, setFollowUpText] = useState("");
//     const navigate = useNavigate();

//     const competenciesKeys = Object.keys(competencies);
//     const currentCompetency = competenciesKeys[currentCompetencyIndex];
//     const currentQuestion = competencies[currentCompetency][currentQuestionIndex];

//     const handleOptionChange = (answer) => {
//         if (answer.followUp) {
//             setShowFollowUp(true);
//             setFollowUpText(answer.followUp);
//             setFollowUpValue("");
//         } else {
//             setShowFollowUp(false);
//             handleNext();
//         }

//         setFormData((prev) => {
//             const updatedRespostas = { ...prev.respostas };
//             if (!updatedRespostas[currentCompetency]) {
//                 updatedRespostas[currentCompetency] = {};
//             }
//             updatedRespostas[currentCompetency][currentQuestion.id] = {
//                 text: answer.text,
//                 points: answer.points,
//                 followUp: answer.inputType ? null : undefined
//             };
//             return { ...prev, respostas: updatedRespostas };
//         });
//     };

//     const handleFollowUpChange = (e) => {
//         setFollowUpValue(e.target.value);
//     };

//     const handleFollowUpSubmit = () => {
//         setFormData((prev) => {
//             const updatedRespostas = { ...prev.respostas };
//             updatedRespostas[currentCompetency][currentQuestion.id].followUp = followUpValue;
//             return { ...prev, respostas: updatedRespostas };
//         });
//         setShowFollowUp(false);
//         handleNext();
//     };

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         setFormData((prev) => {
//             const updatedRespostas = { ...prev.respostas };
//             updatedRespostas[currentCompetency][currentQuestion.id].followUp = file;
//             return { ...prev, respostas: updatedRespostas };
//         });
//         setShowFollowUp(false);
//         handleNext();
//     };

//     const handleNext = () => {
//         if (currentQuestionIndex < competencies[currentCompetency].length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
//             setCurrentCompetencyIndex(currentCompetencyIndex + 1);
//             setCurrentQuestionIndex(0);
//         } else {
//             setIsCompleted(true);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/assessment", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });
//             if (response.ok) {
//                 alert("Avaliação enviada com sucesso!");
//                 navigate("/sucesso");
//             } else {
//                 alert("Erro ao enviar a avaliação");
//             }
//         } catch (error) {
//             console.error("Erro na requisição:", error);
//         }
//     };

//     return (
//         <div className="assessment-form">
//             {!isCompleted ? (
//                 <div className="question-container">
//                     <h3>{currentCompetency}</h3>
//                     {!showFollowUp ? (
//                         <Question question={currentQuestion.text} options={currentQuestion.options} onAnswer={handleOptionChange} />
//                     ) : (
//                         <div className="follow-up-container">
//                             <p>{followUpText}</p>
//                             {currentQuestion.options.find(opt => opt.inputType === "textarea") && (
//                                 <textarea value={followUpValue} onChange={handleFollowUpChange} placeholder="Digite sua resposta" />
//                             )}
//                             {currentQuestion.options.find(opt => opt.inputType === "file") && (
//                                 <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileUpload} />
//                             )}
//                             <button onClick={handleFollowUpSubmit}>Confirmar</button>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <button type="submit" className="submit-button">Enviar Avaliação</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default AssessmentForm;


// import React, { useState, useEffect } from "react";
// import "./AssessmentForm.css";
// import Question from "../common/Question";
// import { useNavigate } from "react-router-dom";
// const { v4: uuidv4 } = require("uuid"); // arante que estamos importando a versão correta do UUID



// const competencies = {
//   "Visão Estratégica e Planeamento Estratégico": [
//     {
//       id: 1,
//       text: "Conhece os objectivos estratégicos da sua empresa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos estratégicos da empresa",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem definidos os objectivos desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os objectivos desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Existe um Plano de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Plano de actividades da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Controlo de gestão": [
//     {
//       id: 1,
//       text: "Tem definidos os indicadores de desempenho do ano corrente da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo os indicadores de desempenho do ano corrente da área sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Existe um Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "No último mês elaborou e remeteu ao seu superior hierárquico o Relatório de actividades da área sob sua responsabilidade?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Relatório de Gestão/ Desempenho do último mês da área sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Planeamento e organização do trabalho": [
//     {
//       id: 1,
//       text: "Semanalmente, cria uma Lista de Prioridades?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo a Lista de Prioridades referente às últimas duas semanas",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem rotinas definidas de acompanhamento do trabalho dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, listar no campo abaixo as rotinas de acompanhamento do trabalho dos elementos da equipa sob sua responsabilidade",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Nos últimas 3 semanas realizou alguma sessão de trabalho em grupo com a equipa para acompanhamento da execução dos objectivos e actividades?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar a evidência da última sessão de trabalho em grupo realizada com a equipa para acompanhamento da execução dos objectivos e actividades",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 4,
//       text: "Existe um Mapa de tarefas da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de tarefas da equipa",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
//   "Desenvolvimento e supervisão da equipa": [
//     {
//       id: 1,
//       text: "Nos últimos 12 meses realizou um diagnóstico de competências dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o último relatório de diagnóstico de competências dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem um plano de desenvolvimento de competências do ano corrente dos elementos da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o plano de desenvolvimento de competências do ano corrente dos elementos da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Tem uma Mapa de registos diários da equipa?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Por favor, anexar o Mapa de registos diários da equipa sob sua responsabilidade",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
// };

// const AssessmentForm = () => { 
//     const [userId, setUserId] = useState(""); // Gera um ID único para o usuário
//     const [formData, setFormData] = useState({ userId: "", respostas: {} });
//     const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [isCompleted, setIsCompleted] = useState(false);
//     const [showFollowUp, setShowFollowUp] = useState(false);
//     const [followUpValue, setFollowUpValue] = useState("");
//     const [followUpText, setFollowUpText] = useState("");
//     const [selectedFile, setSelectedFile] = useState(null);
//     const navigate = useNavigate();

//     // Gera um ID único para o usuário ao carregar o formulário
//     useEffect(() => {
//         const newUserId = uuidv4();
//         setUserId(newUserId);
//         setFormData((prev) => ({ ...prev, userId: newUserId }));
//     }, []);

//     const competenciesKeys = Object.keys(competencies);
//     const currentCompetency = competenciesKeys[currentCompetencyIndex];
//     const currentQuestion = competencies[currentCompetency][currentQuestionIndex];

//     /**
//      * Manipula a resposta do usuário.
//      * Se a opção escolhida exige um follow-up (texto ou arquivo), exibe o campo apropriado.
//      * Caso contrário, avança para a próxima pergunta automaticamente.
//      */
//     const handleOptionChange = (answer) => {
//         if (answer.followUp) {
//             setShowFollowUp(true);
//             setFollowUpText(answer.followUp);
//             setFollowUpValue("");
//             setSelectedFile(null);
//         } else {
//             setShowFollowUp(false);
//             handleNext();
//         }

//         setFormData((prev) => {
//             const updatedRespostas = { ...prev.respostas };
//             if (!updatedRespostas[currentCompetency]) {
//                 updatedRespostas[currentCompetency] = {};
//             }
//             updatedRespostas[currentCompetency][currentQuestion.id] = {
//                 text: answer.text,
//                 points: answer.points,
//                 followUp: answer.inputType ? null : undefined
//             };
//             return { ...prev, respostas: updatedRespostas };
//         });
//     };

//     const handleFollowUpChange = (e) => {
//         setFollowUpValue(e.target.value);
//     };

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     /**
//      * Confirma a resposta do follow-up e avança para a próxima pergunta.
//      */
//     const handleFollowUpSubmit = () => {
//         setFormData((prev) => {
//             const updatedRespostas = { ...prev.respostas };
//             if (selectedFile) {
//                 updatedRespostas[currentCompetency][currentQuestion.id].followUp = selectedFile;
//             } else {
//                 updatedRespostas[currentCompetency][currentQuestion.id].followUp = followUpValue;
//             }
//             return { ...prev, respostas: updatedRespostas };
//         });
//         setShowFollowUp(false);
//         handleNext();
//     };

//     /**
//      * Avança para a próxima pergunta ou competência.
//      * Se todas as perguntas forem respondidas, marca a avaliação como concluída.
//      */
//     const handleNext = () => {
//         if (currentQuestionIndex < competencies[currentCompetency].length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
//             setCurrentCompetencyIndex(currentCompetencyIndex + 1);
//             setCurrentQuestionIndex(0);
//         } else {
//             setIsCompleted(true);
//         }
//     };

//     /**
//      * Envia os dados da avaliação ao backend e redireciona para a página de pagamento.
//      */
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Enviando os seguintes dados para o backend:", formData);

//         try {
//             const response = await fetch("http://localhost:5000/api/assessment", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert("Avaliação enviada com sucesso!");
//                 navigate("/payment-information", { state: { userId } });
//             } else {
//                 alert("Erro ao enviar a avaliação");
//             }
//         } catch (error) {
//             console.error("Erro na requisição:", error);
//         }
//     };

//     return (
//         <div className="assessment-form">
//             {!isCompleted ? (
//                 <div className="question-container">
//                     <h3>{currentCompetency}</h3>
//                     {!showFollowUp ? (
//                         <Question question={currentQuestion.text} options={currentQuestion.options} onAnswer={handleOptionChange} />
//                     ) : (
//                         <div className="follow-up-container">
//                             <p>{followUpText}</p>
//                             {currentQuestion.options.find(opt => opt.inputType === "textarea") && (
//                                 <textarea value={followUpValue} onChange={handleFollowUpChange} placeholder="Digite sua resposta" />
//                             )}
//                             {currentQuestion.options.find(opt => opt.inputType === "file") && (
//                                 <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileChange} />
//                             )}
//                             <button onClick={handleFollowUpSubmit}>Confirmar</button>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <button type="submit" className="submit-button">Enviar Avaliação</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default AssessmentForm;

// import React, { useState, useEffect } from "react";
// import "./AssessmentForm.css";
// import Question from "../common/Question";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; 

// const competencies = {
//   "Visão Estratégica e Planeamento Estratégico": [
//     {
//       id: 1,
//       text: "Conhece os objectivos estratégicos da sua empresa?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Por favor, liste os objectivos estratégicos da empresa",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 2,
//       text: "Tem definidos os objectivos desempenho do ano corrente?",
//       options: [
//         {
//           text: "Sim",
//           points: 4,
//           followUp: "Liste os objectivos de desempenho do ano corrente",
//           inputType: "textarea",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "Existe um Plano de actividades?",
//       options: [
//         {
//           text: "Sim",
//           points: 10,
//           followUp: "Anexe o Plano de actividades",
//           inputType: "file",
//         },
//         {
//           text: "Não",
//           points: 0,
//         },
//       ],
//     },
//   ],
// };

// const MAX_SCORE = 100; // Pontuação máxima para cálculo de percentagem

// const AssessmentForm = () => {
//   const [userId, setUserId] = useState("");
//   const [formData, setFormData] = useState({ userId: "", respostas: {} });
//   const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [finalScore, setFinalScore] = useState(0);
//   const [category, setCategory] = useState("");
//   const [categoryMessage, setCategoryMessage] = useState("");
//   const [showFollowUp, setShowFollowUp] = useState(false);
//   const [followUpText, setFollowUpText] = useState("");
//   const [followUpValue, setFollowUpValue] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const navigate = useNavigate();

//   // Gera um ID único no formato EVR-XXXX
//   useEffect(() => {
//     const newUserId = `EVR-${uuidv4().split("-")[0].toUpperCase()}`;
//     setUserId(newUserId);
//     setFormData((prev) => ({ ...prev, userId: newUserId }));
//   }, []);

//   const competenciesKeys = Object.keys(competencies);
//   const currentCompetency = competenciesKeys[currentCompetencyIndex];
//   const currentQuestion = competencies[currentCompetency][currentQuestionIndex];

//   // Manipula resposta e follow-up (se necessário)
//   const handleOptionChange = (answer) => {
//     if (answer.followUp) {
//       setShowFollowUp(true);
//       setFollowUpText(answer.followUp);
//       setFollowUpValue("");
//       setSelectedFile(null);
//     } else {
//       setShowFollowUp(false);
//       handleNext(answer.points);
//     }

//     setFormData((prev) => {
//       const updatedRespostas = { ...prev.respostas };
//       if (!updatedRespostas[currentCompetency]) {
//         updatedRespostas[currentCompetency] = {};
//       }
//       updatedRespostas[currentCompetency][currentQuestion.id] = {
//         text: answer.text,
//         points: answer.points,
//         followUp: answer.inputType ? null : undefined,
//       };
//       return { ...prev, respostas: updatedRespostas };
//     });
//   };

//   // Manipula input do follow-up
//   const handleFollowUpChange = (e) => {
//     setFollowUpValue(e.target.value);
//   };

//   // Manipula upload de arquivo no follow-up
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   // Confirma o follow-up e avança
//   const handleFollowUpSubmit = () => {
//     setFormData((prev) => {
//       const updatedRespostas = { ...prev.respostas };
//       if (selectedFile) {
//         updatedRespostas[currentCompetency][currentQuestion.id].followUp = selectedFile.name;
//       } else {
//         updatedRespostas[currentCompetency][currentQuestion.id].followUp = followUpValue;
//       }
//       return { ...prev, respostas: updatedRespostas };
//     });

//     setShowFollowUp(false);
//     handleNext(currentQuestion.options.find(opt => opt.text === "Sim").points);
//   };

//   // Avança para a próxima pergunta ou finaliza o teste
//   const handleNext = (points) => {
//     setTotalScore((prev) => prev + points);

//     if (currentQuestionIndex < competencies[currentCompetency].length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
//       setCurrentCompetencyIndex(currentCompetencyIndex + 1);
//       setCurrentQuestionIndex(0);
//     } else {
//       calcularPontuacao();
//     }
//   };

//   // Calcula a pontuação final e define a categoria
//   const calcularPontuacao = () => {
//     const percentScore = Math.round((totalScore / MAX_SCORE) * 100);
//     setFinalScore(percentScore);

//     let finalCategory = "";
//     let message = "";

//     if (percentScore >= 95) {
//       finalCategory = "Líder Everest";
//       message = "Parabéns! Você demonstrou competências de liderança extraordinárias.";
//     } else if (percentScore >= 49) {
//       finalCategory = "Líder Kilimanjaro";
//       message = "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar.";
//     } else {
//       finalCategory = "Líder Moco";
//       message = "Nível inicial. Você precisa desenvolver diversas competências.";
//     }

//     setCategory(finalCategory);
//     setCategoryMessage(message);
//     setIsCompleted(true);
//   };

//   const handleRedirectToPayment = () => {
//     navigate("/payment-information", { state: { userId, totalScore, category } });
//   };

//   return (
//     <div className="assessment-form">
//       {!isCompleted ? (
//         <div className="question-container">
//           <h3>{currentCompetency}</h3>
//           {!showFollowUp ? (
//             <Question question={currentQuestion.text} options={currentQuestion.options} onAnswer={handleOptionChange} />
//           ) : (
//             <div className="follow-up-container">
//               <p>{followUpText}</p>
//               {currentQuestion.options.find(opt => opt.inputType === "textarea") && (
//                 <textarea value={followUpValue} onChange={handleFollowUpChange} placeholder="Digite sua resposta" />
//               )}
//               {currentQuestion.options.find(opt => opt.inputType === "file") && (
//                 <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileChange} />
//               )}
//               <button onClick={handleFollowUpSubmit}>Confirmar</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="results">
//           <h2>Resultado Final</h2>
//           <p>Sua pontuação total: {finalScore}%</p>
//           <p>Classificação: <strong>{category}</strong></p>
//           <p>{categoryMessage}</p>
//           <button className="final-result-button" onClick={handleRedirectToPayment}>
//             Solicitar relatório completo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssessmentForm;


import React, { useState, useEffect } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; 

const competencies = {
  "Visão Estratégica e Planeamento Estratégico": [
    {
      id: 1,
      text: "Conhece os objectivos estratégicos da sua empresa?",
      options: [
        { text: "Sim", points: 4, followUp: "Liste os objectivos estratégicos da empresa", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 2,
      text: "Tem definidos os objectivos desempenho do ano corrente?",
      options: [
        { text: "Sim", points: 4, followUp: "Liste os objectivos de desempenho do ano corrente", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 3,
      text: "Existe um Plano de actividades?",
      options: [
        { text: "Sim", points: 10, followUp: "Anexe o Plano de actividades", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
  ],
};

const MAX_SCORE = 100; 

const AssessmentForm = () => {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({ userId: "", respostas: {} });
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState("");
  const [categoryMessage, setCategoryMessage] = useState("");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [followUpText, setFollowUpText] = useState("");
  const [followUpValue, setFollowUpValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const newUserId = `EVR-${uuidv4().split("-")[0].toUpperCase()}`;
    setUserId(newUserId);
    setFormData((prev) => ({ ...prev, userId: newUserId }));
  }, []);

  const competenciesKeys = Object.keys(competencies);
  const currentCompetency = competenciesKeys[currentCompetencyIndex];
  const currentQuestion = competencies[currentCompetency][currentQuestionIndex];
  console.log("currentQuestion",currentQuestion)

  const handleOptionChange = (answer) => {
    if (answer.followUp) {
      setShowFollowUp(true);
      setFollowUpText(answer.followUp);
      setFollowUpValue("");
      setSelectedFile(null);
    } else {
      setShowFollowUp(false);
      handleNext(answer.points);
    }

    setFormData((prev) => {
      const updatedRespostas = { ...prev.respostas };
      if (!updatedRespostas[currentCompetency]) {
        updatedRespostas[currentCompetency] = {};
      }
      updatedRespostas[currentCompetency][currentQuestion.id] = {
        text: answer.text,
        points: answer.points,
        followUp: answer.inputType ? null : undefined,
      };
      return { ...prev, respostas: updatedRespostas };
    });
  };

  const handleFollowUpChange = (e) => {
    setFollowUpValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFollowUpSubmit = () => {
    setFormData((prev) => {
      const updatedRespostas = { ...prev.respostas };
      if (selectedFile) {
        updatedRespostas[currentCompetency][currentQuestion.id].followUp = selectedFile.name;
      } else {
        updatedRespostas[currentCompetency][currentQuestion.id].followUp = followUpValue;
      }
      return { ...prev, respostas: updatedRespostas };
    });

    setShowFollowUp(false);
    handleNext(currentQuestion.options.find(opt => opt.text === "Sim").points);
  };

  const handleNext = (points) => {
    setTotalScore((prev) => prev + points);

    if (currentQuestionIndex < competencies[currentCompetency].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      calcularPontuacao();
    }
  };

  const calcularPontuacao = () => {
    const percentScore = Math.round((totalScore / MAX_SCORE) * 100);
    setFinalScore(percentScore);

    let finalCategory = "";
    let message = "";

    if (percentScore >= 95) {
      finalCategory = "Líder Everest";
      message = "Parabéns! Você demonstrou competências de liderança extraordinárias.";
    } else if (percentScore >= 49) {
      finalCategory = "Líder Kilimanjaro";
      message = "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar.";
    } else {
      finalCategory = "Líder Moco";
      message = "Nível inicial. Você precisa desenvolver diversas competências.";
    }

    setCategory(finalCategory);
    setCategoryMessage(message);
    setIsCompleted(true);
  };

  // const handleSubmit = async () => {
  //   const requestData = {
  //     userId,
  //     respostas: formData.respostas,
  //     totalScore,
  //     finalScore,
  //     category,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:5000/api/assessment", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(requestData),
  //     });

  //     if (response.ok) {
  //       navigate("/payment-information", { state: { userId, totalScore, category } });
  //     } else {
  //       alert("Erro ao enviar a avaliação");
  //     }
  //   } catch (error) {
  //     console.error("Erro na requisição:", error);
  //   }
  // };
 
  const handleSubmit = async () => {
    const payload = {
      userId,
      respostas: formData?.respostas,
      totalScore,
      finalScore,
      category,
      
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        navigate("/payment-information", { state: { userId, totalScore, category } });
      } else {
        alert("Erro ao enviar a avaliação");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="assessment-form">
      {!isCompleted ? (
        <div className="question-container">
          <h3>{currentCompetency}</h3>
          {!showFollowUp ? (
            <Question question={currentQuestion.text} options={currentQuestion.options} onAnswer={handleOptionChange} />
          ) : (
            <div className="follow-up-container">
              <p>{followUpText}</p>
              {currentQuestion.options.find(opt => opt.inputType === "textarea") && (
                <textarea value={followUpValue} onChange={handleFollowUpChange} placeholder="Digite sua resposta" />
              )}
              {currentQuestion.options.find(opt => opt.inputType === "file") && (
                <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileChange} />
              )}
              <button onClick={handleFollowUpSubmit}>Confirmar</button>
            </div>
          )}
        </div>
      ) : (
        <div className="results">
          <h2>Resultado Final</h2>
          <p>Sua pontuação total: {finalScore}%</p>
          <p>Classificação: <strong>{category}</strong></p>
          <p>{categoryMessage}</p>
          <button className="final-result-button" onClick={handleSubmit}>
            Solicitar relatório completo
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;

