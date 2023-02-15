import React from 'react';
import styles from './HomeImage.module.css';

const HomeImage=()=>{
  return (
    <div className={`w-100`}>
        <div className={`${styles.topBar} p-2`}>
           <div className={` d-flex align-items-center`}>
            <div className='text-light d-flex'>
                <div className={`mx-1 ${styles.red}`}></div>
                <div className={`mx-1 ${styles.yellow}`}></div>
                <div className={`mx-1 ${styles.green}`}></div>
            </div>
            <div className={`mx-5 ${styles.lightText}`}>www.gdscplatform.com</div>
           </div>
        </div>
        <div className={`${styles.image}`}>
        </div>
        <div className={`${styles.extended}`}></div>
    </div>
  )
}

export default HomeImage