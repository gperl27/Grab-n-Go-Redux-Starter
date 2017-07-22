import React from 'react';
import { connect } from 'react-redux';
import { allBooks } from './selectors';

import ListItems from './components/ListItems';

const Books = props => (
  <ListItems books={props.books} />
);

const mapStateToProps = state => ({
  books: allBooks(state),
});

export default connect(mapStateToProps)(Books);
