
// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './Todolist';
import { fetchTasks, addTask, updateTask, deleteTask } from './Api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateTask(taskId, { completed: !tasks.find((task) => task.id === taskId).completed })
      .then(() => setTasks(updatedTasks))
      .catch((error) => console.error(error));
  };

  const handleAddTask = (newTaskTitle) => {
    const newTask = { title: newTaskTitle, completed: false };
    addTask(newTask)
      .then((data) => setTasks([...tasks, data]))
      .catch((error) => console.error(error));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    deleteTask(taskId)
      .then(() => setTasks(updatedTasks))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <TodoList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <div>
        <input
          type="text"
          placeholder="New task..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => handleAddTask(document.querySelector('input').value)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
