import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { IncQuestionNum, DecQuestionNum } from '../../actions';
import styles from './QuestionCounter.module.css';

const QuestionCounter = () => {
    let dispatch = useDispatch();
    const c = useSelector(state=>state.QuestionCount.questionCount);
    const length = useSelector(state=>state.SetLength.quizLength);
    return (
      <div className="App">
        <button className={`btn ${styles.navigationBtn} mx-1`} onClick={()=>{dispatch(DecQuestionNum(c, length))}}>Previous</button>
        <button className={`btn ${styles.navigationBtn} mx-1`} onClick={()=>{dispatch(IncQuestionNum(c, length))}}>Next</button>
        {/* <div>{c}</div> */}
      </div>
    );
}

export default QuestionCounter;