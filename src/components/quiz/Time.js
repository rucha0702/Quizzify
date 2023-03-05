import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Timer.module.css'
// import { useSearchParams } from 'react-router-dom';

const Time = () => {
    const endTime = useSelector(state=>state.SetQuizDetails?state.SetQuizDetails.details.endTime:"")
    // console.log("time", endTime);
    const date = new Date(endTime);
    const [hours, setHours] = useState(0);
    const [rerender, setRerender] = useState(false)
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    const setTime = ()=>{
        
    // const remainingMinutes = minutes % 60;
    const t1 = new Date();
    // console.log("diff",date-t1)
    // let count = 0; 
//    const m = date-t1;
   const lim = Math.floor(date-t1 / 1000)
    const intervalId = setInterval(() => {
        const now = new Date(); 
        const milliseconds = date-now
        const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);

    setHours(Math.floor(minutes / 60))
    setRemainingSeconds(seconds%60);
    setRemainingMinutes(minutes%60);
    setRerender(!rerender);
    // console.log(date-t1)
        // console.log(`Function called ${++count} times.`);
      }, 1000);
      
      setTimeout(() => {
        clearInterval(intervalId);
        console.log("Function stopped.");
      },lim);
    }
useEffect(()=>{
    setTime();
})
  return (
    <div className={`w-100 position-relative ${styles.timerContainer}`}>
        {/* <div>{endTime}</div> */}
        {/* <div>{date-now}</div> */}
        <div className={`${styles.timer}`}>{hours}:{remainingMinutes}:{remainingSeconds}</div>
    </div>
  )
}

export default Time