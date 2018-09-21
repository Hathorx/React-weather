import axios from 'axios';
export const SEND_INFORMATION_WEATHER = 'SEND_INFORMATION_WEATHER';
export const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
export const SEND_LOADING = 'SEND_LOADING';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5a77b4ffe6626b341cd9a9ae6d0b7518&units=metric';

var sendInformationWeather = (creds) => {
  return {
    type: SEND_INFORMATION_WEATHER,
    temp: creds.main.temp,
    name: creds.name
  }
}

var sendErrorMessage = () => {
  return {
    type: SEND_ERROR_MESSAGE
  }
}

var sendLoading = () => {
  return {
    type: SEND_LOADING
  }
}

export function sendWeatherData(a) {
  var requestUrl = `${BASE_URL}&q=${a}`;
  return dispatch => {
    dispatch(sendLoading())
    setTimeout(function() {
      axios.get(requestUrl)
      .then(response => {
          console.log(response, 'response')
          dispatch(sendInformationWeather(response.data))
      }).catch(err => {
        dispatch(sendErrorMessage())
      })
    }, 500);
}
}
