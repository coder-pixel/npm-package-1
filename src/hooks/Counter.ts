import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    console.log("sassuikc");
    setCount(count - 1);
  };

  const incrementByTwo = () => {
    setCount(count + 2);
  };

  return { count, increment, decrement, incrementByTwo };
};

export { useCounter };
