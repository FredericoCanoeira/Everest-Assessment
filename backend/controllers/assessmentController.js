const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment');
const Report = require('../models/Report');
const User = require('../models/User');
const NotificationService = require('../services/NotificationService');

// Salvar a autoavaliação no banco de dados
router.post("/api/assessment", async (req, res) => {
    try {
        const { userId, results } = req.body;
        console.log("🔍 Dados recebidos no backend:", req.body);

        if (!userId || !results || results.length === 0) {
            return res.status(400).json({ message: "Dados inválidos: userId ou results estão ausentes." });
        }

        // Verificar se o usuário existe
        const user = await User.findById(userId);
        if (!user) {
            console.log("❌ Usuário não encontrado no banco de dados.");
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Calcular pontuação total
        const totalScore = results.reduce((acc, curr) => acc + (curr.points || 0), 0);
        let classification = '';
        let recommendations = '';

        if (totalScore >= 95) {
            classification = 'Líder Everest';
            recommendations = 'Parabéns! Você demonstrou competências de liderança extraordinárias.';
        } else if (totalScore >= 49) {
            classification = 'Líder Kilimanjaro';
            recommendations = 'Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar.';
        } else {
            classification = 'Líder Moco';
            recommendations = 'Nível inicial. Você precisa desenvolver diversas competências.';
        }

        // Criar ou atualizar a avaliação
        let assessment = await Assessment.findOneAndUpdate(
            { userId },
            { userId, results, totalScore, classification },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log("✅ Autoavaliação salva:", assessment);

        // Criar ou atualizar relatório
        let report = await Report.findOneAndUpdate(
            { userId },
            {
                userId,
                userName: user.name,
                email: user.email,
                phone: user.phone,
                bi: user.bi,
                date: new Date(),
                assessmentResults: results,
                classification,
                recommendations,
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log("✅ Relatório atualizado:", report);

        // Notificar admin
        NotificationService.notifyAdmin(`Nova avaliação submetida por ${user.name}`);

        res.status(201).json({ message: 'Avaliação salva com sucesso', assessment });
    } catch (error) {
        console.error("❌ Erro ao salvar avaliação:", error);
        res.status(500).json({ message: 'Erro ao salvar avaliação', error });
    }
});

module.exports = router;
