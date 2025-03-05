// const express = require("express");
// const router = express.Router();
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

// const Report = mongoose.model("Report", ReportSchema);

// // ✅ Criar a rota POST para salvar os dados da solicitação
// router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, bi, email, userId } = req.body;

//     if (!nome || !telefone || !bi || !email || !userId) {
//       return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//     }

//     const newReport = new Report({
//       nome,
//       telefone,
//       bi,
//       email,
//       userId,
//     });

//     await newReport.save();
//     res.status(201).json({ message: "Relatório salvo com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao salvar relatório:", error);
//     res.status(500).json({ error: "Erro ao salvar relatório." });
//   }
// });

// // ✅ Criar a rota GET para visualizar os relatórios no painel admin
// router.get("/", async (req, res) => {
//   try {
//     const reports = await Report.find().sort({ createdAt: -1 });
//     res.json(reports);
//   } catch (error) {
//     console.error("Erro ao buscar relatórios:", error);
//     res.status(500).json({ error: "Erro ao buscar relatórios." });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

// // Criar modelo para salvar no banco de dados
// const ReportSchema = new mongoose.Schema({
//   nome: String,
//   telefone: String,
//   bi: String,
//   email: String,
//   userId: String,
//   category: String,  // Adicionado
//   score: Number,     // Adicionado
//   comments: String,  // Adicionado
//   createdAt: { type: Date, default: Date.now },
// });

// const Report = mongoose.model("Report", ReportSchema);

// // ✅ Criar a rota POST para salvar os dados da solicitação
// router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, bi, email, userId, category, score, comments } = req.body;

//     if (!nome || !telefone || !bi || !email || !userId || !category || score === undefined) {
//       return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//     }

//     const newReport = new Report({
//       nome,
//       telefone,
//       bi,
//       email,
//       userId,
//       category,
//       score,
//       comments,
//     });

//     await newReport.save();
//     res.status(201).json({ message: "Relatório salvo com sucesso!", report: newReport });
//   } catch (error) {
//     console.error("Erro ao salvar relatório:", error);
//     res.status(500).json({ error: "Erro ao salvar relatório." });
//   }
// });

// // ✅ Criar a rota GET para visualizar todos os relatórios no painel admin
// router.get("/", async (req, res) => {
//   try {
//     const reports = await Report.find().sort({ createdAt: -1 });
//     res.json(reports);
//   } catch (error) {
//     console.error("Erro ao buscar relatórios:", error);
//     res.status(500).json({ error: "Erro ao buscar relatórios." });
//   }
// });

// // ✅ Criar a rota GET para buscar um relatório pelo userId
// router.get("/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const report = await Report.findOne({ userId });

//     if (!report) {
//       return res.status(404).json({ error: "Relatório não encontrado." });
//     }

//     res.json(report);
//   } catch (error) {
//     console.error("Erro ao buscar relatório:", error);
//     res.status(500).json({ error: "Erro ao buscar relatório." });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
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

// const Report = mongoose.model("Report", ReportSchema);

// // ✅ Criar a rota POST para salvar os dados da solicitação
// router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, bi, email, userId } = req.body;

//     if (!nome || !telefone || !bi || !email || !userId) {
//       return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//     }

//     const newReport = new Report({
//       nome,
//       telefone,
//       bi,
//       email,
//       userId,
//     });

//     await newReport.save();
//     res.status(201).json({ message: "Relatório salvo com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao salvar o relatório." });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  bi: String,
  email: String,
  userId: String,
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", ReportSchema);

// Rota POST para salvar os dados da solicitação
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
