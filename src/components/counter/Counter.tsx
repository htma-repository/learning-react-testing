import { useState, useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";

export default function Counter() {
  const [numberValue, setNumberValue] = useState<number>(0);
  const { count, setCount, increment } = useContext(CounterContext);

  const numberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(+event.target.value);
  };

  const numberSetHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!numberValue || numberValue === 0) {
      return;
    }

    if (numberValue) {
      setCount((prevState) => prevState + +numberValue);
    }

    setNumberValue(0);
  };

  const resetHandler = () => {
    setCount(0);
    setNumberValue(0);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        maxWidth: "fit-content",
        alignItems: "center",
      }}
    >
      <h1>{count}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={increment}>Increment</button>
        <form onSubmit={numberSetHandler}>
          <input
            type="number"
            onChange={numberChangeHandler}
            value={numberValue}
          />
          <button>Set number</button>
        </form>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </section>
  );
}
