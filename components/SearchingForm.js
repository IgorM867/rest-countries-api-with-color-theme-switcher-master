import SearchBar from "./SearchBar";
import RegionSelecting from "./RegionSelecting";

import styles from "../styles/form.styles.module.css";

export default function SearchingForm({ onSearch, onSelectRegion, selectedRegion }) {
  return (
    <form className={styles.form}>
      <SearchBar onChange={onSearch} />
      <RegionSelecting selectedRegion={selectedRegion} onSelect={onSelectRegion} />
    </form>
  );
}
