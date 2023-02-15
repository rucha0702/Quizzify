import React from 'react';
import { LogoutUser } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = () => {
    dispatch(LogoutUser());
    navigate('/');
  };
  return (
    <button
      className={`mx-2 text-dark text-decoration-none btn bg-none`}
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default Logout;
