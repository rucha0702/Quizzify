import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Timer.module.css';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';

const Time = () => {
    const endTime = useSelector(state=>state.SetTimer?state.SetTimer.time:"")
    // const endTime = useSelector(state=>state.SetQuizDetails?state.SetQuizDetails.details.endTime:"")
    // console.log("time", endTime);
    let navigate = useNavigate();
    const date = new Date(endTime).getTime();
    const [hours, setHours] = useState(0);
    const [rerender, setRerender] = useState(false)
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    // const [startTime, setStartTime] = useState(new Date());
    const [diff, setDiff] = useState(100);
    
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
    const setTime = ()=>{
        // getCurrentTime();
    // const remainingMinutes = minutes % 60;
    const t1 = new Date().getTime();
    // console.log("diff",date-t1)
    // let count = 0; 
//    const m = date-t1;
      // console.log(date)
   const lim = Math.floor(date-t1 / 1000)
    const intervalId = setInterval(() => {
      // setRerender(!rerender)
      const now = new Date().getTime(); 
      const milliseconds = date -now;
      // console.log(milliseconds)
      const seconds = Math.floor(milliseconds / 1000);
      // console.log("seconds:", seconds)
      const minutes = Math.floor(seconds / 60);
      // console.log("minutes", minutes);
      
      setHours(Math.floor(minutes / 60))
      setRemainingSeconds(seconds%60);
      setRemainingMinutes(minutes%60);
      setDiff(diff-1)
    setRerender(!rerender);

    
    // console.log(date-t1)
        // console.log(`Function called ${++count} times.`);
      }, 1000);
      
      setTimeout(() => {
        clearInterval(intervalId);
        console.log("Function stopped.");
        navigate('/sub');
      },lim);
    }

// useEffect(()=>{
//   getCurrentTime()
// },[])    
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