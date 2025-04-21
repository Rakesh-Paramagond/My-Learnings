import { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Counter;
