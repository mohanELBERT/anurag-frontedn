import { useState } from "react";

function Counter() {
  // useState
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1)
  }
  return (
    <div>
      The count value is {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
