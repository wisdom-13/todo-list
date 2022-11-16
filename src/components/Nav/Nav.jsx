import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Nav.module.css'
import { AiOutlineBulb } from "react-icons/ai";

export default function Nav({ filter, filters, onFilterChange }) {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleFilter = (filter) => {
    onFilterChange(filter);
  }

  const handleModeChange = () => {
    toggleDarkMode();
  }

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
      <button className={styles.modeChangeBtn} onClick={handleModeChange}>
        <AiOutlineBulb size="25px"></AiOutlineBulb>
      </button>
    </div>
  );
};
