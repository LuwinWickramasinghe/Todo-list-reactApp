import './App.css';
import TodoTable from './components/TodoTable';


function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'feed coco', rowAssigned: 'luwin'},
    {rowNumber: 2, rowDescription: 'feed trixie', rowAssigned: 'anuka'},
    {rowNumber: 3, rowDescription: 'feed kiki', rowAssigned: 'ank'},
    {rowNumber: 4, rowDescription: 'feed', rowAssigned: 'ankss'},
  ]

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className = "card-header">
          Todo List
        </div>
        <div className="card-body">
            <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
