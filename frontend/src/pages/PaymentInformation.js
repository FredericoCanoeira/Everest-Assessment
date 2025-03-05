// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/PaymentInformation.css';

// const PaymentInformation = () => {
//   const navigate = useNavigate();

//   // Função para redirecionar baseado na escolha do usuário
//   const handleContinue = (answer) => {
//     if (answer === 'sim') {
//       navigate('/solicitacao');  // Redireciona para a página de solicitação
//     } else {
//       navigate('/');  // Redireciona para a página inicial
//     }
//   };

//   return (
//     <div className="payment-info-container">
//       <div className="payment-info">
//         <h2>Informações de Pagamento</h2>
        
//         <div className="payment-details">
//           <p><strong>Valor do investimento:</strong> Kz 65 000,00</p>
//           <p><strong>IBAN:</strong> AO06005100009283673310193</p>
//           <p><strong>Nome do Banco:</strong> BIC</p>
//           <p><strong>Titular da conta:</strong> Everest - Consultoria e Gestão de Carreiras, LDA</p>
//         </div>

//         <div className="contact-info">
//           <p><strong>Por favor, envie o comprovativo de pagamento para:</strong></p>
//           <p><strong>E-mail:</strong> apoiocliente@everest40.com</p>
//           <p><strong>WhatsApp:</strong> 935 462 360</p>
//         </div>

//         <div className="continue-question">
//           <p><strong>Pretendes continuar?</strong></p>
//           <div className="continue-buttons">
//             <button onClick={() => handleContinue('sim')}>Sim</button>
//             <button onClick={() => handleContinue('nao')}>Não</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentInformation;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import '../styles/PaymentInformation.css';

const PaymentInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId || ""; // Obtém o userId passado do AssessmentForm

  // Função para redirecionar baseado na escolha do usuário
  const handleContinue = (answer) => {
    if (answer === 'sim') {
      navigate('/solicitacao', { state: { userId } });  // Passa o userId para /solicitacao
    } else {
      navigate('/');  // Volta para a página inicial
    }
  };

  return (
    <div className="payment-info-container">
      <div className="payment-info">
        <h2>Informações de Pagamento</h2>
        
        <div className="payment-details">
          <p><strong>Valor do investimento:</strong> Kz 65 000,00</p>
          <p><strong>IBAN:</strong> AO06005100009283673310193</p>
          <p><strong>Nome do Banco:</strong> BIC</p>
          <p><strong>Titular da conta:</strong> Everest - Consultoria e Gestão de Carreiras, LDA</p>
        </div>

        <div className="contact-info">
          <p><strong>Por favor, envie o comprovativo de pagamento para:</strong></p>
          <p><strong>E-mail:</strong> apoiocliente@everest40.com</p>
          <p><strong>WhatsApp:</strong> 935 462 360</p>
        </div>

        <div className="continue-question">
          <p><strong>Pretendes continuar?</strong></p>
          <div className="continue-buttons">
            <button onClick={() => handleContinue('sim')}>Sim</button>
            <button onClick={() => handleContinue('nao')}>Não</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
