import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/form.styles.module.css";

export default function SearchBar({ onChange }) {
  return (
    <div className={styles.searchBar}>
      <label htmlFor="text-input">
        <FontAwesomeIcon className={styles.searchBarIcon} icon={faMagnifyingGlass} />
      </label>
      <input onChange={onChange} className={styles.searchBarInput} id="text-input" placeholder="Search for a country..." autocomplete="off" />
    </div>
  );
}
