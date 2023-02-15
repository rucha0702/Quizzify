import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
// import { Link } from 'react-router-dom';

const Sidebar=()=>{
  return (
    <div className={`${styles.sidebar} d-flex flex-column p-4`}>
        <div className={`${styles.sidebarTop} h4 ${styles.head}`}>
            Rapid Recruit
        </div>
        <div className={`${styles.sidebarMid} mt-5 d-flex flex-column`}>
            <Link to='/profile'>My Profile</Link>
            {/* <Link to='/quizzes'>Quizzes</Link> */}
        </div>
    </div>
  )
}

export default Sidebar