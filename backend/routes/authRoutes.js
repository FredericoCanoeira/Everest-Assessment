const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const SECRET_KEY = "everest_super_secret_key"; // Chave secreta para gerar o token JWT

// Superusuário fixo
const SUPERUSER = {
  email: "admin@everest40.com",
  password: "everest40",
};

// Rota de login para autenticação
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Verifica se o usuário é o superusuário fixo
  if (email === SUPERUSER.email && password === SUPERUSER.password) {
    // Gera um token JWT
    const token = jwt.sign({ email: SUPERUSER.email, role: "admin" }, SECRET_KEY, {
      expiresIn: "7d", // O token expira em 7 dias
    });

    return res.json({ message: "Login bem-sucedido!", token });
  }

  return res.status(401).json({ message: "Credenciais inválidas" });
});

module.exports = router;
