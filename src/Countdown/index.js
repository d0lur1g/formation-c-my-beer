import { number } from "prop-types";
import React from "react";

import "./style.css";

export default function Countdown({ initialCount = 100, step = 1 }) {
  const [count, setCount] = React.useState(initialCount);

  const decrement = () => setCount(Math.max(count - step, 0));
  const reset = () => setCount(initialCount);

  return (
    <>
      <p className="countdown-number">{count}</p>
      <button className="countdown-button" onClick={decrement}>
        Countdown
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

Countdown.propTypes = {
  initialCount: number,
  step: number,
};
