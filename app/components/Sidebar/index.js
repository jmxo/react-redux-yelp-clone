/**
*
* Sidebar
*
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Item from 'components/Item';

const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  top: 80px;
  left: 0;
  // overflow: hidden;
  position: relative;
  flex: 1;
  z-index: 0;
  `;

const Heading = styled.div`
  flex: 1;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
`;

const H1 = styled.h1`
  font-size: 1.8em;
`;

const Listing = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 60px;
  margin: 0;
`;


class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { places, history } = this.props;
    return (
      <Wrapper>
        <Heading>
          <H1>Restaurants</H1>
        </Heading>
        <Listing>
          {places.map((place) => (
            <Item
              key={place.id}
              place={place}
              onClick={() => {
                history.push(`/detail/${place.id}`);
              }}
            />
            ))}
        </Listing>
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {

};

export default withRouter(Sidebar);
