import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularFaMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidFaMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import styles from "../styles/header.styles.module.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem("darkmode") || false);
    setIsDarkMode(localValue);
    if (localValue) document.body.classList.add("dark");
  }, []);
  function handleClick(e) {
    localStorage.setItem("darkmode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  }
  return (
    <header className={styles.header}>
      <div>
        <h1>Where in the world?</h1>
        <button className={styles.darkModeButton} onClick={handleClick}>
          <FontAwesomeIcon icon={isDarkMode ? solidFaMoon : regularFaMoon} />
          <p>Dark Mode</p>
        </button>
      </div>
    </header>
  );
}
