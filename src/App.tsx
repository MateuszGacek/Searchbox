import { useState } from "react";
import { colorsData } from "./store/colorsData";
import ColorsList from "./components/ColorsList";
import SearchInput from "./components/SearchInput";
import tabTitle from "./utils/tabTitle";

const App: React.FC = () => {
  const [colorsList, setColorsList] = useState<string[]>(colorsData);
  const [textInput, setTextInput] = useState<string>("");
  const defaultTabTitle: string = "Searchbox";

  const searchColorHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;

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

  const checkColorHandler = (color: string): void => {
    if (color === textInput) {
      setColorsList(["green"]);
    }
  };

  const clearInputHandler = (): void => {
    setColorsList(colorsData);
    setTextInput("");
    tabTitle("", [], defaultTabTitle);
  };

  return (
    <div>
      <SearchInput
        onChange={searchColorHandler}
        onClick={clearInputHandler}
        clearInput={textInput}
      />
      <ColorsList colors={colorsList} onClick={checkColorHandler} />
    </div>
  );
};

export default App;
