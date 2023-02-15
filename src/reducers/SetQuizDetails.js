const initialState = {
    details: [],
  };
  const SetQuizDetails = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_QUIZ_DETAILS':
            const data = action.payload;
            return {
                ...state,
        
                details: data,
              };

        case 'LOGOUT':
            return {
                ...state,

                details: [],
            };
        
        default:
        return state;
    }
  };
  
  export default SetQuizDetails;
  