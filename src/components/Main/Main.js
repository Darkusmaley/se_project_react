import "./Main.css";
import defaultClothingItems from "../../utils/constants";
import WeatherCard from "../Weathercard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import { useMemo, useContext } from "react";
import { currentTemperatureUnitContext } from "../context/CurrentTemperatureContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filterCards = defaultClothingItems.filter((item) => {
    return item.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main app__section">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}°F / You may want to wear:
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
