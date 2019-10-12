import React from "react";
import { connect } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "../utilities/constants";
import { completeTodo, deleteTodo } from "../actions";

function filterTodos(todos, filter) {
  return todos.filter(function(data) {
    if (filter === ALL) {
      return data;
    } else if (filter === ACTIVE && data.isActive) {
      return data;
    } else if (filter === COMPLETED && !data.isActive) {
      return data;
    } else {
      return "";
    }
  });
}

function TodoList(props) {
  let todos = filterTodos(props.todos, props.filter);
  return (
    <ul className="list-group list-group-flush m-2 mx-auto">
      {todos.length !== 0 ? (
        todos.map((data, index) => (
          <li key={data.todo_id} className="list-group-item text-justify">
            <span
              className="h6 mr-3"
              style={{ userSelect:'none',cursor: "pointer" }}
              onClick={() => props.completeTodo(data.todo_id, !data.isActive)}
            >
              {data.isActive ? "⏳" : "✔"}
            </span>
            {data.isActive ? data.todo : <del>{data.todo}</del>}
            <span
              onClick={() => props.deleteTodo(data.todo_id)}
              style={{ float: "right", cursor: "pointer" }}
            >
              🗑
            </span>
          </li>
        ))
      ) : (
        <span className="text-center h1 p-4" aria-label="taskdone" role="img" style={{userSelect:'none'}}>
          👍
          <br />
          All done :)
        </span>
      )}
    </ul>
  );
}

const getState = state => {
  return {
    todos: state.todos,
    filter: state.todoFilterSelected
  };
};

export default connect(
  getState,
  { completeTodo, deleteTodo }
)(TodoList);
