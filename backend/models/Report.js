// const mongoose = require("mongoose");

// // Criar modelo para salvar no banco de dados
// const ReportSchema = new mongoose.Schema({
//   nome: String,
//   telefone: String,
//   bi: String,
//   email: String,
//   userId: String,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Report", ReportSchema);


const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Criar modelo para salvar no banco de dados
const ReportSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  bi: String,
  email: String,
  userId: String,
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", ReportSchema);

// ✅ Criar a rota POST para salvar os dados da solicitação
router.post("/", async (req, res) => {
  try {
    const { nome, telefone, bi, email, userId } = req.body;

    if (!nome || !telefone || !bi || !email || !userId) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const newReport = new Report({
      nome,
      telefone,
      bi,
      email,
      userId,
    });

    await newReport.save();
    res.status(201).json({ message: "Relatório salvo com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar o relatório." });
  }
});

module.exports = router;
