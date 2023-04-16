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
        <div className='w-100 d-flex justify-content-center'>
            <ul className='text-start my-4'>
                <li>Duration: {details.duration} min.</li>
                <li>Multiple choice questions.</li>
                <li>There is no negative marking.</li>
                <li>Read each question carefully before answering.</li>
                <li>Multiple choice questions.</li>
                <li>Don't wait until the last minute to submit your quiz, it won't be auto-submitted.</li>
                
            </ul>
        </div>
        <button className='btn btn-light rounded p-2 px-3 text-dark' onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default QuizInstructions