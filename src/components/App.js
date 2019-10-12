import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className="col-md-6 mx-auto p-4"
          style={{ boxShadow: "0 0 20px 0px #ddd4d4d9" }}
        >
          <AddTodo />
          <Filter />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
