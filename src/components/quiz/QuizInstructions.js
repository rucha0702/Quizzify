import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoggedNavbar from '../../components/user/navbar/LoggedNavbar'

const QuizInstructions = () => {
    let navigate = useNavigate();

    const startQuiz = ()=>{
        navigate("/quiz")
    }
    const details = useSelector(state=>state.SetQuizDetails.details)
  return (
    <div>
        <div><LoggedNavbar/></div>
        <div className={`h3`}>Quiz Instructions</div>
        <div className='h5'>{details.title}</div>
        <div>
            <ul>
                <li>Duration: {details.duration}</li>
                <li>Multiple choice questions</li>
                
            </ul>
        </div>
        <button onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default QuizInstructions