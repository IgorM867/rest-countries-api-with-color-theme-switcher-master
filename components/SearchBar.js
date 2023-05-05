import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="text-input">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </label>
      <input onChange={onChange} className="search-bar-input" id="text-input" placeholder="Search for a country..." />
    </div>
  );
}
