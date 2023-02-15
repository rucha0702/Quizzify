import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {useNavigate} from 'react-router-dom';

function Navbar(props) {
  return (
    
      <div className={`${styles.navContainer} px-2 my-2 w-50 mx-auto my-2 d-flex justify-content-between align-items-center rounded-pill`}>
        <div className='d-flex' style={{cursor:"pointer"}}>
        <div className={`${styles.navbarTitle} mx-2`}>
        </div>
        <div className={`${styles.gdsc}`}>Google Developer Student Clubs, JSSATEN</div>
        </div>
        <div className={`d-flex space-between align-items-center`}>
         
           {/* <div>{element}</div>
           <div>{logout}</div> */}
          
        </div>
      </div>
   
  );
}

export default Navbar;
// {`w-100 d-flex justify-content-center bg-dark`}
