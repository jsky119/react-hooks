import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const DecrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>더하기</button>
      <button onClick={DecrementItem}>빼기</button>
    </div>
  );
};

export default App;
