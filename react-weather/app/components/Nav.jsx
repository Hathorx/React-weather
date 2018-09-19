import React, {Component} from 'react';
var {browserHistory} = require('react-router');

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

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
          </ul>
        </div>
        <div className="top-bar-right">
          <label>
            <input placeholder="Search weather by city"/>
          </label>
          <button>Get Weather</button>
        </div>
        </header>
      </div>
    )
  }
}
