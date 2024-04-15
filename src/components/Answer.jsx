import React, {useContext} from 'react'
import { AnsCalcContext } from "./AnsCalcContext";

const Answer = ({question, option, clicked, setClicked}) => {
    const { calculateAns } = useContext(AnsCalcContext);
    let bgcolor = clicked===option ? 'bg-[#0000CD]' : 'bg-[#1E0544]';

  return (
      <button className={`${bgcolor} w-1/2 text-center text-white text-center py-4 border-2 rounded-xl hover:bg-[#0000CD]`}
              onClick={() => {
                 calculateAns(option, question.answer);
                 setClicked(option);
                  }}>
        {option}
      </button>
  )
}

export default Answer 