import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import { AuthProvider } from "./context/AuthContext";  // ✅ Agora está no local correto
import PrivateRoute from "./components/common/PrivateRoute";

// Componentes
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import AssessmentForm from "./components/assessment/AssessmentForm";

// Páginas
import Home from "./pages/Home";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import PaymentInformation from "./pages/PaymentInformation";
import Solicitacao from "./pages/Solicitacao";
import Obrigado from "./pages/Obrigado";
import Relatorio from "./pages/Relatorio";

// Layout
import Layout from "./components/common/Layout";
import EditRelatorio from "./pages/EditRelatorio";
import Sidebar from "./components/Sidebar";
import AdminReports from "./pages/Admin/AdminReports";
import AdminUsers from "./pages/Admin/AdminUsers";
import Settings from "./pages/Settings";
import AllAdmin from "./pages/Admin/AllAdmin";
import AddNewAdmin from "./pages/Admin/AddNewAdmin";
import AssessmentList from "./pages/Admin/AssessmentList";





function App() {
  return (
    <AuthProvider>  {/* ✅ Agora o AuthProvider está no lugar correto */}
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Layout><Form /></Layout>} />
          <Route path="/results" element={<Layout><Results /></Layout>} />
          <Route path="/assessment" element={<AssessmentForm />} />
          <Route path="/payment-information" element={<Layout><PaymentInformation /></Layout>} />
          <Route path="/solicitacao" element={<Layout><Solicitacao /></Layout>} />
          <Route path="/obrigado" element={<Obrigado />} />
          {/* <Route path="/relatorio/:id" element={<Relatorio />} /> */}
          {/* <Route path="/edit-relatorio/:id" element={<Layout><EditRelatorio /></Layout>} /> */}



          {/* Rota protegida do Painel Administrativo */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Sidebar />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="relatorio/:id" element={<Relatorio />} />
            <Route path="edit-relatorio/:id" element={<EditRelatorio />} />
            <Route path="alladmin" element={<AllAdmin />} />
            <Route path="addnewadmin" element={<AddNewAdmin />} />
            <Route path="settings" element={<Settings />} />
            <Route path="assessment" element={<AssessmentList />} />

          </Route>

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
