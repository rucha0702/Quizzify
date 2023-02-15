const initialState = {
    questionCount: 0,
  };
  const QuestionCount = (initialState, action) => {
    switch (action.type) {

        case 'INC_QUESTION_NUM':
            const data = action.payload;
            return {
                ...state,
        
                quizId: data<9?data + 1:9
              };
        case 'DEC_QUESTION_NUM':
            const d = action.payload
            return {
                ...state,
        
                quizId: d>0?d - 1:0
              };
        case 'SET_QUESTION_COUNT':
            const c = action.payload
            return {
                ...state,
        
                quizId: c
              };
        default:
        return state;
    }
  };
  
  export default QuestionCount;
  