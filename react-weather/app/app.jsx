var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var {Route, Router, IndexRoute, browserHistory} = require('react-router')
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Main from 'Main';
import megalitheAdmin from 'reducers'
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import GetWeather from 'GetWeather';
import About from 'About';
import Examples from 'Examples';

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware) (createStore);
//
let store = createStoreWithMiddleware(megalitheAdmin, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={GetWeather}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
