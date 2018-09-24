import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendWeatherData} from 'Actions';
var {Link, IndexLink, browserHistory} = require('react-router');

class Examples extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.sendLink = this.sendLink.bind(this);
  }

//-----------------------------HTML for Examples tab----------------------------

  render() {
    return (
      <div className="examples">
        <h3>Examples</h3>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/' onClick={() => this.sendLink('Lille')}>Lille</Link>
          </li>
          <li>
            <Link to='/' onClick={() => this.sendLink('Rio, Brazil')}>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    )
  }

//-------------Function sending the value of the Link to the API----------------

  sendLink(a) {
    console.log(a, "test")
    if (a.lenght != 0) {
      this.props.dispatch(sendWeatherData(a))
    }
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Examples);
