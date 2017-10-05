/**
 *
 * Map
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { selectPlaces, selectPagination } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchNearby } from './actions';

export class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onReady = (mapProps, map) => {
    const { google } = this.props;
    this.props.onReady(mapProps, map, google);
  }

  render() {
    const { places } = this.props;
    return (
      <GoogleMap
        google={this.props.google}
        onReady={this.onReady}
        visible={false}
      >
        {places.map((place) => (
          <div key={place.id}>{place.name}</div>
        ))}
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired,
  google: PropTypes.any,
  places: PropTypes.array,
  pagination: PropTypes.any,
};

// const mapStateToProps = createStructuredSelector({
//   places: selectPlaces,
//   pagination: selectPagination,
// });

const mapStateToProps = (state) => ({
  places: selectPlaces(state),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onReady: (a, b, c) => dispatch(searchNearby(a, b, c)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'map', reducer });
const withSaga = injectSaga({ key: 'map', saga });

const withGoogleApi = GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
});

export default compose(
  withGoogleApi,
  withReducer,
  withSaga,
  withConnect,
)(Map);
