import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Informações de Pagamento</h2>
      <button onClick={() => navigate("/user-form")}>Prosseguir com Pagamento</button>
    </div>
  );
};

export default PaymentPage;
