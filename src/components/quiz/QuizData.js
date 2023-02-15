import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector} from 'react-redux';
import { getQuizData } from '../../api/quizData';
// import { Total } from '../../actions';
import UserQuestion from './UserQuestion';
import QuestionCounter from './QuestionCounter';
import NavigateQuestions from './NavigateQuestions';
import SubmitData from './SubmitData';
import styles from './QuizData.module.css';
// import { useSelector } from 'react-redux';


const QuizData = () => {
  //  let quiz;
  //  let dispatch = useDispatch();
   const count = useSelector(state=>state.QuestionCount);
   const quizId = useSelector(state=>state.SetQuizId);
    const [questions, setQuestions] = useState([])
    useEffect(() => {
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
      }, [])
  return (
    <div className={`${styles.quizDataContainer} mt-3`}>
        <div>
          {
            // questions?questions.map((item,i)=>{
            //   return(
            //     <div key={i}>
            //       <UserQuestion question={item} count={i}/>
            //     </div>
            //   )
            // }):""
          }
        </div>
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
        <QuestionCounter/>
        {
          questions[0]?<SubmitData quiz={questions}/>:""
        }
    </div>
  )
}

export default QuizData