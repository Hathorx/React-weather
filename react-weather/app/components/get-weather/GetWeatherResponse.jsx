import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

export default class GetWeatherResponse extends Component{
  constructor() {
    super();
    this.state = {
    };
  }

//-------------------HTML for GetWeather tab after the API request--------------

  render() {
    return (
      <div>
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
}
