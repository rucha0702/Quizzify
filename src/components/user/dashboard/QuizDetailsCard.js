import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetQuizId, MarkedArray, SetQuestionCount, SetQuizDetails } from '../../../actions';

const QuizDetailsCard = (props) => {
    const {quiz, id} = props;
    const [visible, setVisible] = useState(false);
    const [rerender, setRerender] = useState(false);
    // const [currentTime, setCurrentTime] = useState(quiz.details.time)
    const startTime = new Date(quiz.details.time);
    const endTime =  new Date(quiz.details.endTime);
    const currentTimeRef = useRef(new Date());
    // const [rerender, setRerender] = useState(false)
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // const [startTime, setStartTime] = useState(new Date('2023-02-15T09:00:00'));
//   const [duration, setDuration] = useState(60 * 60 * 1000);
//   const [quizVisible, setQuizVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      currentTimeRef.current = new Date();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkTime = () => {
      const currentTime = currentTimeRef.current;

      if (currentTime >= startTime && currentTime <= endTime) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    checkTime();

    const timer = setInterval(() => {
      checkTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

//   useEffect(() => {
//     const checkTime = () => {
//       const currentTime = new Date();

//       if (currentTime >= startTime && currentTime <= endTime) {
//         setVisible(true);
//         // console.log("less")
//         // console.log("current time", currentTime, "end time", endTime)
//         setRerender(!rerender)
//     } 
//     else {
//         setVisible(false);
//         // console.log("more")
//         // console.log("current time", currentTime, "end time", endTime)
//         setRerender(!rerender)
//       }

//       if (currentTime < endTime) {
//         setTimeout(checkTime, 1000); // check every second
//       }
//     };

//     checkTime();
//   }, [startTime, endTime, currentTime]);

    const setQuizId = (i)=>{
       dispatch(SetQuizId(i));
       dispatch(SetQuizDetails(quiz.details)) 
       setRerender(!rerender);
       navigate('/quiz');
       dispatch(MarkedArray(new Array(100).fill(5)))
       dispatch(SetQuestionCount(0))
    }
    // useEffect(() => {
    //     const currentTime = new Date();
    //     console.log("current time: ", currentTime)
    //     console.log("start time: ", startTime)
    //     const start = new Date(startTime);
    //     const end = new Date(endTime);
    
    //     if (currentTime >= start) {
    //       setVisible(true);
    //       setRerender(!rerender);
    //     } else {
    //       setVisible(false);
    //       setRerender(!rerender);
    //     }
    //   }, [visible,rerender]);
    
  return (
    <div onClick={()=>{setQuizId(id)}} className={`${visible===true?"container card":"d-none"}`}>
     {/* <div className='m-2'>{id}</div> */}
     <div>{quiz.details.title}</div>
     <div>{quiz.details.duration}</div>
     <div>{quiz.details.date}</div>
     <div>{quiz.details.year}</div>
    </div>
  )
}

export default QuizDetailsCard