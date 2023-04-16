import React from 'react';
import { LogoutUser } from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SubmittedQuiz.module.css';
// import { Link } from 'react-router-dom';

const SubmittedQuiz = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className={`${styles.mainContainer} text-light d-flex flex-column justify-content-center`}>
       <div className='h2 m-2'>
         Thank you for submitting the quiz!
       </div>
       <div className='mb-5'>
         We'll let you know the results soon 🤞
       </div>
        {/* <div>
            <Link to="/home">Home</Link>
        </div> */}
        <div>
            <button className='btn btn-light p-2 px-5' onClick={()=>{dispatch(LogoutUser()); navigate("/")}}>Logout</button>
        </div>
    </div>
  )
}

export default SubmittedQuiz