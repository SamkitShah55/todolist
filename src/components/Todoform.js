import React, { useState } from 'react';

const TodoForm = ({ addTodo, taskInput, priorityInput, session, selectedTodo }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('low'); // Default priority is set to 'low'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo({ task, priority });
      setTask('');
      setPriority('low'); // Reset priority after adding task
    }
  };
  if (session === "Edit") {
    setTask(selectedTodo.task)
    setPriority(selectedTodo.priority)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {session === 'Add' ? (
        <button className='addbtn' type="submit">
          Add
        </button>
      ) : (
        <button className='addbtn' type="submit">
          Save
        </button>
      )}
    </form>
  );
};

export default TodoForm;
