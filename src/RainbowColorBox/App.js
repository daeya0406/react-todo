import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

// 상태, input, onchange - 상태 조작, props, colorbox
function App() {
  const [color, setColor] = useState("");
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
  ];

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={color} onChange={handleChange} />
      </div>
      <ResetButton onReset={() => setColor("")} />
      <ColorBox color={color} />
      <p>{!rainbowColors.includes(color) ? "무지개색이 아닙니다." : ""}</p>
    </div>
  );
}

export default App;
