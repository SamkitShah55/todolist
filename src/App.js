// // src/App.js
import React, { useState } from 'react';
import TodoForm from './components/Todoform';
import TodoList from './components/Todolist';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  console.log('todos:', todos); 
  const [task, setTask] = useState('');
  const [session , setSession] = useState('Add')
  const [selectedTodo,setSelectedTodo]=useState(null);


  
  const changeSession=(session)=>{
   
      setSession(session);

  }

  // const addTodo = (task) => {
  //   setTodos([...todos, { id: Date.now(), ...task }]);
  //   console.log(todos);
  // };

  const addTodo = (task) => {
    if (session === 'Add') {
      setTodos([...todos, { id: Date.now(), ...task }]);
    } else if (session === 'Edit' && selectedTodo) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === selectedTodo.id) {
          return { ...todo, ...task };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setSession('Add'); // Reset session after saving edits
    }
  };
  const taskinput = (ele) =>{
    setTask(ele);
    console.log(task);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
  };

  return (
    <div>
      <h1 className='heading'>Samkit's Todo List</h1>
      <TodoForm addTodo={addTodo} session = {session} task = {task} taskinput = {taskinput} selectedTodo={selectedTodo}/>
      <TodoList changeSession = {changeSession} todos={todos} deleteTodo={deleteTodo} taskinput = {taskinput}
      setSelectedTodo={setSelectedTodo}
      />
    </div>
  );
}

export default App;
