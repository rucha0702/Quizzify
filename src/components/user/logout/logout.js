import React from 'react';
import { LogoutUser } from '../../../actions/index';
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
      className={`mx-3 text-light text-decoration-none btn bg-none btn-primary`}
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default Logout;
