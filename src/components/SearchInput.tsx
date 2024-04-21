import { searchInputProps } from "../models/searchInputProps";
import "./SearchInput.css";

const SearchInput: React.FC<searchInputProps> = ({
  onChange,
  onClick,
  clearInput,
}) => {
  return (
    <div className="searchbox-contener">
      <form>
        <label>type color: </label>
        <input onChange={onChange} value={clearInput} />
        <button type="button" onClick={onClick}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
