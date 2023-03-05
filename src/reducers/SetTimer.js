const initialState = {
    time: 0,
  };

  const SetTimer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_TIMER':
            const data = action.payload;
            return {
                ...state,
        
                time: data,
              };

        case 'LOGOUT':
            return {
                ...state,

                time: 0,
            };
        
        default:
        return state;
    }
  };
  export default SetTimer;
  