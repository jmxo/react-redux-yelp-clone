/**
 *
 * Map
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import { Route, Redirect, withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Map from 'containers/Map';
import { selectPlaces } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchNearby } from './actions';

const StyledMap = styled(GoogleMap)`
  overflow-y: scroll;
  display: flex;
  margin: 0;
  padding: 0px;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  flex: 2;
  top: 80px;
`;

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onReady = (mapProps, map) => {
    const { google } = this.props;
    this.props.onReady(mapProps, map, google);
  }

  onMarkerClick = (item) => {
    const { place } = item;
    this.props.history.push(`/detail/${place.place_id}`);
  }

  render() {
    const { places } = this.props;
    return (
      <StyledMap
        google={this.props.google}
        onReady={this.onReady}
        visible={false}
      >
        <Header />
        <Sidebar places={places} />
        <Content>
          {/* <Redirect path="/" to="/map" /> */}
          <Route
            path="/map"
            render={() =>
              (<Map
                places={places}
                google={this.props.google}
                map={this.props.map}
                onMarkerClick={this.onMarkerClick}
              />
              )
            }
          />
          <Route path="/detail/:placeId" render={(props) => <span>{`Detail Page: ${props.match.params.placeId}`}</span>} />
        </Content>
      </StyledMap>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired,
  google: PropTypes.any,
  places: PropTypes.any,
  pagination: PropTypes.any,
};

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
  withRouter,
  withConnect,
)(Home);
