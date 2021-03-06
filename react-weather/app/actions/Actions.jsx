import axios from 'axios';
export const SEND_INFORMATION_WEATHER = 'SEND_INFORMATION_WEATHER';
export const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
export const SEND_LOADING = 'SEND_LOADING';
export const SEND_INFORMATION_LOCATION = 'SEND_INFORMATION_LOCATION';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5a77b4ffe6626b341cd9a9ae6d0b7518&units=metric';

//-----Function sending temp and name of the GetWeather input after request-----

var sendInformationWeather = (creds) => {
  return {
    type: SEND_INFORMATION_WEATHER,
    temp: creds.main.temp,
    name: creds.name
  }
}

//----Function sending lat, long... of the Location tab input after request-----

var sendInformationLocation = (creds) => {
  return {
    type: SEND_INFORMATION_LOCATION,
    lat: creds.coord.lat,
    lon: creds.coord.lon,
    name: creds.name,
    temp: creds.main.temp
  }
}

//------------Function sending an error message in case of bad input------------

var sendErrorMessage = () => {
  return {
    type: SEND_ERROR_MESSAGE
  }
}

//---------Function calling a loading before each informations display----------

var sendLoading = () => {
  return {
    type: SEND_LOADING
  }
}

//----------Function requesting the API with the GetWeather input value---------

export function sendWeatherData(a, b) {
  var requestUrl = `${BASE_URL}&q=${a}`;
  return dispatch => {
    dispatch(sendLoading())
    setTimeout(function() {
      axios.get(requestUrl)
      .then(response => {
      if (b == 1) {
        dispatch(sendCarbonData(a, response.data.coord.lat, response.data.coord.lon))
      } else {
        dispatch(sendInformationWeather(response.data))
      }
      }).catch(err => {
        dispatch(sendErrorMessage())
      })
    }, 500);
  }
}

//-----------Function requesting the API with the Location input value----------

export function sendCarbonData(a, b, c) {
  var d = new Date();
  var n = d.toISOString();
  const BASE_URL2 = `https://api.openweathermap.org/data/2.5/weather?lat=${b}&lon=${c}&appid=17122ceb270247a450671412fd4b86e2`;
  var requestUrl2 = `${BASE_URL2}`;

  return dispatch => {
    dispatch(sendLoading())
    setTimeout(function() {
      axios.get(requestUrl2)
      .then(response => {
        console.log(response, 'response')
        dispatch(sendInformationLocation(response.data))
        console.log(BASE_URL2)
      }).catch(err => {
        dispatch(sendErrorMessage())
      })
    }, 500);
  }
}
