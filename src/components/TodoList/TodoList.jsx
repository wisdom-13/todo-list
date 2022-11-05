import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoList, handleCheck, handleDelete }) {

  return (
    <>
      {todoList.map(todo => (
        <Todo key={todo.id} todo={todo} onCheck={handleCheck} onDelete={handleDelete}></Todo>
      ))}
    </>
  );
};