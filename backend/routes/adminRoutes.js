const express = require("express");
const router = express.Router();
const Assessment = require("../models/Assessment");

// Obter relatórios de usuários
router.get("/reports", async (req, res) => {
  try {
    const reports = await Assessment.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar relatórios", error });
  }
});

// Excluir relatório
router.delete("/reports/:id", async (req, res) => {
  try {
    await Assessment.findByIdAndDelete(req.params.id);
    res.json({ message: "Relatório excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir relatório", error });
  }
});

module.exports = router;
