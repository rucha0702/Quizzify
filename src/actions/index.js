export const AddDetails = (data) => {
  return {
    type: 'ADD_DETAILS',
    payload: data,
  };
};

//For basic user details
export const UserDetails = (data) => {
  return {
    type: 'USER_DETAILS',
    payload: data,
  };
};

export const LogoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};

export const SetQuizId = (data) => {
  return {
    type: 'SET_QUIZ_ID',
    payload:data
  };
};

export const SetQuizDetails = (data) => {
  return {
    type: 'SET_QUIZ_DETAILS',
    payload:data
  };
};

//For incrementing the quiz question counter
export const IncQuestionNum = (data) => {
  return {
    type: 'INC_QUESTION_NUM',
    payload:data
  };
};

//For decrementing the quiz question counter
export const DecQuestionNum = (data) => {
  return {
    type: 'DEC_QUESTION_NUM',
    payload:data
  };
};

export const SetQuestionCount = (data) => {
  return {
    type: 'SET_QUESTION_COUNT',
    payload:data
  };
};

export const MarkedArray = (data) => {
  return {
    type: 'MARK_ANSWER',
    payload:data
  };
};