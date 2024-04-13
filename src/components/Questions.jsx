import React from 'react'
import { quizData } from '../data';
import Question from './Question';

const Questions = ({category}) => {
  return (
    <div>
        {
            quizData[category].map((question, index) => {
                return <Question key={index} num={index} question={question} />
            })
        }
    </div>
  )
}

export default Questions