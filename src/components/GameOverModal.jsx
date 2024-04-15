import React, { useContext, forwardRef } from 'react'
import { AnsCalcContext } from './AnsCalcContext'

const GameOverModal = forwardRef(function GameOverModal(props, ref) {
  const { correctCount, answeredCount, setCorrectCount, setAnsweredCount, setGameOver } = useContext(AnsCalcContext);

  if (answeredCount !== 5) {
    return null; // If the game is not over, don't render the modal
  }

  return (
    <dialog ref={ref} className="result-modal">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Game Over</h2>
        {
          correctCount === answeredCount ?
            <p className="text-green-500 text-center text-xl">Congrats! You got it all correct.</p>
            : <p className="text-red-500 text-center text-xl">Better Luck next time</p>
        }
        <p className="text-center my-3 text-lg">Your Score: {correctCount}/{answeredCount}</p>
        <form className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          onClick={() => {
            ref.current.close();
            setAnsweredCount(0);
            setCorrectCount(0);
            setGameOver(false);
            }
          }>
            Restart
          </button>
        </form>
      </div>
    </dialog>
  )
})

export default GameOverModal
