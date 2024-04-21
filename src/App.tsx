import { useState } from "react";
import { colorsData } from "./store/colorsData";
import ColorsList from "./components/colorsList/ColorsList";
import SearchInput from "./components/searchInput/SearchInput";
import tabTitle from "./utils/tabTitle";

const App: React.FC = () => {
  const [colorsList, setColorsList] = useState<string[]>(colorsData);
  const [textInput, setTextInput] = useState("");
  const defaultTabTitle: string = "Searchbox";

  const searchColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const newColorsList: string[] = colorsData.filter((color) => {
      if (color.includes(inputValue)) {
        return color;
      }
      return false;
    });

    tabTitle(inputValue, newColorsList, defaultTabTitle);
    setColorsList(newColorsList);
    setTextInput(inputValue);
  };

  const checkColor = (color: string) => {
    if (color === textInput) {
      setColorsList(["green"]);
    }
  };

  const clearInput = () => {
    setColorsList(colorsData);
    setTextInput("");
    tabTitle("", [], defaultTabTitle);
  };

  return (
    <div>
      <SearchInput
        onChange={searchColor}
        onClick={clearInput}
        clearInput={textInput}
      />
      <ColorsList colors={colorsList} onClick={checkColor} />
    </div>
  );
};

export default App;
