const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://EverestApp:Everest1@cluster0.nr4o5.mongodb.net/EverestAppDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Tempo limite para evitar travamentos
}).then(() => {
  console.log("✅ Conectado ao MongoDB!");
  process.exit(0);
}).catch(err => {
  console.error("❌ Erro ao conectar:", err.message);
  process.exit(1);
});
