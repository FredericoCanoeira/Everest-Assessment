const jwt = require('jsonwebtoken'); // Usar JWT para autenticação
const User = require('../models/User'); // Modelo do usuário (ajuste o caminho conforme sua estrutura)

// Middleware para verificar se o usuário é administrador
const adminMiddleware = async (req, res, next) => {
    try {
        // Verificar o token no cabeçalho
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
        }

        // Decodificar o token e obter o ID do usuário
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Acesso negado. Permissões insuficientes.' });
        }

        req.user = user; // Adicionar o usuário na requisição
        next(); // Prosseguir com a requisição
    } catch (error) {
        res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
};

module.exports = adminMiddleware;
