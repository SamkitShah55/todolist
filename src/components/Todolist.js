// src/components/TodoList.js
import React from 'react';




const TodoList = ({ todos, deleteTodo, taskinput, changeSession,setSelectedTodo }) => {
  // const editHandler = (ele) =>{
  //   console.log("working")
  //   taskinput(ele.task)
  // }
  return (
    <ul>
      {todos.map((ele) => (

        <li key={ele.id}>
          <div style={{
            width:"100%"
          }}>


          <div className='listelement'>
            <span className='task-text'>
              {ele.task}

            </span>
            <div className='priority-text'>
              {ele.priority}
            </div>
            <div className='side-btn'>
              <button onClick={() => {

                console.log("working")
                taskinput(ele.task)
                changeSession("Edit");
                setSelectedTodo(ele);


              }} className='edit'>Edit</button>
              <button onClick={() => deleteTodo(ele.id)}>Delete</button>

            </div>
          </div>


          </div>
        </li>

      ))}
    </ul>
  );
};

export default TodoList;
// import React, { useState } from 'react';
// // import './TodoList.css'; // Import the CSS file for additional styling if needed

// const TodoList = ({ todos, deleteTodo, editTodo }) => {
//   const [editTask, setEditTask] = useState(null); // State to track the task being edited

//   const handleEditClick = (todo) => {
//     setEditTask(todo); // Set the task to be edited
//   };

//   const handleSaveClick = () => {
//     editTodo(editTask); // Call the editTodo function to save the edited task
//     setEditTask(null); // Clear the edit state after saving
//   };

//   const isEditing = (todo) => editTask && editTask.id === todo.id;

//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {isEditing(todo) ? (
//             <>
//               <input
//                 type="text"
//                 value={editTask.task}
//                 onChange={(e) => setEditTask({ ...editTask, task: e.target.value })}
//                 placeholder="Edit your task..."
//               />
//               <button onClick={() => handleSaveClick()}>Save</button>
//             </>
//           ) : (
//             <>
//               {todo.task}
//               <button onClick={() => handleEditClick(todo)}>Edit</button>
//               <button onClick={() => deleteTodo(todo.id)} className="delete-button">
//                 Delete
//               </button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


// import React from 'react';

// const TodoList = ({ todos, deleteTodo, editTodo, setEditTask }) => {
//   const handleEditClick = (todo) => {
//     setEditTask(todo); // Set the task to be edited
//   };

//   const handleSaveClick = () => {
//     editTodo(editTask); // Call the editTodo function to save the edited task
//     setEditTask(null); // Clear the edit state after saving
//   };

//   const isEditing = (todo) => editTask && editTask.id === todo.id;

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {isEditing(todo) ? (
//             <>
//               <input
//                 type="text"
//                 value={editTask.task}
//                 onChange={(e) => setEditTask({ ...editTask, task: e.target.value })}
//                 placeholder="Edit your task..."
//               />
//               <button onClick={() => handleSaveClick()}>Save</button>
//             </>
//           ) : (
//             <>
//               {todo.task}
//               <button onClick={() => handleEditClick(todo)}>Edit</button>
//               <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

