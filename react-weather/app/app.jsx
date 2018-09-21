var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var {Route, Router, IndexRoute, browserHistory} = require('react-router')
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Main from 'Main';
import getWeatherApp from 'reducers'
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import GetWeather from 'GetWeather';
import About from 'About';
import Examples from 'Examples';
import Carbon from 'Carbon';

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware) (createStore);
//
let store = createStoreWithMiddleware(getWeatherApp, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
        <Route path="/carbon" component={Carbon}/>
        <IndexRoute component={GetWeather}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
