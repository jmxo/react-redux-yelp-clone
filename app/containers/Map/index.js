/**
*
* Map
*
*/

import React from 'react';
import { Map as GoogleMap, Marker } from 'google-maps-react';
// import styled from 'styled-components';


class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function

  _renderMarkers() {
    if (!this.props.places) {
      return;
    }
    return this.props.places.map((p) => (<Marker
      key={p.id}
      name={p.id}
      place={p}
      label={p.name}
      onClick={this.props.onMarkerClick.bind(this)}
      map={this.props.map}
      position={p.geometry.location}
    />));
  }

  _renderChildren() {
    const { children } = this.props;

    if (React.Children.count(children) > 0) {
      return React.Children.map(children, (c) => React.cloneElement(c, this.props, {
        map: this.props.map,
        google: this.props.google,
      }));
    }
    return this._renderMarkers();
  }

  render() {
    return (
      <GoogleMap
        google={this.props.google}
        map={this.props.map}
      >
        {this._renderChildren()}
      </GoogleMap>
    );
  }
}

Map.propTypes = {

};

const identity = (...a) => a;

Map.defaultProps = {
  onMarkerClick: identity
}

export default Map;
