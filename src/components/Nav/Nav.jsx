import React from 'react';
import styles from './Nav.module.css'

export default function Nav({ onFilter }) {

  const handleFilter = (filter) => {
    onFilter(filter);
  }

  return (
    <>
      <h1 className={styles.nav}>TODOLIST</h1>
      <ul>
        <li onClick={() => { handleFilter("1") }}>전체</li>
        <li onClick={() => { handleFilter("2") }}>완료</li>
        <li onClick={() => { handleFilter("3") }}>미완료</li>
      </ul>
    </>
  );
};
