import AdditionalDetails from './AdditionalDetails';
import UserDetails from './UserDetails';
import QuestionCount from './QuestionCount';
import MarkedArray from './MarkedArray';
import SetQuizId from './SetQuizId';
import SetQuizDetails from './SetQuizDetails';
import SetQuestionCount from './SetQuestionCount';
import SetLength from './SetLength';
import SetQuizStatus from './SetQuizStatus';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  QuestionCount, MarkedArray, UserDetails, AdditionalDetails, SetQuizId, SetQuizDetails, SetQuestionCount, SetLength, SetQuizStatus
});

export default rootReducer;
