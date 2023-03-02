import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetails, AddDetails } from '../../../actions/index';
// import Navbar from '../navbar/Navbar';
import styles from './Login.module.css';
// import { elements } from '../links/links';
import { url } from '../../utilities';
import Loader from './Loader';

const Login = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [sendElement, setSendElement] = useState('');
  //   const url = 'https://onerecruit.herokuapp.com';
  //   const additionalDetails = useSelector(state=>state.AdditionalDetails.additionalDetails)
  const userData = useSelector((state) => state.UserDetails.userDetails);
  useEffect(() => {
    if (userData.accessToken) {
      navigate('/home');
    }
    // elements.map((element) => {
    //   if (element.type == 'home') {
    //     setSendElement(element.body);
    //   }
    // });
    // eslint-disable-next-line
  }, []);
  let dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //   const localData = localStorage.getItem('userinfo');
  //   const userInfo = localData ? JSON.parse(localData) : null;

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const { email, password } = user;
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/auth/login`, {
        email,
        password,
      });
      //   setUser(res.data);
      // console.log(res.data);
      if (res) {
        // const user = res.data;
        dispatch(UserDetails(res.data));
        dispatch(AddDetails(res.data.additionalDetails));
        setIsLoading(false);

        // localStorage.setItem('userinfo', JSON.stringify(res.data));
        // console.log('response present');
        // console.log('redux data', userData);
        if (res.data.accessToken) {
          navigate('/home', { replace: true });
        } else {
          alert('wrong credentials');
          setIsLoading(false);
        }
      } else {
        if (res) {
          console.log('data');
          setIsLoading(false)
        } else {
          alert("Enter correct credentials");
          console.log('Network error');
          setIsLoading(false);
        }
      }
    } catch (error) {
      alert("Enter correct credentials");
      console.log(error);
      setIsLoading(false);
    }
    // console.log(user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className={`${styles.loginPage}`}>
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
      {isLoading && <Loader />}
      <div
        className={`container my-4 ${styles.loginContainer} w-100 d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading}`}>Login to your account</div>
        <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4`}
        >
          Quickly login to your account and enjoy the full experience of
          Rapid Recruit
        </div>
        <div className={`w-100 ${styles.formOuter}`}>
          <form
            onSubmit={handleSubmit}
            className={`container d-flex flex-column align-items-center ${styles.formContainer}`}
          >
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
             <div className={`d-flex justify-content-between ${styles.bottomNav}`}>
              <div className={`${styles.logLeft} my-2`}>
              <span>or</span> 
            <Link
              to='/register'
              className={`my-3 mx-1 text-decoration-none text-dark ${styles.btnRegister}`}
              type=''
            >
              Create a new account
            </Link></div>
            <button className={`${styles.btnLogin} px-4`} type='submit'>
              Log in
            </button>
             </div>
            
            

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
