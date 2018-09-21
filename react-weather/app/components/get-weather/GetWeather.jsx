import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');
import {sendWeatherData} from 'Actions';
import GetWeatherResponse from 'GetWeatherResponse';

class GetWeather extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.sendInformation = this.sendInformation.bind(this);
  }

  render() {
    return (
      <div className="get-weather">
        <h4>Get Weather</h4>
        <label>
          <input ref="city" placeholder="Enter City Name"/>
        </label>
        <button onClick={() => this.sendInformation(this.refs.city.value)}>Get Weather</button>

        { this.props.name || this.props.temp || this.props.error || this.props.isFetching ?
            <GetWeatherResponse
              name={this.props.name}
              temp={this.props.temp}
              error={this.props.error}
              isFetching={this.props.isFetching}
            />
          :
            ''
        }
      </div>
    )
  }

  sendInformation(a) {
    console.log(a, "test")
    if (a.lenght != 0) {
      this.props.dispatch(sendWeatherData(a))
    }
  }
}

function mapStateToProps(state) {
  const {weather} = state;
  const {name, temp, error, isFetching} = weather;
  return {
    name,
    temp,
    error,
    isFetching
  }
}

export default connect(mapStateToProps)(GetWeather);
