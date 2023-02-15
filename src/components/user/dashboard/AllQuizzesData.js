import React from 'react';
import {useState, useEffect} from 'react';
import { getAllQuizes } from '../../../api/quizData';
// import Sidebar from './Sidebar';
// import Navbar from '../navbar/Navbar';
// import styles from './Position.module.css';
import QuizDetailsCard from './QuizDetailsCard';

const AllQuizzesData = () => {
   const [quizzes, setQuizzes] = useState([])
   const [rerender, setRerender] = useState(false);
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
      setRerender(!rerender);
       return(item);
      //  console.log("Status 1",data[item].details)
      }):console.log("error")
      // dispatch(Total(data.length));
      return data;
    }
    getQuizzes();
    // console.log("questions:", questions)
  }, [])
  return (
    <div className={`d-flex`}>
        <div className='d-flex'>
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