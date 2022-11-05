import React from 'react';

export default function Todo({ todo, onCheck, onDelete }) {

  const handleCheck = () => {
    onCheck(todo);
  }

  const handleDelete = () => {
    onDelete(todo);
  }

  return (
    <>
      <li>
        <label>
          <input type="checkbox" onChange={handleCheck} checked={(todo.checked) ? "checked" : ""}></input>
          {todo.name}
        </label>
        <button onClick={handleDelete}>삭제</button>
      </li>
    </>
  );
};