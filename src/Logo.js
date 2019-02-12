import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: inline-block;
    width: 107px;
    float: left;
`

const Logo = (props) => (
  //html
    <LogoWrapper>
        <a href="http://detroitmi.gov" title="Home" rel="home">
            <img src="https://detroitmi.gov/themes/custom/detroitmi/logo.png" alt="Home" />
        </a>
    </LogoWrapper>
);

export default Logo;