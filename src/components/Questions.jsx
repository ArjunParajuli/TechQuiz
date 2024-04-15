import React, { useState } from 'react'
import { quizData } from '../data';
import Question from './Question';

const Questions = ({category}) => {
  const [num, setNum] = useState(0);
  return (
    <div>
        {
          <Question question={quizData[category][num]} num={num} setNum={setNum} />
        }
    </div>
  )
}

export default Questions