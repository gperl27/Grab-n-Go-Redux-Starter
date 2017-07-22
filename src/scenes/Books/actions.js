import books from './api';

export const GET_BOOKS = 'addBooks';

export function getBooks() {
  return { type: GET_BOOKS, payload: books };
}
