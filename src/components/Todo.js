import React from 'react';

function Todo({ text }) {
  console.log(text);
  return (
    <div data-testid='todo-item' id='todo-id'>
      {text}
    </div>
  );
}

export default Todo;
