import React, { useState } from 'react'

const Category = ({setCategory}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const categories = ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDB', 'Node.js'];

      const selectHandler = (topic) =>{
        setSelectedOption(topic);
        setIsOpen((prev) => (!prev))
      }

  return (
    <>
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Please Select a category to start the quiz</h2>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => (!prev))}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {selectedOption || 'Select Category'}
          <svg
            className="w-6 h-6 inline-block ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
            {categories.map((topic, index) => (
              <button
                key={index}
                onClick={() => selectHandler(topic)}
                className="block w-full py-2 px-4 text-left hover:bg-gray-100 focus:outline-none"
              >
                {topic}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    <div>
        { selectedOption && 
            <>
             <h2 className="text-2xl font-bold text-center text-gray-800 mt-14 mb-4">Best of Luck</h2>
             <button
              onClick={()=> setCategory(selectedOption)}
              className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Start Quiz</button>
            </>
        }
      </div>
    </>
  )
}

export default Category