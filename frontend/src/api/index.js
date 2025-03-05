const API_URL = "http://localhost:5000"; // Altere para a URL do seu backend se necessário

const api = {
  saveAssessment: async (data) => {
    try {
      const response = await fetch(`${API_URL}/api/assessment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro da API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao salvar avaliação:", error);
      throw error;
    }
  },
};

export default api;
