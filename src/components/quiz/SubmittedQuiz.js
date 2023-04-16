import React from 'react';
import { LogoutUser } from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const SubmittedQuiz = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div>SubmittedQuiz
        {/* <div>
            <Link to="/home">Home</Link>
        </div> */}
        <div>
            <button onClick={()=>{dispatch(LogoutUser()); navigate("/")}}>Logout</button>
        </div>
    </div>
  )
}

export default SubmittedQuiz