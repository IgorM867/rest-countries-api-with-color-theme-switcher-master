import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      <div className="drop-down-menu" onClick={() => dropDownHandleClick()}>
        <p>{selectedRegion ? selectedRegion : "Filter by Region"}</p>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
        {isActive && (
          <div className="drop-down-menu-options">
            {selectedRegion && (
              <div className="drop-down-menu-option" onClick={() => handleClick(null)}>
                All
              </div>
            )}
            {selectedRegion != "Africa" && (
              <div className="drop-down-menu-option" onClick={() => handleClick("Africa")}>
                Africa
              </div>
            )}
            {selectedRegion != "Americas" && (
              <div className="drop-down-menu-option" onClick={() => handleClick("Americas")}>
                America
              </div>
            )}

            {selectedRegion != "Asia" && (
              <div className="drop-down-menu-option" onClick={() => handleClick("Asia")}>
                Asia
              </div>
            )}
            {selectedRegion != "Europe" && (
              <div className="drop-down-menu-option" onClick={() => handleClick("Europe")}>
                Europe
              </div>
            )}
            {selectedRegion != "Oceania" && (
              <div className="drop-down-menu-option" onClick={() => handleClick("Oceania")}>
                Oceania
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
