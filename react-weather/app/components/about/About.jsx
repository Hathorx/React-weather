import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

class About extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="about">
        <h3>About</h3>
        <p>This is a weather application built on react, i've built this for the complete web app developper course.</p>
        <p>Here are some of the tools i used</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
            <p>- This was the Javascript Framework used</p>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
            <p>- i used openWeatherMap to search for Weather data by city name</p>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(About);
