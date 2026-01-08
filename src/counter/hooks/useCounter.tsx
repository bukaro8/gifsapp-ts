import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);
  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleSubtraction = () => {
    setCounter((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };
  return {
    //Properties
    counter,
    //Methods /Actions
    handleAdd,
    handleSubtraction,
    handleReset,
  };
};
