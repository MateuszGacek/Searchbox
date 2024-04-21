const tabTitle = (
  inputValue: string,
  newColorsList: string[],
  defaultTabTitle: string
): void => {
  const newTabTitle: string = newColorsList.reduce(
    (accumulator, currentValue) => {
      if (currentValue.length < accumulator.length) {
        return accumulator;
      } else {
        return currentValue;
      }
    },
    ""
  );

  if (inputValue !== "") {
    document.title = newTabTitle;
    if (!newTabTitle.includes(inputValue)) {
      document.title = "Houston we have a problem";
    }
  }

  if (inputValue === "") document.title = defaultTabTitle;
};

export default tabTitle;
