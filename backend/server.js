// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// // Inicializa o app Express
// const app = express();

// // ✅ Aplica CORS corretamente
// app.use(cors());

// // Middleware para permitir JSON no body das requisições
// app.use(express.json());

// // ✅ Conectar ao MongoDB
// const mongoURI =
//   process.env.DB_URI ||
//   "mongodb+srv://EverestApp:Everest1@cluster0.nr4o5.mongodb.net/EverestAppDB?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("✅ Conectado ao MongoDB!"))
//   .catch((err) => {
//     console.error("❌ Erro ao conectar ao MongoDB:", err.message);
//     process.exit(1);
//   });

// // ✅ Definir a Rota de Reports
// const reportRoutes = require("./routes/reportRoutes"); // Atualizado para corresponder ao nome correto do arquivo
// app.use("/api/reports", reportRoutes);

// // ✅ Teste se o servidor está rodando
// app.get("/", (req, res) => res.send("🚀 Servidor rodando!"));

// // Iniciar o servidor
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));


// // 2. BACKEND - Adicionar backend para receber as respostas
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });

// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const AssessmentSchema = new mongoose.Schema({
//     respostas: Object,
//     createdAt: { type: Date, default: Date.now },
// });

// const Assessment = mongoose.model("Assessment", AssessmentSchema);

// app.post("/api/assessment", upload.any(), async (req, res) => {
//     try {
//         let respostas = {};

//         // Verifica se os dados de respostas vieram como string JSON ou objeto
//         if (typeof req.body.respostas === "string") {
//             try {
//                 respostas = JSON.parse(req.body.respostas);
//             } catch (error) {
//                 console.error("Erro ao fazer parsing do JSON:", error);
//                 return res.status(400).json({ error: "Formato inválido de JSON recebido." });
//             }
//         } else if (typeof req.body.respostas === "object" && req.body.respostas !== null) {
//             respostas = req.body.respostas;
//         } else {
//             return res.status(400).json({ error: "Dados de respostas inválidos." });
//         }

//         // Verifica se as respostas estão vazias antes de salvar no banco de dados
//         if (Object.keys(respostas).length === 0) {
//             return res.status(400).json({ error: "Nenhuma resposta foi fornecida." });
//         }

//         // Associa arquivos às respostas corretas
//         if (req.files && req.files.length > 0) {
//             req.files.forEach(file => {
//                 let competencyKey = Object.keys(respostas).find(key => {
//                     return Object.keys(respostas[key]).some(qid => qid === file.fieldname);
//                 });

//                 if (competencyKey && respostas[competencyKey]) {
//                     if (!respostas[competencyKey][file.fieldname]) {
//                         respostas[competencyKey][file.fieldname] = {};
//                     }
//                     respostas[competencyKey][file.fieldname].file = `/uploads/${file.filename}`;
//                 }
//             });
//         }

//         // Salva a avaliação no banco de dados
//         const novaAvaliacao = new Assessment({ respostas });
//         await novaAvaliacao.save();
//         res.status(200).json({ message: "Avaliação salva com sucesso!" });

//     } catch (error) {
//         console.error("Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// // Inicia o servidor
// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });

// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const AssessmentSchema = new mongoose.Schema({
//     userId: String,
//     respostas: Object,
//     createdAt: { type: Date, default: Date.now },
// });

// const SolicitationSchema = new mongoose.Schema({
//     userId: String,
//     nome: String,
//     email: String,
//     telefone: String,
//     createdAt: { type: Date, default: Date.now },
// });

// const Assessment = mongoose.model("Assessment", AssessmentSchema);
// const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// app.post("/api/assessment", upload.any(), async (req, res) => {
//     try {
//         let respostas = {};
//         if (typeof req.body.respostas === "string") {
//             try {
//                 respostas = JSON.parse(req.body.respostas);
//             } catch (error) {
//                 console.error("Erro ao fazer parsing do JSON:", error);
//                 return res.status(400).json({ error: "Formato inválido de JSON recebido." });
//             }
//         } else if (typeof req.body.respostas === "object") {
//             respostas = req.body.respostas;
//         } else {
//             return res.status(400).json({ error: "Dados de respostas inválidos." });
//         }

//         const { userId } = req.body;
//         if (!userId) {
//             return res.status(400).json({ error: "userId é obrigatório." });
//         }

//         const novaAvaliacao = new Assessment({ userId, respostas });
//         await novaAvaliacao.save();
//         res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// app.post("/api/solicitacao", async (req, res) => {
//     try {
//         const { userId, nome, email, telefone } = req.body;
//         if (!userId || !nome || !email || !telefone) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//         }

//         const novaSolicitacao = new Solicitation({ userId, nome, email, telefone });
//         await novaSolicitacao.save();
//         res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar solicitação:", error);
//         res.status(500).json({ error: "Erro ao salvar solicitação" });
//     }
// });

// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// // Middleware para permitir requisições JSON e habilitar o CORS
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Configuração do multer para uploads de arquivos
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });
// const upload = multer({ storage });

// // Conexão com o banco de dados MongoDB
// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Esquema da Avaliação no banco de dados
// const AssessmentSchema = new mongoose.Schema({
//     userId: String,
//     respostas: Object,
//     createdAt: { type: Date, default: Date.now },
// });

// // Esquema da Solicitação no banco de dados
// const SolicitationSchema = new mongoose.Schema({
//     userId: String,
//     nome: String,
//     email: String,
//     telefone: String,
//     createdAt: { type: Date, default: Date.now },
// });

// // Modelos no banco de dados
// const Assessment = mongoose.model("Assessment", AssessmentSchema);
// const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// // Rota para salvar a avaliação
// app.post("/api/assessment", upload.any(), async (req, res) => {
//     try {
//         let respostas = req.body.respostas ? JSON.parse(req.body.respostas) : {};
//         const { userId } = req.body;

//         if (!userId) {
//             return res.status(400).json({ error: "userId é obrigatório." });
//         }

//         const novaAvaliacao = new Assessment({ userId, respostas });
//         await novaAvaliacao.save();
//         res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// // Rota para salvar a solicitação associada ao userId
// app.post("/api/solicitacao", async (req, res) => {
//     try {
//         const { userId, nome, email, telefone } = req.body;

//         if (!userId || !nome || !email || !telefone) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//         }

//         const novaSolicitacao = new Solicitation({ userId, nome, email, telefone });
//         await novaSolicitacao.save();
//         res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar solicitação:", error);
//         res.status(500).json({ error: "Erro ao salvar solicitação" });
//     }
// });

// // Inicialização do servidor
// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });

// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const AssessmentSchema = new mongoose.Schema({
//     userId: { type: String, required: true }, // O userId sempre vem primeiro
//     respostas: Object,
//     createdAt: { type: Date, default: Date.now },
// });

// const SolicitationSchema = new mongoose.Schema({
//     userId: { type: String, required: true }, // O userId sempre vem primeiro
//     nome: { type: String, required: true },
//     email: { type: String, required: true },
//     telefone: { type: String, required: true },
//     bi: { type: String, required: true }, 
//     createdAt: { type: Date, default: Date.now },
// });


// const Assessment = mongoose.model("Assessment", AssessmentSchema);
// const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// app.post("/api/assessment", upload.any(), async (req, res) => {
//     try {
//         let respostas = {};

//         // Validação do JSON recebido
//         if (typeof req.body.respostas === "string") {
//             try {
//                 respostas = JSON.parse(req.body.respostas);
//             } catch (error) {
//                 console.error("Erro ao fazer parsing do JSON:", error);
//                 return res.status(400).json({ error: "Formato inválido de JSON recebido." });
//             }
//         } else if (typeof req.body.respostas === "object") {
//             respostas = req.body.respostas;
//         } else {
//             return res.status(400).json({ error: "Dados de respostas inválidos." });
//         }

//         const { userId } = req.body;
//         if (!userId) {
//             return res.status(400).json({ error: "userId é obrigatório." });
//         }

//         // Estrutura correta: userId antes das respostas
//         const novaAvaliacao = new Assessment({ userId, respostas });
//         await novaAvaliacao.save();

//         res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// app.post("/api/solicitacao", async (req, res) => {
//     try {
//         const { userId, nome, email, telefone, bi } = req.body;

//         console.log("📌 Dados recebidos no backend:", req.body); // 🔍 Verificar se o BI está chegando

//         if (!userId || !nome || !email || !telefone || bi === undefined) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios, incluindo o BI." });
//         }

//         // Criar e salvar a solicitação no banco de dados
//         const novaSolicitacao = new Solicitation({ userId, nome, email, telefone, bi });
//         await novaSolicitacao.save();

//         res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("❌ Erro ao salvar solicitação:", error);
//         res.status(500).json({ error: "Erro ao salvar solicitação" });
//     }
// });



// app.get("/api/users", async (req, res) => {
//     try {
//         const users = await Solicitation.find({}, "userId nome email telefone bi createdAt");
//         res.status(200).json(users);
//     } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//         res.status(500).json({ error: "Erro ao buscar usuários" });
//     }
// });

// app.get("/api/reports", async (req, res) => {
//     try {
//         const solicitacoes = await Solicitation.find({}, "userId nome email telefone bi createdAt");

//         // Garante que "bi" sempre tenha um valor correto
//         const formattedSolicitacoes = solicitacoes.map((solicitacao) => ({
//             userId: solicitacao.userId,
//             nome: solicitacao.nome,
//             email: solicitacao.email,
//             telefone: solicitacao.telefone,
//             bi: solicitacao.bi ? solicitacao.bi : "Não informado",  // <- Aqui a correção
//             createdAt: solicitacao.createdAt,
//         }));

//         console.log("📌 Dados enviados para o frontend:", formattedSolicitacoes);
//         res.status(200).json(formattedSolicitacoes);
//     } catch (error) {
//         console.error("Erro ao buscar relatórios:", error);
//         res.status(500).json({ error: "Erro ao buscar relatórios" });
//     }
// });


// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });

// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Definição do Schema para armazenar pontuação e categoria
// const AssessmentSchema = new mongoose.Schema({
//     userId: { type: String, required: true }, // O userId sempre vem primeiro
//     respostas: Object,
//     totalScore: { type: Number, required: true }, // Adicionado
//     category: { type: String, required: true }, // Adicionado
//     createdAt: { type: Date, default: Date.now },
// });

// const SolicitationSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     nome: { type: String, required: true },
//     email: { type: String, required: true },
//     telefone: { type: String, required: true },
//     bi: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// const Assessment = mongoose.model("Assessment", AssessmentSchema);
// const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// // Rota para salvar a avaliação com pontuação e categoria
// app.post("/api/assessment", upload.any(), async (req, res) => {
//     try {
//         let respostas = {};

//         if (typeof req.body.respostas === "string") {
//             try {
//                 respostas = JSON.parse(req.body.respostas);
//             } catch (error) {
//                 console.error("Erro ao fazer parsing do JSON:", error);
//                 return res.status(400).json({ error: "Formato inválido de JSON recebido." });
//             }
//         } else if (typeof req.body.respostas === "object") {
//             respostas = req.body.respostas;
//         } else {
//             return res.status(400).json({ error: "Dados de respostas inválidos." });
//         }

//         const { userId, totalScore, category } = req.body;
//         if (!userId || totalScore === undefined || !category) {
//             return res.status(400).json({ error: "Campos obrigatórios ausentes." });
//         }

//         const novaAvaliacao = new Assessment({ userId, respostas, totalScore, category });
//         await novaAvaliacao.save();

//         res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// // Rota para salvar solicitações
// app.post("/api/solicitacao", async (req, res) => {
//     try {
//         const { userId, nome, email, telefone, bi } = req.body;

//         console.log("📌 Dados recebidos no backend:", req.body);

//         if (!userId || !nome || !email || !telefone || bi === undefined) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios, incluindo o BI." });
//         }

//         const novaSolicitacao = new Solicitation({ userId, nome, email, telefone, bi });
//         await novaSolicitacao.save();

//         res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("❌ Erro ao salvar solicitação:", error);
//         res.status(500).json({ error: "Erro ao salvar solicitação" });
//     }
// });

// // Rota para listar usuários
// app.get("/api/users", async (req, res) => {
//     try {
//         const users = await Solicitation.find({}, "userId nome email telefone bi createdAt");
//         res.status(200).json(users);
//     } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//         res.status(500).json({ error: "Erro ao buscar usuários" });
//     }
// });

// // Rota para listar relatórios com pontuação e categoria
// app.get("/api/reports", async (req, res) => {
//     try {
//         const solicitacoes = await Solicitation.find({}, "userId nome email telefone bi createdAt");
//         const avaliacoes = await Assessment.find({}, "userId totalScore category");

//         // Mapeia avaliações com solicitações para exibir no dashboard
//         const reports = solicitacoes.map((solicitacao) => {
//             const avaliacao = avaliacoes.find(av => av.userId === solicitacao.userId);
//             return {
//                 userId: solicitacao.userId,
//                 nome: solicitacao.nome,
//                 email: solicitacao.email,
//                 telefone: solicitacao.telefone,
//                 bi: solicitacao.bi ? solicitacao.bi : "Não informado",
//                 totalScore: avaliacao ? avaliacao.totalScore : "N/A",
//                 category: avaliacao ? avaliacao.category : "Sem classificação",
//                 createdAt: solicitacao.createdAt,
//             };
//         });

//         console.log("📌 Dados enviados para o frontend:", reports);
//         res.status(200).json(reports);
//     } catch (error) {
//         console.error("Erro ao buscar relatórios:", error);
//         res.status(500).json({ error: "Erro ao buscar relatórios" });
//     }
// });

// app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });

// const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/EverestAppDB";
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("✅ Conectado ao MongoDB"))
//   .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

// // Definição do esquema para armazenar as avaliações
// const AssessmentSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     respostas: { type: Object, required: true },
//     totalScore: { type: Number, required: true },
//     finalScore: { type: Number, required: true },
//     category: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// const SolicitationSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     nome: { type: String, required: true },
//     email: { type: String, required: true },
//     telefone: { type: String, required: true },
//     bi: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// const Assessment = mongoose.model("Assessment", AssessmentSchema);
// const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// // Rota para salvar uma nova avaliação
// app.post("/api/assessment", async (req, res) => {
//     try {
//         const { userId, respostas, totalScore, finalScore, category } = req.body;

//         if (!userId || !respostas || totalScore === undefined || finalScore === undefined || !category) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios." });
//         }

//         const novaAvaliacao = new Assessment({ userId, respostas, totalScore, finalScore, category });
//         await novaAvaliacao.save();

//         console.log("📌 Avaliação salva:", novaAvaliacao);
//         res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("❌ Erro ao salvar avaliação:", error);
//         res.status(500).json({ error: "Erro ao salvar avaliação" });
//     }
// });

// // Rota para salvar uma solicitação
// app.post("/api/solicitacao", async (req, res) => {
//     try {
//         const { userId, nome, email, telefone, bi } = req.body;

//         console.log("📌 Dados recebidos no backend:", req.body);

//         if (!userId || !nome || !email || !telefone || !bi) {
//             return res.status(400).json({ error: "Todos os campos são obrigatórios, incluindo o BI." });
//         }

//         const novaSolicitacao = new Solicitation({ userId, nome, email, telefone, bi });
//         await novaSolicitacao.save();

//         console.log("✅ Solicitação salva:", novaSolicitacao);
//         res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
//     } catch (error) {
//         console.error("❌ Erro ao salvar solicitação:", error);
//         res.status(500).json({ error: "Erro ao salvar solicitação" });
//     }
// });

// // Rota para buscar usuários cadastrados
// app.get("/api/users", async (req, res) => {
//     try {
//         const users = await Solicitation.find({}, "userId nome email telefone bi createdAt");
//         res.status(200).json(users);
//     } catch (error) {
//         console.error("❌ Erro ao buscar usuários:", error);
//         res.status(500).json({ error: "Erro ao buscar usuários" });
//     }
// });

// // Rota para buscar relatórios de avaliações
// app.get("/api/reports", async (req, res) => {
//     try {
//         const solicitacoes = await Solicitation.find({}, "userId nome email telefone bi createdAt");

//         const formattedSolicitacoes = solicitacoes.map((solicitacao) => ({
//             userId: solicitacao.userId,
//             nome: solicitacao.nome,
//             email: solicitacao.email,
//             telefone: solicitacao.telefone,
//             bi: solicitacao.bi ? solicitacao.bi : "Não informado",
//             createdAt: solicitacao.createdAt,
//         }));

//         console.log("📌 Relatórios enviados:", formattedSolicitacoes);
//         res.status(200).json(formattedSolicitacoes);
//     } catch (error) {
//         console.error("❌ Erro ao buscar relatórios:", error);
//         res.status(500).json({ error: "Erro ao buscar relatórios" });
//     }
// });

// app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/EverestAppDB";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}).then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Definição do esquema para armazenar as avaliações
const AssessmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    respostas: { type: Object, required: true },
    totalScore: { type: Number, required: true },
    finalScore: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  

const SolicitationSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    bi: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Assessment = mongoose.model("Assessment", AssessmentSchema);
const Solicitation = mongoose.model("Solicitation", SolicitationSchema);

// 🛠️ Rota para salvar uma nova avaliação
app.post("/api/assessment", async (req, res) => {
    try {
      console.log("Request Body ghhhhy:", req.body); // Log the incoming request
  
      const { userId, respostas, totalScore, finalScore, category } = req.body;
  
      if (!userId || !respostas || totalScore === undefined || finalScore === undefined || !category) {
        console.error("Missing required fields");
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
      }
  
      const novaAvaliacao = new Assessment({ userId, respostas, totalScore, finalScore, category });
      await novaAvaliacao.save();
  
      console.log("Avaliação salva com sucesso:", novaAvaliacao);
      res.status(200).json({ message: "Avaliação salva com sucesso!", userId });
    } catch (error) {
      console.error("Erro ao salvar avaliação:", error);
      res.status(500).json({ error: "Erro ao salvar avaliação" });
    }
  });


// 🛠️ Rota para salvar uma solicitação
app.post("/api/solicitacao", async (req, res) => {
    try {
        const { userId, nome, email, telefone, bi } = req.body;

        console.log("📌 Dados recebidos no backend:", req.body);

        if (!userId || !nome || !email || !telefone || !bi) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios, incluindo o BI." });
        }

        const novaSolicitacao = new Solicitation({ userId, nome, email, telefone, bi });
        await novaSolicitacao.save();

        console.log("✅ Solicitação salva:", novaSolicitacao);
        res.status(200).json({ message: "Solicitação salva com sucesso!", userId });
    } catch (error) {
        console.error("❌ Erro ao salvar solicitação:", error);
        res.status(500).json({ error: "Erro ao salvar solicitação" });
    }
});

// 🛠️ Rota para buscar usuários cadastrados
app.get("/api/users", async (req, res) => {
    try {
      const users = await Solicitation.find({}, "userId nome email telefone bi createdAt");
      res.status(200).json(users);
    } catch (error) {
      console.error("❌ Erro ao buscar usuários:", error);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  });

// 🛠️ Rota para buscar relatórios de avaliações
app.get("/api/reports", async (req, res) => {
    try {
        const solicitacoes = await Solicitation.find({}, "userId nome email telefone bi createdAt");

        const formattedSolicitacoes = solicitacoes.map((solicitacao) => ({
            userId: solicitacao.userId,
            nome: solicitacao.nome,
            email: solicitacao.email,
            telefone: solicitacao.telefone,
            bi: solicitacao.bi ? solicitacao.bi : "Não informado",
            createdAt: solicitacao.createdAt,
        }));

        console.log("📌 Relatórios enviados:", formattedSolicitacoes);
        res.status(200).json(formattedSolicitacoes);
    } catch (error) {
        console.error("❌ Erro ao buscar relatórios:", error);
        res.status(500).json({ error: "Erro ao buscar relatórios" });
    }
});

app.delete("/api/assessments", async (req, res) => {
    try {
        console.log("🚨 Solicitando remoção de todas as avaliações...");
        
        const result = await Assessment.deleteMany({});

        console.log(`✅ ${result.deletedCount} avaliações removidas.`);
        res.status(200).json({ message: "Todas as avaliações foram removidas com sucesso!" });
    } catch (error) {
        console.error("❌ Erro ao remover avaliações:", error);
        res.status(500).json({ error: "Erro ao remover avaliações." });
    }
});

app.get("/api/report/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("Searching for userId:", userId);

        const report = await Assessment.findOne({ userId });
        console.log("Report found:", report);

        if (!report) {
            return res.status(404).json({ error: "Relatório não encontrado" });
        }

        const userInfo = await Solicitation.findOne({ userId });
        console.log("User info found:", userInfo);

        if (!userInfo) {
            return res.status(404).json({ error: "Informações do usuário não encontradas" });
        }

        const fullReport = {
            ...userInfo.toObject(),
            ...report.toObject(),
        };

        res.status(200).json(fullReport);
        console.log("fullReport",fullReport)
    } catch (error) {
        console.error("Erro ao buscar relatório:", error);
        res.status(500).json({ error: "Erro ao buscar relatório" });
    }
});
app.put("/api/report/:userId", async (req, res) => {
    try {
      const { userId } = req.params; // Get the userId from the URL
      const updatedData = req.body; // Get the updated data from the request body
  
      console.log("Updating report for userId:", userId);
      console.log("Updated data:", updatedData);
  
      // Find the report by userId and update it
      const updatedReport = await Assessment.findOneAndUpdate(
        { userId }, // Query to find the report
        updatedData, // Data to update
        { new: true } // Return the updated document
      );
  
      if (!updatedReport) {
        return res.status(404).json({ error: "Relatório não encontrado" });
      }
  
      console.log("Relatório atualizado com sucesso:", updatedReport);
      res.status(200).json({ message: "Relatório atualizado com sucesso!", updatedReport });
    } catch (error) {
      console.error("Erro ao atualizar relatório:", error);
      res.status(500).json({ error: "Erro ao atualizar relatório" });
    }
  });


app.delete("/api/report/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedReport = await Assessment.findOneAndDelete({ userId });

        if (!deletedReport) {
            return res.status(404).json({ error: "Relatório não encontrado" });
        }

        res.status(200).json({ message: "Relatório excluído com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir relatório:", error);
        res.status(500).json({ error: "Erro ao excluir relatório" });
    }
});

app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));
