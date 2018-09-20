import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');
import {sendWeatherData} from 'Actions';

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
        { this.props.name ?
            <p>Dans la ville de {this.props.name}</p>
          :
            ''
        }

        { this.props.temp ?
            <p>il fait {this.props.temp} °C</p>
          :
            ''
        }

        { this.props.error ?
            <p>La ville que vous recherchez n'existe pas</p>
          :
            ''
        }

        { this.props.isFetching ?
            <img src={require('../../../img/Rolling-1s-200px.svg')}/>
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
