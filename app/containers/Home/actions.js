/*
 *
 * Map actions
 *
 */

import {
  SEARCH_NEARBY,
  RECEIVE_RESPONSE,
} from './constants';

export function searchNearby(mapProps, map, google) {
  return {
    type: SEARCH_NEARBY,
    payload: {
      mapProps,
      map,
      google,
    },
  };
}

export function receiveResponse(response) {
  return {
    type: RECEIVE_RESPONSE,
    payload: {
      response,
    },
  };
}
