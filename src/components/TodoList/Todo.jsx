import React from 'react';
import styles from './TodoList.module.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Todo({ todo, onCheck, onDelete }) {

  const handleCheck = (e) => {
    onCheck({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  }

  const handleDelete = () => {
    onDelete(todo);
  }

  return (
    <>
      <li className={styles.todo}>
        <input
          type="checkbox"
          id={todo.id}
          className={styles.checkbox}
          onChange={handleCheck}
          checked={(todo.status == "completed") ? "checked" : ""}
        />
        <label htmlFor={todo.id} className={styles.checkboxLabel}>{todo.name}</label>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          <AiOutlineCloseCircle size="15px"></AiOutlineCloseCircle>
        </button>
      </li>
    </>
  );
};