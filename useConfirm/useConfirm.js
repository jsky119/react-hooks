import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const eraser = () => console.log("지우개 작동");
  const abort = () => console.log("지우개 작동 중지");
  const confirmDelete = useConfirm("정말로 지울까요?", eraser, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>지우개</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
