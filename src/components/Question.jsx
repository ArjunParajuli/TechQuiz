import React, { useContext } from "react";
import { AnsCalcContext } from "./AnsCalcContext";

const Question = ({ question, num }) => {
    const { calculateAns } = useContext(AnsCalcContext);

  return (
    <div>
      <h2>
        Q.{num + 1} {question.question}
      </h2>
      {question.options.map((option, i) => {
        return (
          <p key={i}>
            <button onClick={() => {
                calculateAns(option, question.answer);
            }}>
              {option}
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Question;
