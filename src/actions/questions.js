import { _saveQuestion } from "../_DATA";

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'




export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}





function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => dispatch(saveQuestion(question)));
  };
}






export function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}