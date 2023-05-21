import React, { useState } from "react";
import "./fontSize.css";
export default function FontSize() {
  const [size, setSize] = useState(12);
  const handleChange = (isInc) => {
    if (isInc) {
      setSize(size + 1);
    } else {
      if (size === 1) {
        return;
      }
      setSize(size - 1);
    }
  };
  return (
    <div className="fontCont">
      <div
        onClick={() => {
          handleChange(false);
        }}
      >
        <span class="material-icons-outlined imgCustom">remove</span>
      </div>
      <input type="number" value={size} className="fontSizeInput"></input>
      <div
        onClick={() => {
          handleChange(true);
        }}
      >
        <span class="material-icons-outlined imgCustom">add</span>
      </div>
    </div>
  );
}
