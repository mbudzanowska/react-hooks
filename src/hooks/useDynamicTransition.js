import { useState, useEffect } from "react";

const useDynamicTransition = (delay, increment, length) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + increment) % length);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  return index;
};

export default useDynamicTransition;
