import { createSelector } from 'reselect';

const helloSelector = state => state.hello.hello;

export {
  helloSelector,
};
