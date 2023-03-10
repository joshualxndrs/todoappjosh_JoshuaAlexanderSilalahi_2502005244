// TodoApp.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist'));
    const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));

    if (savedTodos) {
      setAllTodos(savedTodos);
    }

    if (savedCompletedTodos) {
      setCompletedTodos(savedCompletedTodos);
    }
  }, []);

  const handleAddNewToDo = (newTodo) => {
    setAllTodos((prevTodos) => [...prevTodos, newTodo]);
    localStorage.setItem('todolist', JSON.stringify([...allTodos, newTodo]));
  };

  const handleToDoDelete = (index) => {
    const reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    setAllTodos(reducedTodos);
    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
  };

  const handleCompletedTodoDelete = (index) => {
    const reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index, 1);
    setCompletedTodos(reducedCompletedTodos);
    localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedTodos));
  };

  const handleComplete = (index) => {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const minutes = date.getMinutes();
    const ss = date.getSeconds();
    const finalDate = `${dd}-${mm}-${yyyy} at ${hh}:${minutes}:${ss}`;

    const completedTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    setCompletedTodos((prevTodos) => [...prevTodos, completedTodo]);
    localStorage.setItem('completedTodos', JSON.stringify([...completedTodos, completedTodo]));

    handleToDoDelete(index);
  };

  return (
    <div className="App">
      <h1>Josh's Todo's</h1>

      <TodoInput handleAddNewToDo={handleAddNewToDo} />

      <div className="btn-area">
        <button
          className={`secondaryBtn ${!isCompletedScreen ? 'active' : ''}`}
          onClick={() => setIsCompletedScreen(false)}
        >
          To Do
        </button>
        <button
          className={`secondaryBtn ${isCompletedScreen ? 'active' : ''}`}
          onClick={() => setIsCompletedScreen(true)}
        >
          Completed
        </button>
      </div>

      {isCompletedScreen ? (
        <TodoList
          todos={completedTodos}
          onDelete={handleCompletedTodoDelete}
          onComplete={() => {}}
        />
      ) : (
        <TodoList todos={allTodos} onDelete={handleToDoDelete} onComplete={handleComplete} />
      )}
    </div>
  );
}

export default TodoApp;