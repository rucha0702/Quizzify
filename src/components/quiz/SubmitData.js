import React, { useState } from 'react';
import styles from './SubmitData.module.css';
import { submitQuiz } from '../../api/quizData';
import { SetQuizStatus } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SubmitData = (props) => {
    let score = 0;
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const quiz = props.quiz;
    const [rerender, setRerender] = useState(false);
    const markedArray = useSelector(state=>state.MarkedArray.markedArray);
    const userDetails = useSelector(state=>state.UserDetails.userDetails)
    const quizId = useSelector(state=>state.SetQuizId.quizId)
    let answers = [];

    const handleSubmit = ()=>{
        answers=[];
        score =0;
        setRerender(!rerender);
    for(let i=0;i<quiz.length;i++)
    {
            // console.log(quiz[i].values[markedArray[i]]["selected"]);
            if(quiz[i].values[markedArray[i]]&&quiz[i].values[markedArray[i]].label&&quiz[i].values[markedArray[i]].value)
            {
                answers.push({question:i,answer:quiz[i].values[markedArray[i]].label, value:quiz[i].values[markedArray[i]].value});
            }
            if(quiz[i].values[markedArray[i]]&&quiz[i].values[markedArray[i]].value&&quiz[i].values[markedArray[i]].value==="1")
            {
                // quiz[i].values[markedArray[i]].push({answered:quiz[i].values[markedArray[i]].label})
                // console.log("fourth")
                score = score + 1;
            }
       
        // quiz[i].values[markedArray[i]].selected;
    }
    // console.log("Answers: ",answers);
    // console.log("score: ",score);
    const {name, email, admissionNumber} = userDetails
    // console.log("userDetails: ",name, email, admissionNumber);
    // console.log("Submitted: ",quiz, quizId);

    const SubmitQuiz = async () => {
        const  res  = await submitQuiz(quizId, {name,email,admissionNumber,score,answers});
        // console.log(data);
        if(res)
        { 
            console.log("Submitted")
            const s = "S";
            dispatch(SetQuizStatus(s));
            setRerender(!rerender)
            navigate("/sub")
        }
        else{
            console.log("not submitted")
        }
      }
      SubmitQuiz();

    }
  return (
    <div className={`${styles.submitContainer}`}>
        <button className={`${styles.submitBtn} btn`} onClick={handleSubmit}>Submit Quiz</button>
    </div>
  )
}

export default SubmitData