import { useContext, useEffect, useRef } from "react";
import { AnsCalcContext } from "./components/AnsCalcContext";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import GameOverModal from "./components/GameOverModal";

function App() {
    const ref = useRef();
    
    const { answeredCount } = useContext(AnsCalcContext);

    useEffect(()=>{
        if( answeredCount===5 ){
            ref.current.showModal(); // opens the modal 
        }
    }, [answeredCount]);

    return(
        <div className="">
        <Header className="mx-auto" />
        <GameOverModal ref={ref} />
        <Quiz />
        </div>
    );
}

export default App;
