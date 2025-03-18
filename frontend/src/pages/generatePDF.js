import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../src/asstes/VVVV.jpeg"; // Ensure this path is correct

const generatePDF = (report) => {
  if (!report || !report.userId || !report.nome) {
    console.error("Invalid report object:", report);
    return;
  }

  const doc = new jsPDF();

  // Header with Logo and Title
  doc.addImage(logo, "PNG", 150, 10, 40, 20); // Logo on the right
  doc.setFontSize(22);
  doc.setTextColor(40, 40, 120);
  doc.text("Relatório Individual", 10, 30);

  // Introduction Section
  doc.setFontSize(12);
  doc.setTextColor(50, 50, 50);
  doc.text(
    "Este relatório oferece uma análise detalhada do seu desempenho na avaliação, destacando seus pontos fortes e áreas a serem aprimoradas.",
    10,
    40,
    { maxWidth: 180 }
  );

  // User Information
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text("Informações do Utilizador", 10, 60);

  const userInfo = [
    ["Nome:", report.nome],
    ["Email:", report.email],
    ["Telefone:", report.telefone],
    ["BI:", report.bi],
    ["Pontuação Total:", report.totalScore],
    ["Pontuação Final:", report.finalScore],
    ["Categoria:", report.category],
  ];

  autoTable(doc, {
    startY: 65,
    head: [["Campo", "Detalhe"]],
    body: userInfo,
    styles: { cellPadding: 2, fontSize: 10 },
    theme: "striped",
  });

  // Assessment Responses
  doc.setFontSize(14);
  doc.text("Detalhes da Avaliação", 10, doc.lastAutoTable.finalY + 10);

  const tableData = [];
  Object.keys(report.respostas).forEach((categoria) => {
    Object.entries(report.respostas[categoria]).forEach(([key, value]) => {
      tableData.push([categoria, key, value.text, `${value.points} pontos`]);
    });
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Categoria", "Pergunta", "Resposta", "Pontuação"]],
    body: tableData,
    styles: { cellPadding: 2, fontSize: 10 },
    columnStyles: { 0: { cellWidth: 60 } },
    theme: "grid",
  });

  // Recommendations and Improvements
  doc.setFontSize(14);
  doc.text("Áreas de Melhoria e Recomendações", 10, doc.lastAutoTable.finalY + 15);

  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.text(
    report.recomendacoes ||
      "- Solicite já o serviço de mentoria para melhorar o seu desempenho.",
    10,
    doc.lastAutoTable.finalY + 25,
    { maxWidth: 180 }
  );

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(
    "Este relatório foi gerado automaticamente após a conclusão da avaliação.",
    10,
    doc.lastAutoTable.finalY + 45
  );

  doc.text(
    "Se tiver alguma dúvida ou precisar de mais detalhes, entre em contato com nosso suporte.",
    10,
    doc.lastAutoTable.finalY + 55
  );

  // Save PDF
  console.log("Saving PDF...");
  doc.save(`Relatorio_${report.userId}.pdf`);
};

export default generatePDF;