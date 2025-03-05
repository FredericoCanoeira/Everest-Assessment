import React from "react";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Question; // Garante que está sendo exportado corretamente

