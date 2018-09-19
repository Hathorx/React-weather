import axios from 'axios';
export const SEND_INFORMATION_WEATHER = 'SEND_INFORMATION_WEATHER';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5a77b4ffe6626b341cd9a9ae6d0b7518&units=metric';

var sendInformationWeather = (creds) => {
  return {
    type: SEND_INFORMATION_WEATHER,
    temp: creds.main.temp,
    name: creds.name
  }
}

export function sendWeatherData(a) {
  var requestUrl = `${BASE_URL}&q=${a}`;
  return dispatch => {
    axios.get(requestUrl)
    .then(response => {
        console.log(response, 'response')
        dispatch(sendInformationWeather(response.data))
    }).catch(err => console.log('ERROR', err))
}
}
