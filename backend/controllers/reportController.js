const Report = require('../models/Report');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Configurar upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Criar um novo relatório com upload de arquivo
const createReport = async (req, res) => {
  try {
    const { userId, name, email, category, score, comments } = req.body;
    const filePath = req.file ? req.file.path : null;

    if (!userId || !name || !email || !category || !score) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const report = new Report({
      userId,
      name,
      email,
      category,
      score,
      comments,
      filePath
    });

    await report.save();
    return res.status(201).json({ success: true, message: 'Relatório criado com sucesso', report });
  } catch (error) {
    console.error('Erro ao criar o relatório:', error.message);
    return res.status(500).json({ error: 'Erro ao criar o relatório' });
  }
};

// Gerar e baixar relatório em PDF
const generatePDF = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Buscando relatório para:", id);

    const reports = await Report.find({ userId: { $regex: `^${id.trim()}$`, $options: "i" } });

    console.log("Relatórios encontrados:", reports);

    if (!reports || reports.length === 0) {
      return res.status(404).json({ error: "Relatório não encontrado" });
    }

    // Continua com a geração do PDF...
  } catch (error) {
    console.error("Erro ao gerar PDF:", error.message);
    return res.status(500).json({ error: "Erro ao gerar o PDF" });
  }
};


// const generatePDF = async (req, res) => {
//   try {
//     // const { id } = req.params;
//     // const report = await Report.findById(id);
//     const { id } = req.params;
//     const report = await Report.findOne({ userId: id }); // Busca pelo userId correto
    
//     if (!report) {
//       return res.status(404).json({ error: 'Relatório não encontrado' });
//     }

//     const pdfPath = path.join(__dirname, `../reports/report_${id}.pdf`);
//     const doc = new PDFDocument();

//     doc.pipe(fs.createWriteStream(pdfPath));
//     doc.fontSize(20).text('Relatório de Avaliação', { align: 'center' });
//     doc.moveDown();
//     doc.fontSize(14).text(`Nome: ${report.name}`);
//     doc.text(`Email: ${report.email}`);
//     doc.text(`Categoria: ${report.category}`);
//     doc.text(`Pontuação: ${report.score}`);
//     doc.moveDown();
//     doc.text(`Comentários: ${report.comments || 'Nenhum'}`);
//     doc.end();

//     return res.status(200).json({ success: true, message: 'PDF gerado com sucesso', pdfPath });
//   } catch (error) {
//     console.error('Erro ao gerar PDF:', error.message);
//     return res.status(500).json({ error: 'Erro ao gerar o PDF' });
//   }
// };

module.exports = {
  createReport,
  generatePDF
};

// const Report = require('../models/Report');

// // Função para pegar o relatório com base no userId
// exports.getReport = async (req, res) => {
//   try {
//     const report = await Report.findOne({ userId: req.params.userId });
//     if (!report) {
//       return res.status(404).json({ message: "Relatório não encontrado" });
//     }
//     res.json(report);
//   } catch (err) {
//     res.status(500).json({ message: "Erro ao buscar relatório" });
//   }
// };

