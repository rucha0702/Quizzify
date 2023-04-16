import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { submitQuiz } from '../../api/quizData';
// import { SetQuizStatus } from '../../actions';
import styles from './Timer.module.css';
import { LogoutUser } from '../../actions';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';

const Time = (props) => {
    const endTime = useSelector(state=>state.SetTimer?state.SetTimer.time:"")
    // const endTime = useSelector(state=>state.SetQuizDetails?state.SetQuizDetails.details.endTime:"")
    // console.log("time", endTime);
    let navigate = useNavigate();
    const date = new Date(endTime).getTime();
    const [hours, setHours] = useState(0);
    // const [rerender, setRerender] = useState(false)
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    // const [startTime, setStartTime] = useState(new Date());
    

    // let score = 0;
    let dispatch = useDispatch();
    // let navigate = useNavigate();
    // const quiz = props.quiz;
    // const [rerender, setRerender] = useState(false);
    // const markedArray = useSelector(state=>state.MarkedArray.markedArray);
    // const userDetails = useSelector(state=>state.UserDetails.userDetails)
    // const quizId = useSelector(state=>state.SetQuizId.quizId)
    // let answers = [];

  //   const handleSubmit = ()=>{
  //     answers=[];
  //     score =0;
  //     setRerender(!rerender);
  // for(let i=0;i<quiz.length;i++)
  // {
  //         // console.log(quiz[i].values[markedArray[i]]["selected"]);
  //         if(quiz[i].values[markedArray[i]]&&quiz[i].values[markedArray[i]].label&&quiz[i].values[markedArray[i]].value)
  //         {
  //             answers.push({question:i,answer:quiz[i].values[markedArray[i]].label, value:quiz[i].values[markedArray[i]].value});
  //         }
  //         if(quiz[i].values[markedArray[i]]&&quiz[i].values[markedArray[i]].value&&quiz[i].values[markedArray[i]].value==="1")
  //         {
  //             // quiz[i].values[markedArray[i]].push({answered:quiz[i].values[markedArray[i]].label})
  //             // console.log("fourth")
  //             score = score + 1;
  //         }
     
  //     // quiz[i].values[markedArray[i]].selected;
  // }
  // // console.log("Answers: ",answers);
  // // console.log("score: ",score);
  // const {name, email, admissionNumber} = userDetails
  // // console.log("userDetails: ",name, email, admissionNumber);
  // // console.log("Submitted: ",quiz, quizId);

  // const SubmitQuiz = async () => {
  //     const  res  = await submitQuiz(quizId, {name,email,admissionNumber,score,answers});
  //     // console.log(data);
  //     if(res)
  //     { 
  //         console.log("Submitted")
  //         const s = "S";
  //         dispatch(SetQuizStatus(s));
  //         // setRerender(!rerender)
  //         navigate("/sub")
  //     }
  //     else{
  //         console.log("not submitted")
  //     }
  //   }
  //   SubmitQuiz();

  // }
    
    // const getCurrentTime = async ()=>{
    //  const data = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    //  .then(response => response.json())
    //  .then(data => {
    //    const currentTime = new Date(data.datetime);
    //    console.log("current time: ",currentTime)
    //   //  console.log(`The current time in India is: ${currentTime.toLocaleString()}`);
    //    console.log("end time: ",date);
    //    setDiff(date-currentTime)
    //    console.log("difference: ", date-currentTime);
    //    setStartTime(currentTime)
    //    setRerender(!rerender);
    //  })
    //  .catch(error => {
    //    console.error(`Error fetching time from API: ${error}`);
    //  });
    //  console.log("start Time: ", startTime)
    // }
    // const setTime = useCallback(() => {
    //   // your existing setTime function code here
    // }, []);
    // let ct =1;
  const setTime = useCallback(()=>{
   const end = new Date(endTime).getTime();
   const nowTime = new Date().getTime();
   const lim = Math.floor(end - nowTime);
  //  const lim = 100000;
  //  console.log(lim)
  //  console.log("End date: ", endTime)
  //  console.log("Now ", new Date());
  //  console.log(Math.floor(end - nowTime))
  //  const lim = Math.floor(date-t1 / 1000)
  //  console.log(lim)
    const intervalId = setInterval(() => {
      // setRerender(!rerender)
      const now = new Date().getTime(); 
      const milliseconds = date -now;
      // if(milliseconds<=0)
      // {
        //   handleSubmit();
        // }
        // console.log(milliseconds)
        const seconds = Math.floor(milliseconds / 1000);
        // console.log("seconds:", seconds)
        if(seconds<=0)
        {
          navigate("/");
          dispatch(LogoutUser());
        }
      const minutes = Math.floor(seconds / 60);
      // console.log("minutes", minutes);
      
      setHours(Math.floor(minutes / 60))
      setRemainingSeconds(seconds%60);
      setRemainingMinutes(minutes%60);
      // setDiff(diff-1)
    // setRerender(!rerender);
    // setNum(1);

    
    // console.log(date-t1)
        // console.log(`Function called ${++count} times.`);
      }, 1000);
      
      setTimeout(() => {
        clearInterval(intervalId);
        console.log("Function stopped.");
        // handleSubmit();
       
      },lim);
      // clearTimeout();
    },[date, endTime, navigate, dispatch])

// useEffect(()=>{
//   getCurrentTime()
// },[])    
useEffect(()=>{
    setTime();
},[setTime])


  return (
    <div className={`w-100 position-relative ${styles.timerContainer}`}>
        {/* <div>{endTime}</div> */}
        {/* <div>{date-now}</div> */}
        <div className={`${styles.timer}`}>{hours}:{remainingMinutes}:{remainingSeconds}</div>
    </div>
  )
}

export default Time