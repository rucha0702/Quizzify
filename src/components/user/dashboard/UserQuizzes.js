import React from 'react';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import AllQuizzesData from './AllQuizzesData';
// import CardList from './CardList';
// import axios from 'axios';
// import Navbar from '../navbar/Navbar';
import LoggedNavbar from '../navbar/LoggedNavbar';
// import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';
import styles from './UserHome.module.css';
// import { QuizData } from '../../../actions';

const UserQuizzes=()=>{

  let navigate = useNavigate();
  // const [data, setData] = useState([]);
  // let dispatch= useDispatch();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const userData = useSelector((state) => state.UserDetails.userDetails);
  // const [user, setUser] = useState({
  //   name: userData.name,
  //   admissionNumber: userData.admissionNumber,
  // });

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${userData.accessToken}`,
  //   },
  // };
 
  // const setQuiz = (quiz)=>{
  //   console.log("quiz",quiz)
  //   dispatch(QuizData(quiz));
//   // }
//   const getData = async ()=>{
//     try{
//         const res = await axios.get('https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/admin.json')
//         // const res = await axios.get('https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/admin/-NDUtiFET7bhzK7bQWi1.json')
//         if(res){
//             console.log("All",res.data);
//             console.log("first",res.data[0])

//             const mappedDataArray = [];

//             for (const key in res.data) {
//               const mappedData = {
//                 ...res.data[key]
//               };
//               mappedDataArray.push(mappedData);
//               // setData()
//             }
//             // setData((s)=>{
//             //   s =mappedDataArray
//             // });
//             setData(mappedDataArray);
//             console.log(mappedDataArray);
//             // console.log(data);
//           //   var ar = [];
//           // for(let i=0;i<res.data.length;i++){
//           //   ar.push(res.data[i]);
//           //  }
//             // setData(ar);
//             // console.log("here",ar)
//             // setQuiz(res.data);
//             // const item = res.data;
//             // dispatch(QuizData(item));
//             // let arr =[];  
//         }
//         else{
//             console.log("cannot fetch")
//         }
//     }catch(err){
//         console.log(err)
//     }
// }
// console.log("jfhj",data);

  useEffect(() => {
    if (!userData.accessToken) {
      navigate('/login');
      // console.log("LOGIN")
    }
    // else{
    //   getData();
    // }

    // console.log(userData.accessToken);
    // console.log(config);
    // console.log(user);
  }, [userData, navigate]);
  return (
    <div className={`d-flex w-100 flex-column align-items-center`}>
        {/* <div className={`${styles.sidebar}`}>
            <Sidebar />
        </div> */}
        <div className={`${styles.dashboard} w-100`}>
          <LoggedNavbar/>
            <div className='' style={{width:"100%"}}>
            <div className='h5'>
                <div className='text-secondary mb-1'>Hey! Welcome back</div>
                <div className={`${styles.textBold}`}>{userData.name}</div>
            </div>
            <hr></hr>
            <div>
              <AllQuizzesData />
            </div>
            {/* <div className={`${styles.quizCardsContainer} d-flex`}>
             
            {
            data.map((item,i)=>{
              return(
                <div key={i} className={`${styles.quizCard} m-3 text-center`}>
                  {item.details.title}
                  <div>
                    {item.details.date}
                  </div>
                </div>
              )
            })
          }
            
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default UserQuizzes