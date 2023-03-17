import './App.css';
import { TodoTable } from './components/TodoTable';
import React, {useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoform, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    // useState returns two items in an array. The first element is the variable that uses useState so we can get the todos out
    // the second element is the variable is a function on setting that state
     
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge phone', rowAssigned: 'User One'}
  ])

  const addTodo = (description: string, assigned: string) => {
    // console.log('our addTodo button has been clicked');
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description,
        rowAssigned: assigned
      }
      // todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoform)} 
                  className='btn btn-primary'>
                {showAddTodoform ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoform && 
          <NewTodoForm addTodo={addTodo}/>
          }
          
        </div>
      </div>
    </div>
  );
}
