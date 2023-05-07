import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "../styles/form.styles.module.css";

export default function RegionSelecting({ onSelect, selectedRegion }) {
  const [isActive, setIsActive] = useState(false);

  const dropDownHandleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  const handleClick = (region) => {
    onSelect(region);
  };
  return (
    <>
      <div className={styles.dropDownMenu} onClick={() => dropDownHandleClick()}>
        <p>{selectedRegion ? selectedRegion : "Filter by Region"}</p>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
        {isActive && (
          <div className={styles.dropDownMenuOptions}>
            {selectedRegion && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick(null)}>
                All
              </div>
            )}
            {selectedRegion != "Africa" && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick("Africa")}>
                Africa
              </div>
            )}
            {selectedRegion != "Americas" && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick("Americas")}>
                America
              </div>
            )}

            {selectedRegion != "Asia" && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick("Asia")}>
                Asia
              </div>
            )}
            {selectedRegion != "Europe" && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick("Europe")}>
                Europe
              </div>
            )}
            {selectedRegion != "Oceania" && (
              <div className={styles.dropDownMenuOption} onClick={() => handleClick("Oceania")}>
                Oceania
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
