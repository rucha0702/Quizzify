  
  const SetQuestionCount = (state = 0, action) => {
    switch (action.type) {

        case 'SET_QUESTION_COUNT':
            const data = action.payload;
            { return state=data;}
        
        default:
        return state;
    }
  };
  
  export default SetQuestionCount;
  