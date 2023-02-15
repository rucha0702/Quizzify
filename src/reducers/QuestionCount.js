const initialState = {
    questionCount: 0,
  };
  const QuestionCount = (state=initialState, action) => {
    switch (action.type) {

        case 'INC_QUESTION_NUM':
            const data = action.payload;
            return {
                ...state,
        
                questionCount: data<9?data + 1:9
              };
        case 'DEC_QUESTION_NUM':
            const d = action.payload
            return {
                ...state,
        
                questionCount: d>0?d - 1:0
              };
        case 'SET_QUESTION_COUNT':
            const c = action.payload
            return {
                ...state,
        
                questionCount: c
              };
        default:
        return state;
    }
  };
  
  export default QuestionCount;
  