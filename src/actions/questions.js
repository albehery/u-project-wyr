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

function saveQuestionAnswer({ authedUser, questionId, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    questionId,
    answer
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => dispatch(saveQuestion(question)));
  };
}


export function handleAddAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(saveQuestionAnswer(
      {
        authedUser,
        qid,
        answer,
      }))
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
  }
}
