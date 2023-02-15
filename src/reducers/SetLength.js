const initialState = {
    quizLength: 0,
  };

  const SetLength = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_LENGTH':
            const data = action.payload;
            return {
                ...state,
        
                quizLength: data,
              };

        case 'LOGOUT':
            return {
                ...state,

                quizLength: 0,
            };
        
        default:
        return state;
    }
  };
  export default SetLength;
  