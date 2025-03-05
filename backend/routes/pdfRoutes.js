// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// // Endpoint para baixar o relatório em PDF
// router.get('/download-pdf/:reportId', async (req, res) => {
//     try {
//         const { reportId } = req.params;
//         const pdfPath = path.join(__dirname, `../uploads/${reportId}.pdf`);

//         // Verificar se o arquivo existe
//         if (!fs.existsSync(pdfPath)) {
//             return res.status(404).json({ error: 'PDF não encontrado' });
//         }

//         // Enviar o arquivo para o usuário
//         res.download(pdfPath, `Relatorio-${reportId}.pdf`, (err) => {
//             if (err) {
//                 console.error('Erro ao enviar o PDF:', err);
//                 res.status(500).json({ error: 'Erro ao baixar o PDF' });
//             }
//         });
//     } catch (error) {
//         console.error('Erro no download do PDF:', error);
//         res.status(500).json({ error: 'Erro ao processar o pedido' });
//     }
// });

// module.exports = router;


const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Endpoint para baixar o relatório em PDF
router.get('/download-pdf/:reportId', async (req, res) => {
    try {
        const { reportId } = req.params;
        const pdfPath = path.join(__dirname, `../uploads/${reportId}.pdf`);

        // Verificar se o arquivo existe
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).json({ error: 'PDF não encontrado' });
        }

        // Enviar o arquivo para o usuário
        res.download(pdfPath, `Relatorio-${reportId}.pdf`, (err) => {
            if (err) {
                console.error('Erro ao enviar o PDF:', err);
                res.status(500).json({ error: 'Erro ao baixar o PDF' });
            }
        });
    } catch (error) {
        console.error('Erro no download do PDF:', error);
        res.status(500).json({ error: 'Erro ao processar o pedido' });
    }
});

module.exports = router;
