import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../user/navbar/Navbar';
// import Footer from '../footer/Footer';
import HomeImage from './HomeImage';
// import Carousel from './Carousel';
// import { elements } from '../links/links';
// import axios from 'axios';

const HomePage = () => {
  let navigate = useNavigate();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const userData = useSelector((state) => state.UserDetails.userDetails);

  // const logout = async () => {
  //   try {
  //     const res = await axios.post(`/api/auth/logout`);
  //     if (res) {
  //       console.log(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   additionalDetails = {};
  //   userData = {};
  // };
  // let sendElement;
  useEffect(() => {
    if (!userData.accessToken) {
      navigate('/');
    }

    // elements.map((element, i) => {
    //   if (element.type == 'login') {
    //     sendElement = element.body;
    //   }
    // });
    // console.log(elements);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${styles.homepage}`}>
      <Navbar
        element={
          <Link
            className={`mx-2 text-dark text-decoration-none btn bg-none`}
            to='/login'
          >
            Login
          </Link>
        }
      />
      <div
        className={`container my-4 ${styles.page1} d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading} text-center mt-4`}>
          Tired of google forms <br></br>so we built our own platform
        </div>
        <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4`}
        >
          Made with ❤ by Google Developer Student Clubs JSSATEN️
        </div>
        {/* <div className='d-flex justify-content center'>
          <div className='m-2'>
            <Link to='/login'>Login</Link>
          </div>
          <div className='m-2'>
            <Link to='/register'>Register</Link>
          </div>
          <div className='m-2'>
            <Link to='/myprofile'>Profile</Link>
          </div>
          <div className='m-2'>
            <Link to='/quiz'>Quiz</Link>
          </div>
          <div className='m-2'>
            <Link to='/create'>Create Quiz</Link>
          </div>
          
        </div> */}
        <div
          className={`d-flex justify-content-center w-50 ${styles.btnContainer}`}
        >
          <Link
            to='/register'
            className={`m-3 text-decoration-none text-center p-1 px-3 mt-1 text-dark ${styles.btnRegister}`}
            type=''
          >
            Register Now
           
          </Link>
        </div>
        <HomeImage />
      </div>
      <div>
      </div>
        <div className={`${styles.page2} d-flex w-100`}>
         <div className={`${styles.pg2Left} d-flex w-100 justify-content-center align-items-center`}>left</div>
         <div className={`${styles.pg2Right} d-flex flex-column justify-content-between p-2 py-5 my-4`}>
          <div className={`d-flex flex-column align-items-start`}>
            <div className={`my-2 ${styles.light}`}>Register</div>
            <div className={`my-2 ${styles.light}`}>Screening Process</div>
            <div className={`my-2 ${styles.light}`}>Task Submission</div>
            <div className={`my-2 ${styles.light}`}>Interview</div>
          </div>
          <div className={`w-50 ${styles.textBold}`}>and become a part of the most amazing society<span className='text-danger mx-1'>❤</span> </div>
         </div>
        </div>
        {/* <div>
          <Carousel/>
        </div> */}
        {/* <div className={`styles.footer w-100`}>
          <Footer/>
        </div> */}
      {/* <div className={`${styles.page2}`}>
          sjdhkjshfskjhvkjsdlhskljvhkjskbvdcvhhbfn hjcbh,gkjdfhfhskjhfskgdsjfgyjsgdj fhkgkjg hfdskgfj
      </div> */}
    </div>
  );
};

export default HomePage;
