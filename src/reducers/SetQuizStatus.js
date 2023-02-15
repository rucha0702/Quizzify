const initialState = {
    quizStatus: "NS",
  };

  const SetQuizStatus = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_QUIZ_STATUS':
            const data = action.payload;
            return {
                ...state,
        
                quizStatus: data,
              };

        case 'LOGOUT':
            return {
                ...state,

                quizStatus: "NS",
            };
        
        default:
        return state;
    }
  };
  export default SetQuizStatus;
  