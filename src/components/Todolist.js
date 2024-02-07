// src/components/TodoList.js
import React,{useEffect} from 'react';




const TodoList = ({ todos, deleteTodo,priorityInput,changeSession,taskInput,taskinput,session,setTask,setPriority,setSelectedTodo }) => {

  // useEffect(() => {
  //   if (session === "Save") {

  //     setTask(taskInput)
  //     setPriority(priorityInput);
     

  //   }

  // },);
  const editHandler = (ele) =>{
    console.log("working")
    taskinput(ele.task)
  }
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




