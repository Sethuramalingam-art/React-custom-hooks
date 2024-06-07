import { useState } from "react";
import "./App.css";
import usePrevious from "./usePrevious";

function App() {
  const [count, setCount] = useState(0);

  const prevValue = usePrevious({ value: count });

  return (
    <>
      <span>Use Previous State</span>
      <span>
        cur: {count} prev: {prevValue}
      </span>
      <span>Increment</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
