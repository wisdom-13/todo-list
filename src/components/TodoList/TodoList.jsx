import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css'

export default function TodoList({ todoList, filter, handleCheck, handleDelete }) {

  const filtered = getFilteredItem(todoList, filter);

  return (
    <ul className={styles.list}>
      {(todoList.length == 0) ? "할 일을 등록해주세요!" : ""}
      {filtered.map(todo => {
        return <Todo key={todo.id} todo={todo} onCheck={handleCheck} onDelete={handleDelete}></Todo>
      })}

    </ul>
  );
};

function getFilteredItem(todoList, filter) {
  if (filter === 'all') {
    return todoList;
  }
  return todoList.filter(todo => todo.status === filter);
}