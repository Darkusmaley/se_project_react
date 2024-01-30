import "./Main.css";
import WeatherCard from "../Weathercard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[CurrentTemperatureUnit];
  const weatherUnitSwitch =
    CurrentTemperatureUnit === "F" ? temp : (temp * 5) / 9 + 32;
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
        weatherUnitSwitch={CurrentTemperatureUnit}
      />
      <section className="card__section" id="card-section">
        Today is {temp}
        {CurrentTemperatureUnit === "F" ? "°F" : "°C"} / You may want to wear:
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
