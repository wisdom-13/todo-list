import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './TodoAdd.module.css'

export default function TodoAdd({ onSubmit }) {

  const [text, setText] = useState();
  const handleChange = (e) => { setText(e.target.value); }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim) {
      onSubmit(text);
    }
    setText("");
  }

  return (
    <>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input className={styles.addInput} type="text" onChange={handleChange} value={text} placeholder="할 일을 입력하세요."></input>
        <button className={styles.addBtn}>추가</button>
      </form>
    </>
  );
};