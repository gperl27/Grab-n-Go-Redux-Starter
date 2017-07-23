import {
  hello,
} from './actions';

const initialState = {
  hello: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case hello:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
}
