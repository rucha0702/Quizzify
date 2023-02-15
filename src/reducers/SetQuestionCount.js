const initialState = {
  count: 0,
};
  const SetQuestionCount = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_QUESTION_COUNT':
            const data = action.payload;
            return {
              ...state,
      
              count: data,
            };
        
        default:
        return state;
    }
  };
  
  export default SetQuestionCount;
  