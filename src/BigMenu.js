import React from 'react';
import styled from 'styled-components';

const BigMenuWrapper = styled.div`
    left: 3px;
    width: 57px;
    height: 57px;
    grid-area: bigmenu;

    .big-menu{
	    background: #feb70d;
	    color: #18252a;
	    transition: transform 250ms ease;
	    cursor: pointer;
	    z-index: 200;
	    font-size: 10px;
	    letter-spacing: -.13em;
	    padding: 13px;
		display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: bold;
		font-size: 10px;
	}
	.big-menu span{
		position: relative;
	    display: block;
	    width: 100%;
	    height: 3px;
	    margin-top: 3px;
	    background-color: #18252a;
	    float: left;
	    transform-origin: center center;
	    transition: transform 250ms ease;
	    z-index: 200;
	}
    @media (max-width: 588px) {
        
    }
`

const BigMenu = (props) => (
  //html
    <BigMenuWrapper>
        <label for="big-menu" className="big-menu">
            <span></span>
            <span></span>
            <span></span>
                MENU
        </label>
    </BigMenuWrapper>
);

export default BigMenu;