import React from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { SetQuestionCount } from '../../actions';
import styles from './NavigationQuestion.module.css';

const NavigateQuestions = (props) => {
    const len = props.length;
    const navArr=[]
    for(let i=0;i<len;i++)
    {
        navArr.push(i);
    }
    const ans = useSelector(state=>state.MarkedArray.markedArray);
    // console.log("ans",ans)
    const [rerender, setRerender] = useState(false);
    let dispatch = useDispatch();
    return (
            <div className='d-flex flex-wrap m-5'>
                {
                    navArr.map((item,i)=>{
                        return(
                            <div key={i} onClick={()=>{
                                dispatch(SetQuestionCount(item)); setRerender(!rerender)
                            }} className={`${ans[item]<5?styles.navigationButtonChecked:styles.navigationButton} m-2 p-2 d-flex justify-content-center align-items-center rounded`} style={{cursor:"pointer"}}>
                               {item+1}
                            </div>
                        )
                    })
                }
            </div>
  )
}

export default NavigateQuestions