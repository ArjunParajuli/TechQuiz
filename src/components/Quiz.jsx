import React, { useState } from 'react'
import Category from './Category'
import Questions from './Questions'

const Quiz = () => {
    const [category, setCategory] = useState("")
  return (
    <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 my-8 mx-auto shadow-lg ">Welcome to QuizMania! </h2>
        {
            category==="" ? <Category setCategory={setCategory} /> : <Questions category={category} />
        }
        
    </div>
  )
}

export default Quiz