import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Nav.module.css'
import { HiMoon, HiSun } from "react-icons/hi";

export default function Nav({ filter, filters, onFilterChange }) {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.nav}>
      <ul>
        {filters.map((value, index) => (
          <li
            key={index}
            className={(filter == value) ? styles.active : ""}
            onClick={() => { onFilterChange(value) }}
          >
            {value}
          </li>
        ))}
      </ul>
      <button className={styles.modeChangeBtn} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}

      </button>
    </div>
  );
};
