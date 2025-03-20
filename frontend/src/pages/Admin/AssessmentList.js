import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  Container, Typography, TextField, Button, CircularProgress, Alert, 
  Card, CardContent, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, Pagination
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const AssessmentList = () => {
  const [assessments, setAssessments] = useState([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of assessments per page

  const fetchAssessments = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("http://localhost:5000/api/assessment", {
        params: userId ? { userId } : {},
      });
      setAssessments(response.data);
    } catch (err) {
      setError("Erro ao buscar avaliações");
      console.error("Erro ao buscar avaliações:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

  const deleteAssessment = async (userId) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter esta ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:5000/api/assessment?userId=${userId}`);

          Swal.fire({
            title: "Excluído!",
            text: response.data.message,
            icon: "success"
          });

          setAssessments((prev) => prev.filter((assessment) => assessment.userId !== userId));
        } catch (err) {
          Swal.fire({
            title: "Erro!",
            text: "Erro ao excluir a avaliação.",
            icon: "error"
          });
          console.error("Erro ao excluir a avaliação:", err);
        }
      }
    });
  };

  // Reverse the array to show new data first
  const sortedAssessments = [...assessments].reverse();

  // Apply Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedAssessments.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Avaliações</Typography>

      {/* Filter Input */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <TextField
          label="Filtrar por User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={fetchAssessments}>
          Buscar
        </Button>
      </div>

      {/* Loading and Error Messages */}
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Assessments List */}
      {currentItems.map((assessment) => (
        <Card key={assessment._id} sx={{ mb: 2, position: "relative" }}>
          <CardContent>
            {/* Delete Button */}
            <IconButton 
              onClick={() => deleteAssessment(assessment?.userId)}
              sx={{ position: "absolute", right: 10, top: 10 }}
              color="error"
            >
              <DeleteIcon />
            </IconButton>

            <Typography variant="h6">Detalhes Gerais</Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell><strong>User ID:</strong></TableCell>
                    <TableCell>{assessment.userId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Categoria:</strong></TableCell>
                    <TableCell>{assessment.category}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Pontuação Total:</strong></TableCell>
                    <TableCell>{assessment.totalScore}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Pontuação Final:</strong></TableCell>
                    <TableCell>{assessment.finalScore}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Data:</strong></TableCell>
                    <TableCell>{new Date(assessment.createdAt).toLocaleString()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            
            {/* Check if respostas exists */}
            {assessment.respostas && Object.entries(assessment.respostas).map(([section, questions]) => (
              <div key={section}>
                <Typography variant="h6" gutterBottom>{section}</Typography>
                <TableContainer component={Paper} sx={{ mb: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Pergunta</strong></TableCell>
                        <TableCell><strong>Resposta</strong></TableCell>
                        <TableCell><strong>Pontos</strong></TableCell>
                        <TableCell><strong>Follow Up</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(questions).map(([question, data]) => (
                        <TableRow key={question}>
                          <TableCell>{question}</TableCell>
                          <TableCell>{data.text}</TableCell>
                          <TableCell>{data.points}</TableCell>
                          <TableCell>{data.followUp}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Pagination Component */}
      <Pagination
        count={Math.ceil(assessments.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Container>
  );
};

export default AssessmentList;