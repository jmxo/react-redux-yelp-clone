/*
 *
 * Map reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVE_RESPONSE,
} from './constants';

const initialState = fromJS({
  places: [],
  pagination: {},
});

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RESPONSE:
      return state
        .set('places', action.payload.response);
    default:
      return state;
  }
}

export default mapReducer;
