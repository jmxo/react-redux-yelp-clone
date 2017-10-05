
import { fromJS } from 'immutable';
import mapReducer from '../reducer';

describe('mapReducer', () => {
  it('returns the initial state', () => {
    expect(mapReducer(undefined, {})).toEqual(fromJS({}));
  });
});
