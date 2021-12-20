import { _getUsers, _getQuestions } from '../_DATA'
import { getQuestions } from './questions';
import { getUsers } from './users';

  export async function getInitialData() {
    const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
    return ({
        users,
        questions
    });
  }
  
  export function handleInitialData() {
    return dispatch => {
      return getInitialData().then(({ users, questions }) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
      });
    };
  }