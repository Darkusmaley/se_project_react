import "./Main.css";
import defaultClothingItems from "../Utils/Constants";
import WeatherCard from "../Weathercard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main app__section">
      <WeatherCard day={true} type="cloudy" weatherTemp="75°F" />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((clothes) => (
            <ItemCard x={clothes} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
