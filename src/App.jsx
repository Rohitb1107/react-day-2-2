import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-card">
        <h1>Counter : {count}</h1>
        <div className="btn-div">
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count - 1)}>Remove</button>
        </div>
        <button onClick={() => setCount(count * 2)}>Double</button>
      </div>
    </>
  );
}

export default App;
