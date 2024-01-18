import "./Main.css";
import defaultClothingItems from "../utils/constants";
import WeatherCard from "./Weathercard";
import ItemCard from "./ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filterCards = defaultClothingItems.filter((item) => {
    return item.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main app__section">
      <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp}°F / You may want to wear:
        <div className="card__items">
          {filterCards.map((clothes) => (
            <ItemCard x={clothes} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
