import React, {Component} from 'react';
import {connect} from 'react-redux';
var {Link, IndexLink, browserHistory} = require('react-router');

class Examples extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="examples">
        <h3>Examples</h3>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to = "/">Lille</Link>
          </li>
          <li>
            <Link to = "/">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Examples);
