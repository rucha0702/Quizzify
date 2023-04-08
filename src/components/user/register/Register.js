import React from 'react';
import validator from 'validator'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import AdditionalDetails from './AdditionalDetails';
// import { useDispatch } from 'react-redux';
// import { UserDetails } from '../../../actions';
import Navbar from '../navbar/Navbar';
import Loader from '../login/Loader';
import styles from './Register.module.css';
import { url } from '../../utilities';
import axios from 'axios';

const Register = () => {
  // const url = 'https://onerecruit.herokuapp.com';
  // const dispatch = useDispatch();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [emailVal, setEmailVal] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    admissionNumber: '',
  });
  const [message, setMessage] = useState('');

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const userRegister = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const { name, email, password, admissionNumber } = user;
    if (name && email && password && admissionNumber && emailError==="Valid Email :)") {
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
        setIsLoading(false)
        alert("Registered succesfully");
        navigate('/login')
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
      setIsLoading(false)
    }
  };
  return (
    <div className={`${styles.registerContainer} relative`}>
      <Navbar
        element={
          <Link
            className={`mx-2 text-dark text-decoration-none btn bg-none`}
            to='/'
          >
            Home
          </Link>
        }
      />
      <div className='bgimage'></div>
      <div className=' mb-5'></div>
      {isLoading && <Loader/>}
      <div
        className={`container my-4 w-100 d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading} text-light`}>Create a new account</div>
        <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4 text-light`}
        >
          Let’s get you a new account so that you don’t miss out on our new
          events
        </div>
        <div className={`text-dark`}>{message}</div>
        
        
        <div className={`${styles.formOuter}`}>
        <form
          onSubmit={userRegister} 
          className={`container d-flex flex-column align-items-center w-100 ${styles.formContainer} relative`}
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
          <span className={`${emailError==="Valid Email :)"?'d-none':""}`} style={{
          fontWeight: '',
          color: 'rgb(214, 70, 70)',
        }}>{emailError}</span>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='email'
              name='email'
              value={user.email}
              placeholder='Email'
              onChange={(e)=>{validateEmail(e);handleChange(e)}}
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
          <div className={`d-flex ${styles.registerLogin} align-items-center justify-content-between ${styles.bottomNav}`}>
            <div className={`${styles.regLeft}`}>
              <span className='px-1 text-light'>or</span>
          <Link
            to='/login'
            className={`text-light`}
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
            className={` text-decoration-none text-center p-1 px-3 mt-1 text-dark ${styles.btnRegister} w-100`}
            type=''
          >
            Sign Up
           
          </div>
        </div>
          </div>

        </form>
        </div>
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
