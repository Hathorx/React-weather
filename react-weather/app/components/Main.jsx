import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render () {

    return (
      <div>
        <header>
          <h2>Boilerplate</h2>
        </header>
      </div>
    )
  }

}


function mapStateToProps(state) {
};

export default connect(mapStateToProps) (Main);
