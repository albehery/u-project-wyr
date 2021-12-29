import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

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

function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then(question => dispatch(saveQuestion(question)))
  };
}


export function handleSaveQuestionAnswer( authedUser, qid, answer ) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(dispatch(saveQuestionAnswer({authedUser, qid, answer})))
  }
}
