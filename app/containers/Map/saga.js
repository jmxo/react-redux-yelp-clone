import { take, call, put, select, fork } from 'redux-saga/effects';
import { searchNearby as searchNearbyUtil } from 'utils/googleApiHelpers';
import * as actions from './actions';

export function* searchNearby() {
  while (true) {
    const action = yield take(actions.searchNearby);
    const { payload: { map, google } } = action;

    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe'],
    };

    try {
      const response = yield call(searchNearbyUtil, google, map, opts);
      yield put(actions.receiveResponse(response));
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fork(searchNearby),
  ];
}
