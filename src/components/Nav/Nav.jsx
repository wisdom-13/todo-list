import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Nav.module.css'

export default function Nav({ onFilter }) {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleFilter = (filter) => {
    onFilter(filter);
  }

  const handleModeChange = () => {
    toggleDarkMode();
  }

  return (
    <>
      <h1 className={styles.nav}>TODOLIST</h1>
      <ul>
        <li onClick={() => { handleFilter("1") }}>전체</li>
        <li onClick={() => { handleFilter("2") }}>완료</li>
        <li onClick={() => { handleFilter("3") }}>미완료</li>
      </ul>
      <button onClick={handleModeChange}>{(darkMode) ? "dark" : "white"}</button>
    </>
  );
};
