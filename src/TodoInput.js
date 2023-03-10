// TodoInput.js
import './App.css'
import React, { useState } from 'react';

function TodoInput({ handleAddNewToDo }) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddNewTodo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    handleAddNewToDo(newToDoObj);
    setNewDescription('');
    setNewTodoTitle('');
    addTodo('');
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
}    

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add your activity here"
        />
      </div>
      <div className="todo-input-item">
        <label>Description:</label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Give the description of your activity"
        />
      </div>
      <div className="todo-input-item">
        <button className="primary-btn" type="button" onClick={handleAddNewTodo}>
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInput;