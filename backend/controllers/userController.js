const User = require("../models/User");

// Registrar um novo usuário
exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Usuário registrado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário", error });
  }
};
