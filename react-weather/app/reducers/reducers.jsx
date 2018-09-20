import {combineReducers} from 'redux';
import {SEND_INFORMATION_WEATHER, SEND_ERROR_MESSAGE, SEND_LOADING} from 'Actions';

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

const getWeatherApp = combineReducers({
  auth,
  weather
});

export default getWeatherApp;
