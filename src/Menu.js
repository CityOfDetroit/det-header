import React from 'react';
import styled from 'styled-components';

const CenterHeader = styled.div`
	display: inline-block;
    float: left;
`

const MenuWrapper = styled.div`
    position: relative;
    top: 14px;
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
	.link-menu, .languages{
        display: inline-block;
        vertical-align: top;
    }
    .languages ul li a{
        font-size: 12px;
    }
`

const Menu = (props) => (
  //html
  <CenterHeader>
        <MenuWrapper>
            <div className = "link-menu">
    			<ul>
    				<li><a href="https://detroitmi.gov/departments/detroit-department-transportation/bus-schedules" target="_blank">Buses</a></li>
    				<li><a href="https://detroitmi.gov/departments" target="_blank">Departments</a></li>
    				<li><a href="https://detroitmi.gov/government" target="_blank">Government</a></li>
    				<li><a href="https://detroitmi.gov/departments/human-resources-department/apply-job" target="_blank">Jobs</a></li>
    				<li><a href="https://detroitmi.gov/how-do-i/pay-fine-bill-or-tax" target="_blank">Pay</a></li>
    				<li><a href="https://detroitmi.gov/departments/water-and-sewerage-department" target="_blank">Water</a></li>
    			</ul>
    		</div>
            <div className = "languages">
    			<ul>
    				<li><a href="https://detroitmi.gov/" target="_blank">English</a></li>
    				<li><a href="https://detroitmi.gov/es" target="_blank">Español</a></li>
    				<li><a href="https://detroitmi.gov/bn" target="_blank">Bengali</a></li>
    				<li><a href="https://detroitmi.gov/ar" target="_blank">العربية</a></li>
    			</ul>
    		</div>
        </MenuWrapper>
    </CenterHeader>
);

export default Menu;