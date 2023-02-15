import getQuizData from "../api/quizData";
const getQuiz = async () => {
    const  {data}  = await getQuizData();
    // console.log(data);
    return data.length;
  }
  const total =getQuiz();
  const TotalQuestions = (state = total?total:5, action) => {
    switch (action.type) {

        case 'TOTAL_QUESTIONS':
            const data = action.payload;
            { return state=data}
        default:
        return state;
    }
  };
  
  export default TotalQuestions;
  