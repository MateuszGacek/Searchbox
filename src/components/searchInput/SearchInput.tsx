import { SearchInputProps } from "../../models/SearchInputProps";
import "./searchInput.css";

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  onClick,
  clearInput,
}) => {
  return (
    <div className="searchbox-contener">
      <form>
        <label htmlFor="search-input">type color: </label>
        <input id="search-input" onChange={onChange} value={clearInput} />
        <button type="button" onClick={onClick}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
