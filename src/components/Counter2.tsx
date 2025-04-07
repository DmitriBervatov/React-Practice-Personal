import { useState } from "react";

const Counter2 = ({ render }: any) => {
  const [count, setCount] = useState(10);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {render(count)}
    </div>
  );
};

export default Counter2;
