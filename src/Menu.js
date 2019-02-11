import React from 'react';
import styled from 'styled-components';



const Search = (props) => (
  //html
    <div>
        <form action="https://detroitmi.gov/search" method="get">
            <input type="text" name="search" value="" size="30" maxlength="128" autocomplete="off" placeholder="SEARCH" />
        </form>
    </div>
);

export default Search;