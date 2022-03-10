import React from "react";

export default function useCounter(initialCount = 10, step = 1) {
  const [count, setCount] = React.useState(initialCount);

  const decrement = () => setCount(Math.max(count - step, 0));
  const reset = () => setCount(initialCount);

  return [count, { decrement, reset }];
}
