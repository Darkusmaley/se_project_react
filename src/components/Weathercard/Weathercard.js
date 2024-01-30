import "./Weathercard.css";
import { weatherOptions } from "../../utils/constants";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}
        {currentTemperatureUnit === "F" ? "°F" : "°C"}
      </div>
      <div>
        <img src={imageSrcUrl} className="weather__image" alt="weather type" />
      </div>
    </section>
  );
};

export default WeatherCard;
