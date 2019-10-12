import React from "react";
import { connect } from "react-redux";
import { ALL, ACTIVE, COMPLETED, DELETE_COMPLETED } from "../utilities/constants";
import { selectFilter, deleteCompleted } from "../actions";

function Filter(props) {
  return (
    <ul className="nav nav-pills my-2">
      <li
        className="nav-item"
        onClick={() => props.selectFilter(ALL)}
        style={{ cursor: "pointer" }}
      >
        <span
          className={`nav-link p-0 px-3 ${
            props.filter === ALL ? "active" : null
          }`}
        >
          All
        </span>
      </li>
      <li
        className="nav-item"
        onClick={() => props.selectFilter(ACTIVE)}
        style={{ cursor: "pointer" }}
      >
        <span
          className={`nav-link p-0 px-3 ${
            props.filter === ACTIVE ? "active" : null
          }`}
        >
          Active
        </span>
      </li>
      <li
        className="nav-item"
        onClick={() => props.selectFilter(COMPLETED)}
        style={{ cursor: "pointer" }}
      >
        <span
          className={`nav-link p-0 px-3 ${
            props.filter === COMPLETED ? "active" : null
          }`}
        >
          Completed
        </span>
      </li>
      <li
        className="nav-item ml-1"
        style={{ cursor: "pointer" }}
        onClick={() => props.deleteCompleted(DELETE_COMPLETED)}
      >
        <span className="nav-link p-0 px-3 bg-warning text-white">Clear Completed</span>
      </li>
    </ul>
  );
}

const getState = state => {
  return { filter: state.todoFilterSelected };
};

export default connect(
  getState,
  { selectFilter, deleteCompleted }
)(Filter);
