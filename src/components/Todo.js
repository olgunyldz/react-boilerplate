import React from 'react';
import './todo.css';

function Todo({ todo }) {
  const { id, description, completed } = todo;
  const text = completed ? <strike>{description}</strike> : description;
  const color = completed ? 'red' : 'green';
  return (
    <div data-testid={`todo-item-${id}`} id={`todo-id-${id}`}>
      <h1 style={{ color: color }}> {text}</h1>
    </div>
  );
}

export default Todo;
