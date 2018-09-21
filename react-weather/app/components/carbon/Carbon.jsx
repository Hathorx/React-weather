import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendWeatherData} from 'Actions';
import CarbonResponse from 'CarbonResponse';
var {Link, IndexLink, browserHistory} = require('react-router');

class Carbon extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.sendInformation = this.sendInformation.bind(this);
  }

  render() {
    return (
      <div className="carbon">
        <h4>Get Latitude and Longitude</h4>
          <label>
            <input ref="city" placeholder="Enter City Name"/>
          </label>
          <button onClick={() => this.sendInformation(this.refs.city.value)}>Get Location</button>
          { this.props.name || this.props.lat || this.props.lon || this.props.error || this.props.isFetching || this.props.temp ?
              <CarbonResponse
                lat={this.props.lat}
                lon={this.props.lon}
                name={this.props.name}
                error={this.props.error}
                isFetching={this.props.isFetching}
                temp={this.props.temp}
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
      this.props.dispatch(sendWeatherData(a, 1))
    }
  }
}

function mapStateToProps(state) {
  const {location} = state;
  const {name, lat, lon, error, isFetching, temp} = location;
  return {
    lat,
    lon,
    error,
    name,
    isFetching,
    temp
  }
}

export default connect(mapStateToProps)(Carbon);
