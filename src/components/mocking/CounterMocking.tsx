import React from "react";

interface CounterMockingProps {
  count: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function CounterMocking({
  count,
  onIncrement,
  onDecrement,
}: CounterMockingProps) {
  return (
    <section>
      <h1>Counter Mocking</h1>
      <p>{count}</p>
      {onIncrement && <button onClick={() => onIncrement()}>Increment</button>}
      {onDecrement && <button onClick={() => onDecrement()}>Decrement</button>}
    </section>
  );
}
