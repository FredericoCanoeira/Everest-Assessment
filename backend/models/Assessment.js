const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  answers: { type: Array, required: true }, // Corrigido para armazenar respostas corretamente
  finalScore: { type: Number, required: true }, // Adicionado para armazenar pontuação total
  category: { type: String, required: true }, // Adicionado para armazenar categoria
  comments: { type: String, default: "" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Assessment", AssessmentSchema);
