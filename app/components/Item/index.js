/**
*
* Item
*
*/

import React from 'react';
import styled from 'styled-components';

import Rating from 'components/Rating';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
  padding: 10px;
  text-decoration: none;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.h4`
  flex: 2;
  &:hover {
    color: $highlight;
  }
`;

const StyledRating = styled(Rating)`
  text-align: right;
  flex: 1;
`;


class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { place } = this.props;
    return (
      <Wrapper>
        <Title>{place.name}</Title>
        <StyledRating percentage={place.rating / 5} />
      </Wrapper>
    );
  }
}

Item.propTypes = {

};

export default Item;
