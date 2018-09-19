import {combineReducers} from 'redux';
import {SEND_INFORMATION_WEATHER} from 'Actions';

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
    default:
      return state
  }
}

const getWeatherApp = combineReducers({
  auth,
  weather
});

export default getWeatherApp;
