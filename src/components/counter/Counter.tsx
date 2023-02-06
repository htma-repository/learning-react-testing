import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [numberValue, setNumberValue] = useState<number>(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const numberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(+event.target.value);
  };

  const numberSetHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!numberValue || numberValue === 0) {
      return;
    }

    if (numberValue) {
      setCount((prev) => prev + +numberValue);
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
        <button onClick={incrementHandler}>Increment</button>
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
