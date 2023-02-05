import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        maxWidth: "fit-content",
        alignItems: "center",
      }}
    >
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
}
