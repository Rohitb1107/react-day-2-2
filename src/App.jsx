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
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
    </>
  );
}

export default App;
