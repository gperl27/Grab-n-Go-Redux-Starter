import { createSelector } from 'reselect';

const booksSelector = state => state.books;

const allBooks = () => createSelector(
  booksSelector,
);

export {
  booksSelector,
  allBooks,
};
