import {combineReducers} from 'redux';

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

const megalitheAdmin = combineReducers({
  auth
});

export default megalitheAdmin;
