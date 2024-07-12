import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className = "card-header">
          Todo List
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">no</th>
                <th scope="col">description</th>
                <th scope="col">assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Feed coco</td>
                <td>assigned</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>get haircut</td>
                <td>luwin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
