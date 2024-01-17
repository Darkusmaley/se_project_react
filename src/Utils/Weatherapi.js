// export default class WeatherAPI {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }
// }

// getCityName(name){
//   return fetch(`${this._baseUrl}`, {
//     method: "GET",
//     headers: this._headers,
//     body:JSON.stringify({
//       name:name,
//     })
//   }).then(this._checkResponse);
// };

// getCurrentTemp(){
//   return fetch(`${this._baseUrl}`, {
//     method: "GET",
//     headers: this._headers,
//     body:JSON.stringify({
//       name:name,
//     })
//   }).then(this._checkResponse);
// };

// defineWeatherType(){}

// _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error:${res.status}`);
//   };