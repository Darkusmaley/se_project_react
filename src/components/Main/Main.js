import "./Main.css";
import WeatherCard from "../Weathercard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import { useMemo, useContext } from "react";
import { currentTemperatureUnitContext } from "../../context/CurrentTemperatureContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const weatherUnitSwitch =
    currentTemperatureUnit === "F" ? temp : (temp * 5) / 9 + 32;
  const weatherType = useMemo(() => {
    if (weatherUnitSwitch >= 86) {
      return "hot";
    } else if (weatherUnitSwitch >= 66 && weatherUnitSwitch <= 85) {
      return "warm";
    } else if (weatherUnitSwitch <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filterCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main app__section">
      <WeatherCard
        day={true}
        type="cloudy"
        weatherTemp={temp}
        weatherUnitSwitch={currentTemperatureUnit}
      />
      <section className="card__section" id="card-section">
        Today is {temp}
        {currentTemperatureUnit === "F" ? "°F" : "°C"} / You may want to wear:
        <div className="card__items">
          {filterCards.map((clothes) => (
            <ItemCard
              item={clothes}
              onSelectCard={onSelectCard}
              key={clothes._id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
