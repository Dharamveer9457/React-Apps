import './App.css';
import CreateTodo from './Components/CreateTodo';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text) => {
    if(editTodo){
      const updatedTodos = todos.map((todo)=>
      todo.id === editTodo.id ? {...todo, text} : todo);

      setTodos(updatedTodos);
      setEditTodo(null);
    }else{
      const newTodo = {id : Date.now(), text}
      setTodos([...todos, newTodo]);
    };
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo)=>todo.id !== id);
    setTodos(updatedTodos)
  };

  const editsTodo = (id) => {
    const todotoEdit = todos.find((todo) => todo.id === id);
    if(todotoEdit){
      setEditTodo(todotoEdit);
    }
  };

  return(
    <div className='App'>
       <h1>Todo App</h1>
       <CreateTodo onSubmit={addTodo} initialText={editTodo?.text} />
       <TodoList todos={todos} onDelete={deleteTodo} onUpdate={editsTodo} />
    </div>
  )
}

export default App;
