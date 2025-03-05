const API_URL = "http://localhost:5000"; // Verifique se o backend está rodando nessa porta

const api = {
  saveUser: async (data) => {
    console.log("Enviando:", data);
    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro da API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      throw error;
    }
  },
};

export default api;
