import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksSelector } from './selectors';
import * as actions from './actions';

import ListItems from './components/ListItems';

class Books extends Component {
  componentWillMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <ListItems books={books} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: booksSelector(state),
});

export default connect(mapStateToProps, actions)(Books);
