import React, { Component } from 'react';
import { connect } from 'react-redux';
import { helloSelector } from './selectors';
import * as actions from './actions';

class hello extends Component {
  render() {
    const { hello } = this.props;

    return (
      <div>
        hello container
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hello: Selector(state),
});

export default connect(mapStateToProps, actions)(hello);
