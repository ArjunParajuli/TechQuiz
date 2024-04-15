import React, {useState} from "react";
import Answer from "./Answer";

const Question = ({ question, num, setNum }) => {
  const [clicked, setClicked] = useState(null);

  return (
    <div className="container mx-auto">
      <h2 className="bg-[#150233] text-white text-center py-4 border-2 rounded-lg">
        Q.{num + 1} {question.question}
      </h2>

      <div className="flex flex-col items-center my-8">
        <div className="flex justify-center gap-6 mb-4 w-full">
          <Answer question={question} option={question.options[1]} clicked={clicked} setClicked={setClicked} />
          <Answer question={question} option={question.options[0]} clicked={clicked} setClicked={setClicked} />
        </div>

        <div className="flex justify-center gap-6 w-full">
          <Answer question={question} option={question.options[2]} clicked={clicked} setClicked={setClicked} />
          <Answer question={question} option={question.options[3]} clicked={clicked} setClicked={setClicked} />
        </div>
      </div>

      <p className="text-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          setNum((prev)=>(prev+1));
        } 
        }
        >
          Next Question
        </button>
      </p>
    </div>
  );
};

export default Question;
