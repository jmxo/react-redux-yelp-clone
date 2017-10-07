/**
*
* Map
*
*/

import React from 'react';
import { Map as GoogleMap } from 'google-maps-react';
// import styled from 'styled-components';


class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <GoogleMap google={this.props.google} />
    );
  }
}

Map.propTypes = {

};

export default Map;
