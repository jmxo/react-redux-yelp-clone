import { createSelector } from 'reselect';

/**
 * Direct selector to the map state domain
 */
const selectMapDomain = (state) => state.get('map');

/**
 * Other specific selectors
 */

export const selectPlaces = createSelector(
   selectMapDomain,
   (map) => map.get('places')
 );

export const selectPagination = createSelector(
   selectMapDomain,
   (map) => map.get('pagination')
 );


/**
 * Default selector used by Map
 */

const makeSelectMap = () => createSelector(
  selectMapDomain,
  (substate) => substate.toJS()
);

export default makeSelectMap;
export {
  selectMapDomain,
};
