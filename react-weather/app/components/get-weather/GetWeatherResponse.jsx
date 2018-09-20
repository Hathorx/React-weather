import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

render() {
  return (
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
  )
}
