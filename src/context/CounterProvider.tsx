import { useState, createContext } from "react";

import { Counter } from "../types/types.types";

interface CounterProps {
  children: React.ReactNode;
}

export const CounterContext = createContext<Counter>({} as Counter);

const CounterProvider = ({ children }: CounterProps) => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  const value = {
    count,
    setCount,
    increment: incrementHandler,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
