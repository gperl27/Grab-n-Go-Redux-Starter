
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import booksReducer from './scenes/Books/reducers';

const rootReducer = combineReducers({
  form,
  books: booksReducer,
});

export default rootReducer;
