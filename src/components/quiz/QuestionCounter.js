import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { IncQuestionNum, DecQuestionNum } from '../../actions';
import styles from './QuestionCounter.module.css';

const QuestionCounter = () => {
    let dispatch = useDispatch();
    const c = useSelector(state=>state.QuestionCount);
    return (
      <div className="App">
        <button className={`btn ${styles.navigationBtn}`} onClick={()=>{dispatch(DecQuestionNum(c))}}>Previous</button>
        <button className={`btn ${styles.navigationBtn}`} onClick={()=>{dispatch(IncQuestionNum(c))}}>Next</button>
        {/* <div>{c}</div> */}
      </div>
    );
}

export default QuestionCounter;