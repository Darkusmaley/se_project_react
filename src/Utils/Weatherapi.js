//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const APIkey = "17375eac01fbce5c6c16dba5277ab727";
const latitude = 40.72;
const longitude = 73.35;

export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject("");
    }
  });
  return weatherApi;
};

// const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject("");
//   }
// };

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
