import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';


function App() {

  const [todos ,setTodos] = useState([
    {rowNumber: 1, rowDescription: 'feed coco', rowAssigned: 'luwin'},
    {rowNumber: 2, rowDescription: 'feed trixie', rowAssigned: 'anuka'},
    {rowNumber: 3, rowDescription: 'feed kiki', rowAssigned: 'ank'},
    {rowNumber: 4, rowDescription: 'feed', rowAssigned: 'ankss'},
  ]
)


  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber +1;
    } else {
      rowNumber = 1 ;
    }
      const newTodo = {
        rowNumber : rowNumber,
        rowDescription : description,
        rowAssigned : assigned
      };

      setTodos(todos => [...todos , newTodo])
    }
  

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className = "card-header">
          Todo List
        </div>
        <div className="card-body">
            <TodoTable todos={todos}/>
            <button className="btn btn-primary" onClick={addTodo}>
              New add Todo
            </button>
            <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
