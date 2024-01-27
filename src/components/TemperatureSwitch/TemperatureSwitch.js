import "./TemperatureSwitch.css";
import React from "react";
import { useState } from "react";
const SwitchTemp = () => {
  const [checked, setChecked] = useState("F");

  const handleTempChange = () => {
    if (checked === "C") setChecked("F");
    if (checked === "F") setChecked("C");
  };
  console.log(checked);
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          className="switch__box"
          onChange={handleTempChange}
        />
        <span
          className={
            checked === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p className={`switch__temp-F ${checked === "F" && "switch__active"}`}>
          F
        </p>
        <p className={`switch__temp-C ${checked === "C" && " switch__active"}`}>
          C
        </p>
      </label>
    </>
  );
};

export default SwitchTemp;
