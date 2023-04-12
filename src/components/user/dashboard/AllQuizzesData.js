import React from 'react';
import {useState, useEffect} from 'react';
import { getAllQuizes, getTime } from '../../../api/quizData';
import { useDispatch } from 'react-redux';
// import Sidebar from './Sidebar';
// import Navbar from '../navbar/Navbar';
// import styles from './Position.module.css';
import { SetTimer } from '../../../actions';
import QuizDetailsCard from './QuizDetailsCard';

const AllQuizzesData = () => {
  let dispatch = useDispatch()
  const [quizzes, setQuizzes] = useState([]);
  const [rerender, setRerender] = useState(false);
  // const [d, setD] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const getQuizzes = async () => {
      const  {data}  = await getAllQuizes();
      // console.log(data);
      setQuizzes(data);
      // console.log("1", Object.keys(data))
      data?Object.keys(data).map((item)=>{
        if(data[item].details.status==="1")
        // setQuizzes()
      //  console.log("Status 1")
      setRerender(true);
       return(item);
      //  console.log("Status 1",data[item].details)
      }):console.log("error")
      // dispatch(Total(data.length));
      return data;
    }
    getQuizzes();
    // console.log("questions:", questions)
  }, [rerender])


useEffect(()=>{
  const getCurrentTime = async () =>{
    const data = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
      .then(response => response.json())
      .then(data => {
        const currentTime = data.datetime;
        const initialDatetime = new Date(data.datetime);

        const finalDatetimeStr = new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        }).format(initialDatetime);

        const finalDatetime = new Date(finalDatetimeStr);
        // console.log("current time: ", finalDatetime);
        // currentTime=currentTime;
        let x = currentTime;
        x = "gdsc";
        console.log(x)
        // console.log(currentTime)
        // setD(finalDatetime); // Update d with the resolved value
        return finalDatetime;
      })
      .catch(error => {
        console.error(`Error fetching time from API: ${error}`);
      });
      return data;
  }
  
  const getTimeLimit = async () => {
    const currentTime= await getCurrentTime(); // add await here
    const  {data}  = await getTime();
    const commonStartTime = data.commonStartTime;
    const commonEndTime = data.commonEndTime
    // console.log("start",commonStartTime)
    // console.log("end", commonEndTime)
    // console.log("curr", currentTime);
    // currentTime=currentTime
    // console.log(d)
    const date1 = new Date(commonStartTime);
const date2 = new Date(currentTime);
const date3 = new Date(commonEndTime);
dispatch(SetTimer(commonEndTime));
    if(date1.getTime()< date2.getTime() && date2.getTime() < date3.getTime())
    {
      // console.log(date1.getTime())
      // console.log(date2.getTime())
      // console.log(date3.getTime())
      // console.log("YAYY")
      setVisible(true)
    }
    else{
      // console.log(date1.getTime())
      // console.log(date2.getTime())
      // console.log(date3.getTime())
      // console.log("NOOO");
      setVisible(false)
    }
  }
  
  getTimeLimit();
},[dispatch])

  return (
    <div className={`d-flex`}>
        <div className={`${visible?"d-flex":"d-none"}`}>
          {
            quizzes?Object.keys(quizzes).map((item,i)=>{
              return(
                quizzes[item].details.status==="1"?
                <div key={i} className={`m-2`}>
                  {/* <div>{quizzes[item].details.title}</div>
                  <div>{item}</div>
                  <div>{quizzes[item].details.year}</div>
                  <div>{quizzes[item].details.duration} minutes</div> */}
                  <QuizDetailsCard quiz={quizzes[item]} id={item}/>
                </div>:<div></div>
              )
            //  console.log("Status 1",quizzes[item].details)
            }):console.log("error")
          }
        </div>
    </div>
  )
}

export default AllQuizzesData