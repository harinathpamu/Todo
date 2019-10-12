import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_FILTER,
  COMPLETE_TODO,
  DELETE_COMPLETED
} from "../utilities/constants";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      todo_id: Math.random(100),
      todo,
      isActive: true
    }
  };
};

export const deleteTodo = todo_id => {
  return {
    type: DELETE_TODO,
    payload: todo_id
  };
};

export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED
  };
};

export const selectFilter = filter => {
  return {
    type: SELECT_FILTER,
    payload: filter
  };
};

export const completeTodo = (todo_id, value) => {
  return {
    type: COMPLETE_TODO,
    payload: { todo_id, value }
  };
};
