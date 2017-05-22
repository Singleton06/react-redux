import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function authorReducer(state = InitialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
