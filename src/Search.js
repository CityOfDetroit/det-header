import React from 'react';
import styled from 'styled-components';
import BigMenu from './BigMenu.js';

const SearchWrapper = styled.div`    
    -webkit-appearance: none;
    grid-area: search;

    form{
        display: inline-flex;
        width: 90%;
        margin-right: 3px;
        vertical-align: top;
    }
    
    input{
		width: 100%;
		border: 2px solid #004445;
		height: 52px;
		font-size: 30px;
		font-family: 'Montserrat';
        text-align: center;
         
        &:placeholder-shown{
            font-weight: 900;
            color: #004445;
        }
    }
`

const Search = (props) => (
  //html
    <SearchWrapper>
        <form 
            action="https://detroitmi.gov/search" 
            method="get"
        >
            <input 
                type="text" 
                name="search" 
                size="30" 
                maxlength="128" 
                autocomplete="off" 
                placeholder="SEARCH" 
            />
        </form>
        <BigMenu/>
    </SearchWrapper>
);

export default Search;