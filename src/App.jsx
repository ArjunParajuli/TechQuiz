import { useContext, useState } from "react";
import { AnsCalcContext } from "./components/AnsCalcContext";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
    
    const { answeredCount, correctCount, gameOver } = useContext(AnsCalcContext);
    console.log(gameOver)
    return(
        <div className="">
        <Header className="mx-auto" />
        {
            gameOver ? 
            (
                <div>
                    <p>Your score: {correctCount}/{answeredCount}</p>
                </div>
            ) : <Quiz />
        }
        </div>
    );
}

export default App;
