import './App.css';
import QuizData from './components/quiz/QuizData';
// import QuestionCounter from './components/quiz/QuestionCounter';
import UserHome from './components/user/dashboard/UserHome';
import Login from './components/user/login/Login';
import Register from './components/user/register/Register';
// import AdditionalDetails from './reducers/AdditionalDetails';
import Profile from './components/user/register/Profile';
import AllQuizzesData from './components/user/dashboard/AllQuizzesData';
import {Routes, Route} from 'react-router-dom';
import './components/constants.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quiz" element={<QuizData/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/profile" element={<AdditionalDetails/>} /> */}
        <Route path="/home" element = {<UserHome />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/quizzes" element = {<AllQuizzesData />} />
        {/* <Route></Route> */}
      </Routes>
      {/* <Routes>
        <Route to="/" component={<QuizData/>} />
        <Route to="/home" component = {<UserHome />} />
        <Route></Route>
      </Routes> */}
      {/* <QuizData /> */}
      {/* <QuestionCounter/> */}
    </div>
  );
}

export default App;
