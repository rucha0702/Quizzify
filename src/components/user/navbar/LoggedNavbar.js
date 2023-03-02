import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedNavbar.module.css';
import { LogoutUser } from '../../../actions';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Navbar(props) {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const logout = () => {
        dispatch(LogoutUser());
        navigate('/');
      };
  return (
    
      <div className={`${styles.navContainer} p-1 px-2 my-2 mx-auto my-2 d-flex justify-content-between align-items-center rounded-pill`}>
        <div className='d-flex' style={{cursor:"pointer"}}>
        <div className={`${styles.navbarTitle} mx-2`}>
        </div>
        <div className={`${styles.gdsc}`} onClick={()=>{navigate("/")}}>Google Developer Student Clubs, JSSATEN</div>
        </div>
        <div className={`d-flex space-between align-items-center`}>
         
           
           <div className={`${styles.logout} mx-2`} onClick={logout}>Logout</div> 
           <div className='mx-2'><Link to="/profile" className='text-decoration-none text-dark'>Profile</Link></div> 
          
        </div>
      </div>
   
  );
}

export default Navbar;
// {`w-100 d-flex justify-content-center bg-dark`}
