import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';

class Main extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

//--------------------------------HTML for the app------------------------------

  render () {
    return (
      <div>
        <Nav
          dispatch={this.props.dispatch}
          />
        {this.props.children}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps) (Main);
