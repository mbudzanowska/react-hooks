import { useState } from "react";
import MATRIX_FRAMES from "./data/matrix";
import useDynamicTransition from "./hooks/useDynamicTransition";

const minimumDelay = 10;
const minimumIncrement = 1;

const Matrix = () => {
  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition(delay, increment, MATRIX_FRAMES.length);

  const updateDelay = (event) => {
    const delay = +event.target.value;
    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = (event) => {
    const increment = +event.target.value;
    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };

  return (
    <div className="Matrix">
      <img src={MATRIX_FRAMES[index]} alt="matrix-animation" />
      <div className="multiform">
        <div>
          Frame transition delay (miliseconds)
          <input
            min={minimumDelay}
            value={delay}
            type="number"
            onChange={updateDelay}
          ></input>
        </div>
        <div>
          Frame increment:
          <input
            min={minimumIncrement}
            value={increment}
            type="number"
            onChange={updateIncrement}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
