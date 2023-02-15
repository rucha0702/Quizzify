import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddDetails } from '../../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
// import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
// import Logout from '../logout/logout';
import { useNavigate } from 'react-router-dom';
import styles from './AdditionalDetails.module.css';
// import { url } from '../../../utilities';
import { url } from '../../utilities';

const Test = () => {
  // const url = 'https://onerecruit.herokuapp.com';
  const dispatch = useDispatch();

  let navigate = useNavigate();

  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const userData = useSelector((state) => state.UserDetails.userDetails);
  const [user, setUser] = useState({
    name: userData.name,
    admissionNumber: userData.admissionNumber,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userData.accessToken}`,
    },
  };
  // const [details, setDetails] = useState({
  //   phoneNumber: additionalDetails && additionalDetails.phoneNumber ? additionalDetails.phoneNumber : '',
  //   branch: additionalDetails && additionalDetails.branch ? additionalDetails.branch : '',
  //   githubProfile: additionalDetails && additionalDetails.githubProfile ? additionalDetails.githubProfile : '',
  //   hackerRankProfile: additionalDetails && additionalDetails.hackerRankProfile
  //     ? additionalDetails.hackerRankProfile
  //     : '',
  //   codeChefProfile: additionalDetails && additionalDetails.codeChefProfile ? additionalDetails.codeChefProfile : '',
  //   codeForcesProfile: additionalDetails && additionalDetails.codeForcesProfile
  //     ? additionalDetails.codeForcesProfile
  //     : '',
  // });
  const [details, setDetails] = useState({
    phoneNumber:"9999999999999",
    branch: "Information Technology",
    githubProfile: 'https://github.com',
    hackerRankProfile: "https://hackerrank.com",
    codeChefProfile: 'https://codechef.com',
    codeForcesProfile:'https://codeforces.com',
  });
  useEffect(() => {
    if (!userData.accessToken) {
      navigate('/login');
    }

    // console.log(userData.accessToken);
    // console.log(config);
    // console.log(user);
  }, [details, userData, navigate]);

  const updateUserInfo = async () => {
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
      } else {
        console.log('could not update');
      }
    } catch (error) {
      console.log(error);
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
    <div className={`${styles.additionalDetails}`}>
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
      <div className='container my-5'>
        <form>
          <div className='h4 mx-3'>Additional Details</div>
          <div className='m-3'>
            <input
              type='text'
              name='name'
              value={user.name}
              placeholder='Name'
              onChange={handleChange}
            />
          </div>
          <div className='mx-3'>
            <label>Admission Number</label> <br></br>
            <input
              type='text'
              name='admissionNumber'
              value={user.admissionNumber}
              onChange={handleChange}
            />
          </div>
          <div className='mx-3'>
            <label>Contact Number</label> <br></br>
            <input
              type='number'
              name='phoneNumber'
              value={details.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex'>
            <div className='mx-3'>
              <label>Branch</label> <br></br>
              <input
                type='text'
                name='branch'
                value={details.branch}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='d-flex'>
            <div className='mx-3'>
              <label>GitHub Profile</label> <br></br>
              <input
                type='text'
                name='githubProfile'
                value={details.githubProfile}
                onChange={handleChange}
              />
            </div>
            <div className='mx-3'>
              <label>HackerRank Profile</label> <br></br>
              <input
                type='text'
                name='hackerRankProfile'
                value={details.hackerRankProfile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='d-flex'>
            <div className='mx-3'>
              <label>CodeChef Profile</label> <br></br>
              <input
                type='text'
                name='codeChefProfile'
                value={details.codeChefProfile}
                onChange={handleChange}
              />
            </div>
            <div className='mx-3'>
              <label>Behance</label> <br></br>
              <input
                type='text'
                name='codeForcesProfile'
                value={details.codeForcesProfile}
                onChange={handleChange}
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
            className='m-3 btn btn-success'
          >
            Update
          </button>
        </form>
        {/* <button
          className='btn btn-success mx-3'
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
