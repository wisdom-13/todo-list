import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css'

export default function TodoList({ todoList, filter, handleCheck, handleDelete }) {

  return (
    <ul className={styles.list}>
      {todoList.map(todo => {
        if (filter == 1 || (filter == 2 && todo.checked) || (filter == 3 && !todo.checked)) {
          return <Todo key={todo.id} todo={todo} onCheck={handleCheck} onDelete={handleDelete}></Todo>
        }
      })}
    </ul>
  );
};