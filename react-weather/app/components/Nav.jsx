import React, {Component} from 'react';
import {sendWeatherData} from 'Actions';
import {connect} from 'react-redux';
var {browserHistory} = require('react-router');

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.sendWeather = this.sendWeather.bind(this);
  }

//--------------------HTML for the NavBar on top of each tab--------------------

  render() {
    return (
      <div>
        <header className="top-bar nav">
          <div className="top-bar-left">
          <ul className="menu style">
            <li onClick={() => browserHistory.push('/')}>
              <a>
                Get Weather
              </a>
            </li>
            <li onClick={() => browserHistory.push('/about')}>
              <a>
                About
              </a>
            </li>
            <li onClick={() => browserHistory.push('/examples')}>
              <a>
                Examples
              </a>
            </li>
            <li onClick={() => browserHistory.push('/carbon')}>
              <a>
                Location
              </a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <label>
            <input ref="weather" placeholder="Search weather by city"/>
          </label>
          <button onClick={() => this.sendWeather(this.refs.weather.value)}>Get Weather</button>
        </div>
        </header>
      </div>
    )
  }

//------------------Function sending the value input to the API-----------------

  sendWeather(a) {
    console.log(a, "test")
    if (a.lenght != 0) {
      this.props.dispatch(sendWeatherData(a))
      browserHistory.push('/')
    }
  }
}
