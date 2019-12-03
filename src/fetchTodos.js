import { actionCreators } from "TodoListRedux";

const API_URL = "https://5de6807e9c4220001405b737.mockapi.io/api/:endpoint";

function fetchTodos() {
  return dispatch => {
    dispatch(actionCreators.fetchTodosPending());
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(actionCreators.fetchTodosSuccess(res.json()));
        return res.json();
      })
      .catch(error => {
        dispatch(actionCreators.fetchTodosError(error));
      });
  };
}

export default fetchTodos;