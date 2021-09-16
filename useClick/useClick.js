import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      // componentDidMount, componentDidUpdate 시 호출
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // componentWillUnmount 시 호출
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // []로 매번 update 될 때마다 eventListener가 추가되는 것을 방지, componentDidMount 시 단 한번만 실행한다.
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
