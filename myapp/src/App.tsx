import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "feed coco", rowAssigned: "luwin" },
    { rowNumber: 2, rowDescription: "feed trixie", rowAssigned: "anuka" },
    { rowNumber: 3, rowDescription: "feed kiki", rowAssigned: "ank" },
    { rowNumber: 4, rowDescription: "feed", rowAssigned: "ankss" },
  ]);

  const [ShowTododForm, setShowTododForm] = useState(false);

  const addTodo = (description:string, assigned:string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber:number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Todo List</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowTododForm(!ShowTododForm)}
          >
            {ShowTododForm ? "Close Todo list" : "Add new todo"}
          </button>
          {ShowTododForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
