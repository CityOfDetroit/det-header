import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`    
    -webkit-appearance: none;
    grid-area: search;
    
    input{
		width: 100%;
		max-width: none;
		border: 2px solid #004445;
		height: 57px;
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
                value="" 
                size="30" 
                maxlength="128" 
                autocomplete="off" 
                placeholder="SEARCH" 
            />
        </form>
    </SearchWrapper>
);

export default Search;