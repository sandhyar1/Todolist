// src/TodoList.js

import React from 'react';

function TodoList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onCompleteTask(task.id)}
            />
            {task.title}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
