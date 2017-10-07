/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: #48b5e9;
  width: 100%;
  padding: 0 25px;
  height: 80px;
  line-height: 80px;
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: #fff;
  line-height: 40px;
  h1 { font-size: 28px; }
`;

// const Section = styled.section`
//   position: absolute;
//   top: 0px;
//   right: 25px;
// `;


function Header() {
  return (
    <Wrapper>
      <StyledLink to="/"><h1>React Redux Yelp Clone</h1></StyledLink>
    </Wrapper>
  );
}

Header.propTypes = {

};

export default Header;
