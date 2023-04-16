import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddDetails } from '../../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../login/Loader';
// import Navbar from '../navbar/Navbar';
// import { Link } from 'react-router-dom';
// import Logout from '../logout/logout';
// import Logout from '../logout/logout';
import LoggedNavbar2 from '../navbar/LoggedNavbar2'
import { useNavigate } from 'react-router-dom';
import styles from './AdditionalDetails.module.css';
import { Link } from 'react-router-dom';
// import { url } from '../../../utilities';
import { url } from '../../utilities';

const Test = () => {
  // const url = 'https://onerecruit.herokuapp.com';
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const additionalDetails = useSelector(
    (state) => state.AdditionalDetails.additionalDetails
  );
  const userData = useSelector((state) => state.UserDetails.userDetails);
  const [user, setUser] = useState({
    name: userData.name,
    admissionNumber: userData.admissionNumber,
  });

  const [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userData.accessToken}`,
    },
  };
  const [details, setDetails] = useState({
    phoneNumber: additionalDetails && additionalDetails.phoneNumber ? additionalDetails.phoneNumber : '',
    branch: additionalDetails && additionalDetails.branch ? additionalDetails.branch : '',
    githubProfile: additionalDetails && additionalDetails.githubProfile ? additionalDetails.githubProfile : '',
    hackerRankProfile: additionalDetails && additionalDetails.hackerRankProfile
      ? additionalDetails.hackerRankProfile
      : '',
    codeChefProfile: additionalDetails && additionalDetails.codeChefProfile ? additionalDetails.codeChefProfile : '',
    codeForcesProfile: additionalDetails && additionalDetails.codeForcesProfile
      ? additionalDetails.codeForcesProfile
      : '',
  });
  // const [details, setDetails] = useState({
  //   phoneNumber:"9999999999999",
  //   branch: "Information Technology",
  //   githubProfile: 'https://github.com',
  //   hackerRankProfile: "https://hackerrank.com",
  //   codeChefProfile: 'https://codechef.com',
  //   codeForcesProfile:'https://codeforces.com',
  // });
  useEffect(() => {
    if (!userData.accessToken) {
      navigate('/login');
    }

    // console.log(userData.accessToken);
    // console.log(config);
    // console.log(user);
  }, [details, userData, navigate]);

  const updateUserInfo = async () => {
    setIsLoading(true)
    // e.preventDefault();
    const { name, admissionNumber } = user;
    // userData.name = name;
    // userData.admissionNumber = admissionNumber;
    // console.log(userData.name, userData.admissionNumber, additionalDetails);
    // console.log(name, admissionNumber, additionalDetails);
    try {
      const data = await axios.patch(
        `${url}/api/user/myprofile`,
        {
          name,
          admissionNumber,
          additionalDetails: details,
        },
        config
      );
      // const data = await axios.get('/api/user/myprofile');
      if (data) {
        console.log('updated', data.data);
        setIsLoading(false)
        alert("Updated")
      } else {
        setIsLoading(false)
        alert(data.response.data.message);
      }
    } catch (error) {
      console.log(error.response.data.message)
      setIsLoading(false)
      alert(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={`${styles.additionalDetails} d-flex flex-column align-items-start w-100`} style={{height:"100vh"}}>
      <div className='w-100'>
        <LoggedNavbar2/>
      </div>
      <div className='w-100'>
              <Link to="/uq">Go to Quiz</Link>
      </div>
      {/* <Navbar
        element={
          <Link
            className={`mx-2 text-dark text-decoration-none btn bg-none`}
            to='/home'
          >
            Home
          </Link>
        }
        logout={<Logout />}
      /> */}
      <div className='container my-5 text-light'>
        <form className={`d-flex flex-column align-items-center  ${styles.addDetails}`}>
          {isLoading && <Loader />}
          <div className={`h4 mx-4`}>Enter Your Details</div>
          <div className={`mx-4`} style={{fontSize:"14px", color:"lightgrey"}}>profiles are not mandatory</div>
          <div className={`d-flex m-2 ${styles.pair}`}>
          <div className='m-1 mx-3 w-50'>
          {/* <label className='mb-2 w-100'>Name</label> <br></br> */}
            <input
              type='text'
              name='name'
              value={user.name}
              placeholder='Name'
              onChange={handleChange}
              className='w-100 rounded p-1 border-0'
            />
          </div>
          <div className='m-1 mx-3 w-50'>
            {/* <label className='mb-2'>Contact Number</label> <br></br> */}
            <input
              type='number'
              name='phoneNumber'
              value={details.phoneNumber}
              placeholder="Contact Number"
              onChange={handleChange}
              className='w-100 rounded p-1 border-0'
            />
          </div>
          </div>
          <div className={`d-flex m-2  ${styles.pair}`}>
          <div className='m-1 mx-3 w-50'>
            {/* <label className='mb-2'>Admission Number</label> <br></br> */}
            <input
              type='text'
              name='admissionNumber'
              value={user.admissionNumber}
              placeholder="Admission Number"
              onChange={handleChange}
              className='w-100 rounded p-1 border-0'
              style={{background:"#f0f0f0"}}
            />
          </div>
            <div className='m-1 mx-3 w-50'>
              {/* <label className='mb-2'>Branch</label> <br></br> */}
              <input
                type='text'
                name='branch'
                value={details.branch}
                placeholder="Branch"
                onChange={handleChange}
                className='w-100 rounded p-1 border-0'
              />
            </div>
          </div>
          <div className={`d-flex m-2  ${styles.pair}`}>
            <div className='m-1 mx-3 w-50'>
              {/* <label className='mb-2'>GitHub Profile</label> <br></br> */}
              <input
                type='text'
                name='githubProfile'
                value={details.githubProfile}
                placeholder="GitHub Profile"
                onChange={handleChange}
                className='w-100 rounded p-1 border-0'
              />
            </div>
            <div className='m-1 mx-3 w-50'>
              {/* <label className='mb-2'>HackerRank Profile</label> <br></br> */}
              <input
                type='text'
                name='hackerRankProfile'
                value={details.hackerRankProfile}
                placeholder="HackerRank Profile"
                onChange={handleChange}
                className='w-100 rounded p-1 border-0'
              />
            </div>
          </div>
          <div className={`d-flex m-2  ${styles.pair}`}>
            <div className='m-1 mx-3 w-50'>
              {/* <label className='mb-2'>CodeChef/CodeForces Profile</label> <br></br> */}
              <input
                type='text'
                name='codeChefProfile'
                value={details.codeChefProfile}
                placeholder="CodeChef/CodeForces Profile"
                onChange={handleChange}
                className='w-100 rounded p-1 border-0'
              />
            </div>
            <div className='m-1 mx-3 w-50'>
              {/* <label className='mb-2'>Behance</label> <br></br> */}
              <input
                type='text'
                name='codeForcesProfile'
                value={details.codeForcesProfile}
                placeholder="Behance"
                onChange={handleChange}
                className='w-100 rounded p-1 border-0'
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              userData.name = user.name;
              userData.admissionNumber = user.admissionNumber;
              userData.additionalDetails = details;
              // console.log(user.name, user.admissionNumber);
              dispatch(AddDetails(details));
              updateUserInfo();
            }}
            className='m-2 mx-4 btn px-5 mt-5 text-light' style={{background:'linear-gradient(to right, #FF69B4, #6495ED)'}}
          >
            Update
          </button>
          {/* <div><Logout/></div> */}
        </form>
        {/* <button
          className='btn btn-success m-1 mx-3 w-50'
          onClick={() => {
            console.log(additionalDetails);
          }}
        >
          console
        </button> */}
      </div>
    </div>
  );
};

export default Test;

// additionalDetails:[

//   {
//       phoneNumber:{
//           type:String,
//           required:false
//       },
//       branch:{
//           type:String,
//           required:false
//       },
//       admissionNumber:{
//           type:String,
//           required:false
//       },
//       githubProfile:{
//           type:String,
//           required:false
//       },
//       hackerRankProfile:{
//           type:String,
//           required:false
//       },
//       codeChefProfile:{
//           type:String,
//           required:false
//       },
//       codeForcesProfile:{
//           type:String,
//           required:false
//       }
//   }
// ]
