import "./TemperatureSwitch.css";
import React, { useContext } from "react";
import { currentTemperatureUnitContext } from "../context/CurrentTemperatureContext";
const SwitchTemp = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    currentTemperatureUnitContext
  );

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          className="switch__box"
          onChange={handleToggleSwitchChange}
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && " switch__active"
          }`}
        >
          C
        </p>
      </label>
    </>
  );
};

export default SwitchTemp;
