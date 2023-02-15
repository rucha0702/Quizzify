  
  const SetQuizId = (state = "id", action) => {
    switch (action.type) {

        case 'SET_QUIZ_ID':
            const data = action.payload;
            { return state=data}
        
        default:
        return state;
    }
  };
  export default SetQuizId;
  