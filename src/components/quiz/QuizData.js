import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector} from 'react-redux';
import { getQuizData } from '../../api/quizData';
// import { Total } from '../../actions';
import UserQuestion from './UserQuestion';
import {useNavigate } from 'react-router-dom';
// import Navbar from '../user/navbar/Navbar';
import LoggedNavbar from '../user/navbar/LoggedNavbar';
import QuestionCounter from './QuestionCounter';
import NavigateQuestions from './NavigateQuestions';
import SubmitData from './SubmitData';
import Time from './Time';
import styles from './QuizData.module.css';

// import { useSelector } from 'react-redux';


const QuizData = () => {
  //  let quiz;
  //  let dispatch = useDispatch();
  let navigate = useNavigate();
   const count = useSelector(state=>state.QuestionCount.questionCount);
   const quizId = useSelector(state=>state.SetQuizId.quizId);
   const status = useSelector(state=>state.SetQuizStatus.quizStatus);
   const userData = useSelector((state) => state.UserDetails.userDetails);
    const [questions, setQuestions] = useState([])
    useEffect(() => {
      if (!userData.accessToken) {
        navigate('/login');
        // console.log("LOGIN")
      }
      else if(status==="S")
      {
         navigate("/sub");
      }
        const getQuiz = async (quizId) => {
          const  {data}  = await getQuizData(quizId);
          // console.log(data);
          setQuestions(data);
          // dispatch(Total(data.length));
          return data;
        }
        getQuiz(quizId);
        // console.log("questions:", questions)
        // console.log("quiz id", quizId);
      }, [quizId, status, navigate, userData.accessToken])
  return (
    <div className={`${styles.quizDataContainer} text-light`}>
        <div>
          <LoggedNavbar/>
        </div>
        <div><Time quiz={questions}/></div>
        <div className={`d-flex w-100`}>
          <div className={`${styles.question}`}>

          {
            questions[0]?<UserQuestion question={questions[count]} count={count}/>:<QuestionCounter/>
          }
          </div>
          <div className={`${styles.navigation}`}>
           <NavigateQuestions length = {questions.length}/>
          </div>
          
        </div>
        <div className='d-flex justify-content-between align-items-center px-5' style={{width:"100vw"}}>
          <div>
                <QuestionCounter/>
          </div>
              <div className=''>
                {
                  questions[0]?<SubmitData quiz={questions}/>:""
                }
              </div>
        </div>
        
        
    </div>
  )
}

export default QuizData