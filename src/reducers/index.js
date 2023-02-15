import AdditionalDetails from './AdditionalDetails';
import UserDetails from './UserDetails';
import QuestionCount from './QuestionCount';
import MarkedArray from './MarkedArray';
import SetQuizId from './SetQuizId';
import SetQuizDetails from './SetQuizDetails';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  QuestionCount, MarkedArray, UserDetails, AdditionalDetails, SetQuizId, SetQuizDetails
});

export default rootReducer;
