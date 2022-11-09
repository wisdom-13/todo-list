import React from 'react';
import styles from './TodoList.module.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Todo({ todo, onCheck, onDelete }) {

  const handleCheck = () => {
    onCheck(todo);
  }

  const handleDelete = () => {
    onDelete(todo);
  }

  return (
    <>
      <li className={styles.todo}>
        <input id={todo.id} className={styles.checkbox} type="checkbox" onChange={handleCheck} checked={(todo.checked) ? "checked" : ""}></input>
        <label htmlFor={todo.id} className={styles.checkboxLabel}>{todo.name}</label>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          <AiOutlineCloseCircle size="15px"></AiOutlineCloseCircle>
        </button>
      </li>
    </>
  );
};