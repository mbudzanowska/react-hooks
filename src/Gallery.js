import { useState } from "react";
import PICTURES from "./data/pictures";
import useDynamicTransition from "./hooks/useDynamicTransition";

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minIncrement = 1;

const Gallery = () => {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition(delay, increment, PICTURES.length);

  const updateDelay = (event) => {
    const delay = +event.target.value * SECONDS;
    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = (event) => {
    const increment = +event.target.value;

    setIncrement(increment < minIncrement ? minIncrement : increment);
  };

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>
          Gallery transition delay (seconds)
          <input
            min={minimumDelay / SECONDS}
            value={delay / SECONDS}
            type="number"
            onChange={updateDelay}
          ></input>
        </div>
        <div>
          Gallery increment:
          <input
            min={minIncrement}
            value={increment}
            type="number"
            onChange={updateIncrement}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
