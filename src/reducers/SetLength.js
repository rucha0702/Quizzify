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
        
        default:
        return state;
    }
  };
  export default SetLength;
  