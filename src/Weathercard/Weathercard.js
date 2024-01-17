import "../Weathercard/Weathercard.css"

const weatherOptions = [
  { url: require("../images/day/Sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/Storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/Fog.svg").default, day: true, type: "fog" },
  { url: require("../images/day/Rain.svg").default, day: true, type: "rain" },
  {
    url: require("../images/night/Sunny-night.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/Cloudy-night.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/Storm-night.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/Snow-night.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/Fog-night.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../images/night/Rain-night.svg").default,
    day: false,
    type: "rain",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <div><img src={imageSrcUrl} className="weather__image" /></div>
    </section>
  );
};

export default WeatherCard;
