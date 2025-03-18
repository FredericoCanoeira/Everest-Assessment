import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";
import { Container } from "@mui/material";

const AdminReports = () => {
    const [reports, setReports] = useState([]);
    const [filteredReports, setFilteredReports] = useState([]); // Para exibição dos resultados filtrados
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o campo de busca
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/reports");
                if (!response.ok) {
                    throw new Error("Erro ao buscar relatórios");
                }
                const data = await response.json();

                console.log("📌 Dados recebidos do backend:", data);

                const sortedData = data
                    .map((report) => ({
                        ...report,
                        bi: report.bi || "Não informado", // Se BI estiver vazio, exibe "Não informado"
                    }))
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setReports(sortedData);
                setFilteredReports(sortedData); // Inicialmente, exibe todos os dados
            } catch (err) {
                console.error("❌ Erro ao carregar relatórios:", err);
                setError("Erro ao carregar os dados. Tente novamente.");
            }
        };

        fetchReports();
    }, []);

    // Função para buscar por Nome, ID, Telefone ou BI
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = reports.filter(
            (report) =>
                report.nome.toLowerCase().includes(term) ||
                report.userId.toLowerCase().includes(term) ||
                report.telefone.toLowerCase().includes(term) ||
                report.bi.toLowerCase().includes(term)
        );

        setFilteredReports(filtered);
    };

    // Função para limpar todos os dados do dashboard
    const handleClearAll = async () => {
        const confirmDelete = window.confirm("⚠ Tem certeza que deseja limpar todos os dados?");
        if (!confirmDelete) return;

        try {
            const response = await fetch("http://localhost:5000/api/clear-reports", {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao limpar os dados.");
            }

            setReports([]);
            setFilteredReports([]);
            alert("✅ Todos os dados foram apagados com sucesso!");
        } catch (error) {
            console.error("Erro ao limpar os dados:", error);
            alert("❌ Erro ao limpar os dados.");
        }
    };
    return (
        <Container>
        <div >
            <div className="content">
                <h1>Painel Administrativo</h1>
                {error && <p className="error-message">{error}</p>}

                {/* Campo de busca */}
                <input
                    type="text"
                    placeholder="Buscar por Nome, ID, Telefone ou BI..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>BI</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReports.length > 0 ? (
                            filteredReports.map((report) => (
                                <tr key={report.userId}>
                                    <td>{report.userId}</td>
                                    <td>{report.nome}</td>
                                    <td>{report.email}</td>
                                    <td>{report.telefone}</td>
                                    <td>{report.bi}</td>
                                    <td>
                                        <button
                                            onClick={() => navigate(`/admin/relatorio/${report?.userId}`)}
                                            className="btn-ver"
                                        >
                                            Ver Relatório
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Nenhuma solicitação encontrada.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </Container>


    );
}

export default AdminReports;
