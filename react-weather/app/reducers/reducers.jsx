import {combineReducers} from 'redux';
import {SEND_INFORMATION_WEATHER, SEND_ERROR_MESSAGE, SEND_LOADING, SEND_INFORMATION_LOCATION} from 'Actions';

export function auth (state = {
  isFetching: false,
  isAuthenticated: false,
  admin:false,
  token: null
}, action) {
  switch (action.type) {
    default:
      return state
  };
};

export function weather(state = {
  name: '',
  temp: null,
  error: 0,
  isFetching: 0
}, action) {
  switch (action.type) {
    case SEND_INFORMATION_WEATHER:
      return Object.assign({}, state, {
        name: action.name,
        temp: action.temp,
        error: 0,
        isFetching: 0
      })
    case SEND_ERROR_MESSAGE:
      return Object.assign({}, state, {
        error: 1,
        isFetching: 0,
        name: null,
        temp: null
      })
    case SEND_LOADING:
      return Object.assign({}, state, {
        error: 0,
        isFetching: 1,
        name: action.name,
        temp: action.temp
      })
    default:
      return state
  }
}

export function location(state = {
  name: '',
  lat: null,
  lon: null,
  error: 0,
  isFetching: 0
}, action) {
  switch (action.type) {
    case SEND_INFORMATION_LOCATION:
      return Object.assign({}, state, {
        error: 0,
        isFetching: 0,
        lat: action.lat,
        lon: action.lon,
        name: action.name,
        temp: action.temp
      })
    case SEND_LOADING:
      return Object.assign({}, state, {
        error: 0,
        isFetching: 1,
        lat: action.lat,
        lon: action.lon,
        name: action.name,
        temp: action.temp
      })
    case SEND_ERROR_MESSAGE:
      return Object.assign({}, state, {
        error: 1,
        isFetching: 0,
        name: null,
        lat: null,
        lon: null,
        temp: null
      })
    default:
      return state
  }
}

const getWeatherApp = combineReducers({
  auth,
  weather,
  location
});

export default getWeatherApp;
