const initialState = {
    quizId: "id",
  };

  const SetQuizId = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_QUIZ_ID':
            const data = action.payload;
            return {
                ...state,
        
                quizId: data,
              };

        case 'LOGOUT':
            return {
                ...state,

                quizId: "id",
            };
        
        default:
        return state;
    }
  };
  export default SetQuizId;
  