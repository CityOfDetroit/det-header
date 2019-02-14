import React from 'react';
import styled from 'styled-components';


const MenuWrapper = styled.div`
    position: relative;
    top: 14px;
    grid-area: main;
    display: grid;
    width: 85%;
    grid-tempate-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "links langauge";
    ul{
        display: flex;
        direction: row;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        margin: 0px;
        padding: 0px;
      }
    ul li{
        list-style-type: none;
        display: inline-block;
        text-transform: uppercase;
        margin-right: 16px;
    }
    ul li a{
    	font-size: 15px;
    	text-decoration: none;
        color: #18252a;
    }
    .link-menu{
        grid-area: links;
    }
    .languages{
        grid-area: langauge;
    }
	.link-menu, .languages{
        display: inline-block;
        vertical-align: top;
    }
    .languages ul li a{
        font-size: 12px;
    }
    @media (max-width: 868px) {
        grid-template-areas: 
          "links";
        .hide-small{
            display: none;
        }
      }
      @media (max-width: 588px) {
      grid-template-areas: 
        "links"
        "search";
      }
`

const Menu = (props) => (
  //html
        <MenuWrapper>
            <div className = "link-menu">
    			<ul>
    				<li><a href="https://detroitmi.gov/departments/detroit-department-transportation/bus-schedules" target="_blank">Buses</a></li>
    				<li class="hide-small"><a href="https://detroitmi.gov/departments" target="_blank">Departments</a></li>
    				<li class="hide-small"><a href="https://detroitmi.gov/government" target="_blank">Government</a></li>
    				<li><a href="https://detroitmi.gov/departments/human-resources-department/apply-job" target="_blank">Jobs</a></li>
    				<li><a href="https://detroitmi.gov/how-do-i/pay-fine-bill-or-tax" target="_blank">Pay</a></li>
    				<li><a href="https://detroitmi.gov/departments/water-and-sewerage-department" target="_blank">Water</a></li>
    			</ul>
    		</div>
            <div className = "languages hide-small">
    			<ul>
    				<li><a href="https://detroitmi.gov/" target="_blank">English</a></li>
    				<li><a href="https://detroitmi.gov/es" target="_blank">Español</a></li>
    				<li><a href="https://detroitmi.gov/bn" target="_blank">Bengali</a></li>
    				<li><a href="https://detroitmi.gov/ar" target="_blank">العربية</a></li>
    			</ul>
    		</div>
        </MenuWrapper>
);

export default Menu;