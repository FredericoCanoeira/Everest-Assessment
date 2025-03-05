// const express = require("express");
// const router = express.Router();
// const Report = require("../models/Report"); // ✅ Agora importamos corretamente o modelo do MongoDB

// // ✅ Criar a rota POST para salvar os dados da solicitação
// router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, bi, email, userId } = req.body;

//     if (!nome || !telefone || !bi || !email || !userId) {
//       return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//     }

//     const newReport = new Report({ nome, telefone, bi, email, userId });
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

// // ✅ Criar a rota GET para buscar relatório por userId
// router.get("/:id", async (req, res) => {
//   try {
//     console.log("🔍 ID recebido:", req.params.id);

//     const report = await Report.findOne({ userId: req.params.id.trim() });

//     if (!report) {
//       console.log("❌ Relatório não encontrado para ID:", req.params.id);
//       return res.status(404).json({ error: "Relatório não encontrado" });
//     }

//     console.log("✅ Relatório encontrado:", report);
//     res.json(report);
//   } catch (error) {
//     console.error("🚨 Erro ao buscar relatório:", error);
//     res.status(500).json({ error: "Erro no servidor", details: error.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Report = require("../models/Report"); // ✅ Agora importamos corretamente o modelo do MongoDB

// // ✅ Criar a rota POST para salvar os dados da solicitação
// router.post("/", async (req, res) => {
//   try {
//     const { nome, telefone, bi, email, userId } = req.body;

//     if (!nome || !telefone || !bi || !email || !userId) {
//       return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//     }

//     const newReport = new Report({ nome, telefone, bi, email, userId });
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

// // ✅ Criar a rota GET para buscar relatório por userId
// router.get("/:id", async (req, res) => {
//   try {
//     console.log("🔍 ID recebido:", req.params.id);

//     const report = await Report.findOne({ userId: req.params.id.trim() });

//     if (!report) {
//       console.log("❌ Relatório não encontrado para ID:", req.params.id);
//       return res.status(404).json({ error: "Relatório não encontrado" });
//     }

//     console.log("✅ Relatório encontrado:", report);
//     res.json(report);
//   } catch (error) {
//     console.error("🚨 Erro ao buscar relatório:", error);
//     res.status(500).json({ error: "Erro no servidor", details: error.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Report = require('../models/Report');

// router.get('/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const report = await Report.findOne({ userId }); // Verifique se o nome do campo é `userId`
//     if (!report) {
//       return res.status(404).json({ error: 'Relatório não encontrado.' });
//     }
//     res.json(report);
//   } catch (err) {
//     res.status(500).json({ error: 'Erro ao carregar relatório.' });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Report = require('../models/Report');  // Certifique-se de que o modelo Report está correto

// // Rota para obter o relatório com base no userId
// router.get('/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;  // Captura o userId da URL
//     const report = await Report.findOne({ userId });  // Busca o relatório baseado no userId
    
//     if (!report) {
//       return res.status(404).json({ error: 'Relatório não encontrado.' });
//     }
//     res.json(report);  // Retorna o relatório com os dados do usuário
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao carregar relatório.' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Report = require('../models/Report');  // Certifique-se de que o modelo Report está correto

// Rota para obter o relatório com base no userId
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;  // Captura o userId da URL
    const report = await Report.findOne({ userId });  // Busca o relatório baseado no userId
    
    if (!report) {
      return res.status(404).json({ error: 'Relatório não encontrado.' });
    }
    res.json(report);  // Retorna o relatório com os dados do usuário
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao carregar relatório.' });
  }
});

module.exports = router;
