import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { IncQuestionNum, DecQuestionNum } from '../../actions';
// import styles from './QuestionCounter.module.css';

const QuestionCounter = () => {
    let dispatch = useDispatch();
    const c = useSelector(state=>state.QuestionCount.questionCount);
    const length = useSelector(state=>state.SetLength.quizLength);
    return (
      <div className="App">
        <button className={`btn border-0`} onClick={()=>{dispatch(DecQuestionNum(c, length))}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16" >
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
</svg>
          </button>
        <button className={` btn border-0`} onClick={()=>{dispatch(IncQuestionNum(c, length))}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg>
          </button>
        {/* <button className={`btn ${styles.navigationBtn}`} onClick={()=>{dispatch(DecQuestionNum(c, length))}}>Previous</button>
        <button className={`btn ${styles.navigationBtn}`} onClick={()=>{dispatch(IncQuestionNum(c, length))}}>Next</button> */}
        {/* <div>{c}</div> */}
      </div>
    );
}

export default QuestionCounter;