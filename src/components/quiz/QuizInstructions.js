import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoggedNavbar from '../../components/user/navbar/LoggedNavbar';
import styles from './QuizInstructions.module.css';

const QuizInstructions = () => {
    let navigate = useNavigate();

    const startQuiz = ()=>{
        navigate("/quiz")
    }
    const details = useSelector(state=>state.SetQuizDetails.details)
  return (
    <div className={`${styles.instructions} text-light`}>
        <div className='text-dark'><LoggedNavbar/></div>
        <div className={`h1 mt-5`}>Instructions To Get Started</div>
        <div className='h5'>{details.title} : GDSC Recruitments 2023</div>
        <div>
            <ul>
                <div>Duration: {details.duration} min</div>
                <div>Multiple choice questions</div>
                
            </ul>
        </div>
        <button onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default QuizInstructions