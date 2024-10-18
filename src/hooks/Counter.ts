import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev++);
  };

  const decrement = () => {
    setCount((prev) => prev--);
  };

  return { count, increment, decrement };
};

export { useCounter };
