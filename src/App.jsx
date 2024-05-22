import { useContext, useState } from "react";
import "./App.css";
import { countContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        <Count></Count>
      </countContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <>
      <CountRender></CountRender>
      <Buttons></Buttons>
    </>
  );
}

function CountRender() {
  const { count } = useContext(countContext);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}

function Buttons() {
  const { count, setCount } = useContext(countContext);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
