import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Nav.module.css'
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function Nav({ filter, onFilter }) {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleFilter = (filter) => {
    onFilter(filter);
  }

  const handleModeChange = () => {
    toggleDarkMode();
  }

  return (
    <div class={styles.nav}>
      <ul>
        <li className={(filter == 1) ? styles.active : ""} onClick={() => { handleFilter("1") }}>전체</li>
        <li className={(filter == 2) ? styles.active : ""} onClick={() => { handleFilter("2") }}>완료</li>
        <li className={(filter == 3) ? styles.active : ""} onClick={() => { handleFilter("3") }}>미완료</li>
      </ul>
      {/* <button onClick={handleModeChange}>{(darkMode) ? "dark" : "white"}</button> */}
    </div>
  );
};
