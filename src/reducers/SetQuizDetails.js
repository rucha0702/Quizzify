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
        
        default:
        return state;
    }
  };
  
  export default SetQuizDetails;
  