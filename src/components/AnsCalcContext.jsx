
import React, { createContext, useEffect, useState } from 'react';

const AnsCalcContext = createContext();

const AnsCalcProvider = ({ children }) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const calculateAns = (option, answer) => {
    setAnsweredCount((prev) => (prev + 1));
    if (option === answer) {
      setCorrectCount((prev) => (prev + 1));
    }
  };

  useEffect(() => {
    if (answeredCount === 5) {
      setGameOver(true);
    }
  }, [answeredCount]);

  return (
    <AnsCalcContext.Provider value={{ correctCount, answeredCount, gameOver, calculateAns }}>
      {children}
    </AnsCalcContext.Provider>
  );
};

export { AnsCalcContext, AnsCalcProvider }; // Export named exports correctly
