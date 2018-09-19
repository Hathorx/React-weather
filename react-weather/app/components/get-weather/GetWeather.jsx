import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

class GetWeather extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="get-weather">
        <h4>Get Weather</h4>
        <label>
          <input placeholder="Enter City Name"/>
        </label>
        <button>Get Weather</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(GetWeather);
