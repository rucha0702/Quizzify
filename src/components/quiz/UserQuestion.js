import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import { QuizData } from '../../../actions';
import { MarkedArray } from '../../actions';
import styles from './UserQuestion.module.css';


const UserQuestion=(props)=>{
    const [rerender, setRerender] = useState(false);
    const dispatch = useDispatch();
    // const ncount=useSelector(state=>state.QuestionCount.QuestionCount)
    const markedArray = useSelector(state=>state.MarkedArray.markedArray)
    const question = props.question;
    const count = props.count;
    // console.log("yayy:",question)
    const onValueChange = (q,v)=>{
        // console.log("q:",q);
        // console.log("v:",v);
        markedArray[q] = v;
        dispatch(MarkedArray(markedArray))
        setRerender(!rerender);
    }
    useEffect(()=>{
        console.log("first")
    },[markedArray])
  return (
    
        <div style={{height:"55vh"}} className={`d-flex flex-column align-items-end justify-content-between m-5 ${styles.questionContainer}border rounded`}>
        <div className={`p-2 border rounded ${styles.questionBox}`}>
                 <div className={`${styles.bold} mb-1 text-start`}>Question {count +1}</div>
                 <div className={`${styles.questionStyle} text-start`}>{question.label}</div>
        </div>
                 <div className={`${styles.optionsContainer}d-flex flex-column align-items-start my-4 w-100 align-self-end`}>
                    {question.values.map((options,j)=>{
                        return(
                            <div key={j} className="radio text-primary my-1 w-100 pointer">
                                <label style={{cursor:'pointer'}} className={`p-2 w-100 text-start border rounded ${styles.optionLabel}`}>
                                    <input
                                     type="radio"
                                     className={`${styles.radioStyle}`}
                                     question={question.label}
                                     value={options.label}
                                     answer = {options.label}
                                     checked={markedArray[count]<5 && j===markedArray[count]?true:false}
                                     onChange={()=>{onValueChange(count,j)}}
                                    //  onClick={()=>{onValueChange(i,j)}}
                                     />
                                     <span className={`mx-2`}>{options.label}</span>
                                </label>
                                
                            </div>
                        )
                    })}
                 </div>
                 {/* <div>{ncount}</div> */}
                </div>
    
  )
}

export default UserQuestion;