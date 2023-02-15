import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import AdditionalDetails from './AdditionalDetails';
// import { useDispatch } from 'react-redux';
// import { UserDetails } from '../../../actions';
// import Navbar from '../navbar/Navbar';
import styles from './Register.module.css';
import { url } from '../../utilities';
import axios from 'axios';

const Register = () => {
  // const url = 'https://onerecruit.herokuapp.com';
  // const dispatch = useDispatch();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    admissionNumber: '',
  });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const userRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, admissionNumber } = user;
    if (name && email && password && admissionNumber) {
      // console.log('User is:', user);
      const res = await axios.post(`${url}/api/auth/register`, {
        name,
        email,
        password,
        admissionNumber,
      });
      // console.log(res.data);
      if (res.data.success === true) {
        setMessage('Registered successfully, proceed to login.');
      }
      // const data = await res.json();
      // if (data) {
      //   console.log('success');
      //   console.log(data);
      // }
      // axios
      //   .post('http://localhost/5000/api/auth/register', user)
      //   .then((response) => {
      //     console.log(response);
      //   });
    } else {
      alert('Invalid user');
    }
  };
  return (
    <div className={`${styles.registerContainer}`}>
      {/* <Navbar
        element={
          <Link
            className={`mx-2 text-dark text-decoration-none btn bg-none`}
            to='/'
          >
            Home
          </Link>
        }
      /> */}
      <div className=' mb-5'></div>
      <div
        className={`container my-4 w-100 d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading}`}>Create a new account</div>
        <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4`}
        >
          Let’s get you a new account so that you don’t miss out on our new
          events
        </div>
        <div className={`text-dark`}>{message}</div>
        <form
          onSubmit={userRegister} 
          className={`container d-flex flex-column align-items-center w-50 ${styles.formContainer}`}
        >
          <div className={`m-2 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='name'
              value={user.name}
              placeholder='Name'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='email'
              name='email'
              value={user.email}
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='password'
              name='password'
              value={user.password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='admissionNumber'
              value={user.admissionNumber}
              placeholder='Admission Number'
              onChange={handleChange}
            />
          </div>
          <div className={`d-flex ${styles.registerLogin} align-items-center justify-content-between`}>
            <div className={`${styles.regLeft}`}>
              <span className='mx-1'>or</span>
          <Link
            to='/login'
            className={`text-decoration-none text-dark`}
            style={{fontWeight:"600"}}
          >
           Sign in to your account
          </Link>
            </div>
            <div
          className={`d-flex justify-content-center w-50 ${styles.btnContainer}`}
        >
          <div
            onClick={userRegister}
            className={` text-decoration-none text-center p-1 px-3 mt-1 text-dark ${styles.btnRegister}`}
            type=''
          >
            Sign Up
           
          </div>
        </div>
          </div>

        </form>
        {/* <AdditionalDetails /> */}
        {/* <button
          className='btn'
          onClick={() => {
            console.log(additionalDetails);
          }}
        >
          print
        </button> */}
      </div>
    </div>
  );
};

export default Register;

// mongodb+srv://rucha:passrucha@cluster0.svy4h.mongodb.net/userinfo?retryWrites=true&w=majority
