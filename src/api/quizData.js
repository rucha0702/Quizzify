import axios from "axios";
const url2 ="https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/admin"
const url = "https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/admin/-NMnmMR-wXnEOUx4uuiF";
// const url = "https://gdsc-quiz-6e515-default-rtdb.firebaseio.com/admin/-NFwxNMyhXlPShUZwm_8";

// /quiz.json
export const getAllQuizes = async () => {
  // console.log("called")

  try {
    return await axios.get(`${url2}.json`);
  } catch (error) {
    console.log("Error while calling quiz API", error);
  }
};

export const getQuizData = async (quizId) => {
    // console.log("called")

    try {
      return await axios.get(`${url2}/${quizId}/quiz.json`);
    } catch (error) {
      console.log("Error while calling quiz API", error);
    }
  };

  export const getQuizDetails = async () => {
    // console.log("called")

    try {
      return await axios.get(`${url}/details.json`);
    } catch (error) {
      console.log("Error while calling quiz details API", error);
    }
  };