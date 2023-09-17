// src/api.js

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTasks() {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  return data;
}

export async function addTask(task) {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
}

export async function updateTask(id, updates) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  const data = await response.json();
  return data;
}

export async function deleteTask(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
}
