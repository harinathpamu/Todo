import { combineReducers } from "redux";
import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_FILTER,
  COMPLETE_TODO,
  DELETE_COMPLETED
} from "../utilities/constants";

const todoReducer = (todos = [], action) => {
  if (action.type === ADD_TODO) {
    return [...todos, action.payload];
  } else if (action.type === DELETE_TODO) {
    return todos.filter(data => data.todo_id !== action.payload);
  } else if (action.type === COMPLETE_TODO) {
    return todos.map(function(data) {
      if (data.todo_id === action.payload.todo_id) {
        return { ...data, isActive: action.payload.value };
      } else {
        return data;
      }
    });
  } else if (action.type === DELETE_COMPLETED) {
    return todos.filter(data => data.isActive !== false);
  } else {
    return todos;
  }
};

const todoFilterReducer = (selected = "ALL", action) => {
  if (action.type === SELECT_FILTER) {
    return action.payload;
  } else {
    return selected;
  }
};

export default combineReducers({
  todos: todoReducer,
  todoFilterSelected: todoFilterReducer
});
