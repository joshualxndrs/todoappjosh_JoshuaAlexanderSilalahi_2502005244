//TodoList.js
import React from 'react';
import './App.css';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineFileDone } from 'react-icons/ai';

function TodoList({ todos, onDelete, onComplete }) {
  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.completedOn && <p> <i>Completed at: {item.completedOn}</i></p>}
          </div>
          <div>
            <MdDeleteForever
              title="Delete?"
              className="icon"
              onClick={() => onDelete(index)}
            />
            {!item.completedOn && (
              <AiOutlineFileDone
                title="Completed?"
                className=" check-icon"
                onClick={() => onComplete(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;