import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../asstes/logo.jpeg"; // Ensure this path is correct

const generatePDF = (report) => {
  if (!report || !report.userId || !report.nome) {
    console.error("Invalid report object:", report);
    return;
  }

  const doc = new jsPDF();

  // Add logo to the PDF
  doc.addImage(logo, "PNG", 10, 10, 50, 20); // Adjust position and size as needed

  // Add title
  doc.setFontSize(18);
  doc.text("Relatório Individual", 10, 40);

  // Add introduction
  doc.setFontSize(12);
  doc.text(
    "Este relatório oferece uma análise detalhada do seu desempenho no Teste Psicotécnico, destacando seus pontos fortes e áreas a serem aprimoradas. O objetivo é orientá-lo no desenvolvimento de habilidades essenciais para o mercado de trabalho.",
    10,
    50,
    { maxWidth: 180 }
  );

  // Add user information dynamically
  doc.setFontSize(14);
  doc.text(`Nome do Utilizador: ${report.nome}`, 10, 70);
  doc.text(`Email: ${report.email}`, 10, 80);
  doc.text(`Telefone: ${report.telefone}`, 10, 90);
  doc.text(`BI: ${report.bi}`, 10, 100);

  // Add assessment details
  doc.setFontSize(14);
  doc.text("Detalhes da Avaliação", 10, 110);
  doc.setFontSize(12);
  doc.text(`Pontuação Total: ${report.totalScore}`, 10, 120);
  doc.text(`Pontuação Final: ${report.finalScore}`, 10, 130);
  doc.text(`Categoria: ${report.category}`, 10, 140);

  // Add assessment categories and answers
  doc.setFontSize(14);
  doc.text("Categorias e Respostas da Avaliação", 10, 150);

  const tableData = [];
  Object.keys(report.respostas).forEach((categoria) => {
    Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
      tableData.push([categoria, key, value.text, `${value.points} pontos`]);
    });
  });

  autoTable(doc, {
    startY: 160,
    head: [["Categoria", "Pergunta", "Resposta", "Pontuação"]],
    body: tableData,
  });

  // Add recommendations dynamically
  doc.setFontSize(14);
  doc.text("Áreas de Melhoria", 10, doc.lastAutoTable.finalY + 10);
  doc.setFontSize(12);
  doc.text("Recomendações:", 10, doc.lastAutoTable.finalY + 20);
  doc.text(
    report.recomendacoes || "- Solicite já o serviço de mentoria, para melhorar o seu desempenho.",
    10,
    doc.lastAutoTable.finalY + 30
  );

  // Footer
  doc.setFontSize(10);
  doc.text("Este relatório foi gerado automaticamente após a conclusão da avaliação.", 10, doc.lastAutoTable.finalY + 50);
  doc.text("Se tiver alguma dúvida ou precisar de mais detalhes, entre em contato com nosso suporte.", 10, doc.lastAutoTable.finalY + 60);

  // Save the PDF
  console.log("Saving PDF...");
  doc.save(`Relatorio_${report.userId}.pdf`);
};

export default generatePDF;