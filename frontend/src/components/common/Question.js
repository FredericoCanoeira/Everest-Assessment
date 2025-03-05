import React from "react";
import "./Question.css";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="options-container">
        {options.map((option, index) => (
          <button 
            key={index} 
            className="option-button" 
            onClick={() => onAnswer(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
