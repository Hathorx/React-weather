import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

export default class CarbonResponse extends Component{
  constructor() {
    super();
    this.state = {
    };
  }

//------------------HTML for Location tab after the API request-----------------

  render() {
    return (
      <div>
        { this.props.name ?
            <p>La ville de {this.props.name}</p>
          :
            ''
        }

        { this.props.lat ?
            <p> a pour latitude: {this.props.lat}</p>
          :
            ''
        }

        { this.props.lon ?
            <p>et pour longitude: {this.props.lon}</p>
          :
            ''
        }

        { this.props.temp ?
            <p>Il y fait actuellement {this.props.temp} °K</p>
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
