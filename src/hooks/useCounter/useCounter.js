import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCuonter] = useState(initialValue);

  const increment = (value = 1) => {
    setCuonter(counter + value);
  };

  const decrement = (value = -1) => {
    setCuonter(counter - value);
  };
  const reset = () => {
    setCuonter(initialValue);
  };

  return {
    counter,
    decrement,
    reset,
    increment,
  };
};
