import { createSelector } from 'reselect';

const booksSelector = state => state.books.books;

// const allBooks = () => createSelector(
//   booksSelector,
//   books => books,
// );

export {
  booksSelector,
};
