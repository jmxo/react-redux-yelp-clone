/**
*
* Rating
*
*/

import React from 'react';
import styled from 'styled-components';

const RatingIcon = () => (<span>★</span>);

const Sprite = styled.div`
  unicode-bidi: bidi-override;
  color: #404040;
  font-size: 25px;
  height: 25px;
  width: 100px;
  margin: 0 auto;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 lightgray;
`;

const TopDiv = styled.div`
  color: #48b5e9;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const BottomDiv = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
  color: #a2a2a2;
`;


class Rating extends React.Component {
  render() {
    const { percentage } = this.props;
    const style = {
      width: `${(percentage || 0) * 100}%`,
    };
    return (
      <Sprite>
        <TopDiv style={style}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </TopDiv>
        <BottomDiv>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </BottomDiv>
      </Sprite>
    );
  }
}

Rating.propTypes = {

};

export default Rating;
