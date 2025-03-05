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
      text: "Tem definidos os objectivos desempenho do ano corrente da área sob sua responsabilidade?",
      options: [
        { text: "Sim", points: 4, followUp: "Liste os objectivos de desempenho do ano corrente da área sob sua responsabilidade", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 3,
      text: "Existe um Plano de actividades da área sob sua responsabilidade?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o Plano de actividades da área sob sua responsabilidade", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
  ],
  "Controlo de gestão": [
    {
      id: 1,
      text: "Tem definidos os indicadores de desempenho do ano corrente da área sob sua responsabilidade?",
      options: [
        { text: "Sim", points: 4, followUp: "Por favor, listar no campo abaixo os indicadores de desempenho do ano corrente da área sob sua responsabilidade", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 2,
      text: "Existe um Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 3,
      text: "No último mês elaborou e remeteu ao seu superior hierárquico o Relatório de actividades da área sob sua responsabilidade?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o Relatório de Gestão/ Desempenho do último mês da área sob sua responsabilidade", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
  ],
  "Planeamento e organização do trabalho": [
    {
      id: 1,
      text: "Semanalmente, cria uma Lista de Prioridades?",
      options: [
        { text: "Sim", points: 4, followUp: "Por favor, listar no campo abaixo a Lista de Prioridades referente às últimas duas semanas", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 2,
      text: "Tem rotinas definidas de acompanhamento do trabalho dos elementos da equipa?",
      options: [
        { text: "Sim", points: 4, followUp: "Por favor, listar no campo abaixo as rotinas de acompanhamento do trabalho dos elementos da equipa sob sua responsabilidade", inputType: "textarea" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 3,
      text: "Nos últimas 3 semanas realizou alguma sessão de trabalho em grupo com a equipa para acompanhamento da execução dos objectivos e actividades?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar a evidência da última sessão de trabalho em grupo realizada com a equipa para acompanhamento da execução dos objectivos e actividades", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 4,
      text: "Existe um Mapa de tarefas da equipa?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o Mapa de tarefas da equipa", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
  ],
  "Desenvolvimento e supervisão da equipa": [
    {
      id: 1,
      text: "Nos últimos 12 meses realizou um diagnóstico de competências dos elementos da equipa?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o último relatório de diagnóstico de competências dos elementos da equipa sob sua responsabilidade", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 2,
      text: "Tem um plano de desenvolvimento de competências do ano corrente dos elementos da equipa?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o plano de desenvolvimento de competências do ano corrente dos elementos da equipa sob sua responsabilidade", inputType: "file" },
        { text: "Não", points: 0 },
      ],
    },
    {
      id: 3,
      text: "Tem uma Mapa de registos diários da equipa?",
      options: [
        { text: "Sim", points: 10, followUp: "Por favor, anexar o Mapa de registos diários da equipa sob sua responsabilidade", inputType: "file" },
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

    // Se houver mais perguntas na mesma competência
    if (currentQuestionIndex < competencies[currentCompetency].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } 
    // Se não houver mais perguntas, passa para a próxima competência
    else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } 
    // Se todas as competências e perguntas foram respondidas
    else {
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

  const handleSubmit = async () => {
    const results = Object.keys(formData.respostas).map((competencyKey) => {
      const competency = formData.respostas[competencyKey];
      return Object.keys(competency).map((questionId) => {
        const question = competency[questionId];
        return {
          competency: competencyKey,
          questionId: questionId,
          answer: question.text,
          points: question.points,
          followUp: question.followUp || null,
        };
      });
    }).flat();

    const requestData = {
      userId,
      results,
    };

    try {
      const response = await fetch("http://localhost:5000/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
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
