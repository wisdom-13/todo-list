import React, { useRef } from 'react';
import styles from './TodoAdd.module.css'

export default function TodoAdd({ onSubmit }) {

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    if (text) {
      onSubmit(text);
    }
    inputRef.current.value = "";
  }

  return (
    <>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input className={styles.addInput} type="text" ref={inputRef} placeholder="할 일을 입력하세요."></input>
        <button className={styles.addBtn}>추가</button>
      </form>
    </>
  );
};