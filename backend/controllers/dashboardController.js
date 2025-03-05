const Report = require('../models/Report');

// Obter todas as solicitações para o painel administrativo
const getAllRequests = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    return res.status(200).json(reports);
  } catch (error) {
    console.error('Erro ao obter as solicitações:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar as solicitações' });
  }
};

// Obter um único relatório pelo ID
const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);

    if (!report) {
      return res.status(404).json({ error: 'Relatório não encontrado' });
    }

    return res.status(200).json(report);
  } catch (error) {
    console.error('Erro ao buscar o relatório:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar o relatório' });
  }
};

module.exports = {
  getAllRequests,
  getReportById,
};
