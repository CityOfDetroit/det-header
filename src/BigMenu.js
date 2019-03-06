import React from "react";
import styled from "styled-components";

function BigMenu(props) {
  const BigMenu = styled.div`
    grid-area: menu;
  `;

  const MenuButton = styled.div`
    float: left;
    position: relative;
    left: 3px;
    width: 57px;
    height: 57px;
    label{
	    background: #feb70d;
	    color: #18252a;
	    transition: transform 250ms ease;
	    cursor: pointer;
	    z-index: 20;
	    font-size: 10px;
	    letter-spacing: -.13em;
	    padding: 13px;
		display: inline-block;
		max-width: 100%;
		margin-bottom: 5px;
		font-weight: bold;
		font-size: 10px;
      :checked ~  span {
        background-color: #18252a;
        transition: transform 250ms ease; }
        :checked ~ span:nth-of-type(1) {
          transform: translateY(3px) rotate(45deg); }
        :checked ~ span:nth-of-type(2) {
          display: none; }
        :checked ~ span:nth-of-type(3) {
          transform: translateY(-3px) rotate(-45deg);
          margin-bottom: 5px; }
        :checked ~ main {
          transform: translateX(250px);
          transition: transform 500ms ease; }
    }
  span{
		position: relative;
	    display: block;
	    width: 100%;
	    height: 3px;
	    margin-top: 3px;
	    background-color: #18252a;
	    float: left;
	    transform-origin: center center;
	    transition: transform 250ms ease;
	    z-index: 20;
  }

  `;

  const BigMenuWrapper = styled.div`
    display: ${props.display ? "block" : "none"};
    position: fixed;
    right: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.9);
    height: 100%;
    overflow-y: scroll;
    z-index: 100;
    transition: right 500ms ease;

    #close-button {
      height: 50px;
      width: 50px;
      position: fixed;
      top: 10px;
      right: 27px;
      background: #feb70d;
      cursor: pointer;
    }

    .nav-item.lvl-1 {    
      height: 45px;
      width: 480px;
      padding-top: 10px;
    }

    .sub-items-btn {
      width: 5em;
      text-align: center;
      padding: 1em;
      font-weight: bold;
      color: #9fd5b3;
      cursor: pointer;
      height: 25px;
      position: fixed;
      right: 0px;
      display: none;
      margin-top:-10px;
    }

    .sub-items-btn:hover{
      background: #004445;
    }

    .lvl-1 > .sub-items-btn {
      display: block;
    }

    .sub-items-btn:before{
      content: ">"
    }

    .sub-items-btn:hover {
      background: #004445;
    }

    .nav-item.lvl-1{
      display: ${!props.status.departments && !props.status.government && !props.status.howDoI ? "block" : "none"}
    }

    .nav-item.lvl-1#departments{
      display: ${props.status.departments ? "block" : ''}
    }

    .nav-item.lvl-1#departments > a,
    .nav-item.lvl-1#departments > .sub-items-btn{
      display: ${props.status.departments ? "none" : "inline-block"}
    }

    .nav-item.lvl-1#government{
      display: ${props.status.government ? "block" : ''}
    }

    .nav-item.lvl-1#government > a,
    .nav-item.lvl-1#government > .sub-items-btn{
      display: ${props.status.government ? "none" : "inline-block"}
    }

    .nav-item.lvl-1#how-do-i{
      display: ${props.status.howDoI ? "block" : ''}
    }

    .nav-item.lvl-1#how-do-i > a,
    .nav-item.lvl-1#how-do-i > .sub-items-btn{
      display: ${props.status.howDoI ? "none" : "inline-block"}
    }

    .nav-item.lvl-1 > .nav-container .nav-item .nav-container{
      display: none;
    }

    .nav-item.back {
      height: 20px;
      padding: 1em;
      font-weight: bold;
      color: #fff;
      background-color: #005f5d;
      cursor: pointer;
    }
    .nav-item {
      height: 56px;
    }

    .nav-item a {
      text-decoration: none;
      color: white;
      padding: 0.5em;
      flex: 1;
      display: flex;
    }

    .nav-item.lvl-1 .nav-container .nav-item:hover {
      background: #9fd5b3;
    }

    .nav-item a span {
      margin: auto 0;
      padding: 0.5em;
    }

    .search-box {
      padding: 9px 75px 9px 9px;
      font-size: 30px;
    }

    #menu-search {
      width: 90%;
      height: 57px;
      background: transparent;
      color: white;
      font-family: "Montserrat";
      border: none;
      border-bottom: 2px solid #fff;
      padding: 0 0 0 8px;
      font-size: 1em;
    }

    #menu-search:placeholder {
      color: white;
      font-size: 1.5em;
      font-weight: 900;
    }
  `;

  return (
    <BigMenu>
    <MenuButton onClick={props.toggleMenu} id="main-menu">
      <label>
        <span></span>
        <span></span>
        <span></span>
          MENU
      </label>
    </MenuButton>
    {props.display ? 
    <BigMenuWrapper id="big-nav">
      <div className="search-box">
        <div id="close-button" onClick={props.toggleMenu}>X</div>
        <input id="menu-search" type="text" name="" placeholder="SEARCH" />
      </div>
      <div>
        <div className="nav-item lvl-1" id="departments">
          <a href="https://detroitmi.gov/departments">
            <span>DEPARTMENTS</span>
          </a>
          <div className="sub-items-btn" onClick={(e) => {props.subMenuClick(e, {departments: true, government: false, howDoI: false})}} />
          {props.status.departments ? 
          <div className="nav-container">
            <div className="nav-item back" onClick={(e) => {props.subMenuClick(e, {departments: false, government: false, howDoI: false})}}>
              <i className="fas fa-angle-left" /> BACK
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/departments/airport-coleman-young-international">
                <span>Airport, Coleman A. Young International</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/airport-coleman-young-international/mission-and-goals">
                    <span>Mission and Goals</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/airport-coleman-young-international/lease-information">
                    <span>Lease Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/airport-coleman-young-international/available-services">
                    <span>Available Services</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/airport-coleman-young-international/airport-fees">
                    <span>Airport Fees</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department">
                <span>
                  Buildings, Safety Engineering and Environmental Department
                </span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/bseed-permit-ordinance-changes">
                    <span>BSEED Permit Ordinance Changes</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/business-licenses-checklist">
                    <span>Business Licenses Checklist</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/marathon-variance-hearing">
                    <span>Marathon Variance Hearing</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/development-resource-center">
                    <span>Development Resource Center</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/development-resource-center/bseed-forms">
                        <span>BSEED Forms</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/development-resource-center/business-resources">
                        <span>Business Resources</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/environmental-affairs">
                    <span>Environmental Affairs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/environmental-affairs/brownfields">
                        <span>Brownfields</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/environmental-affairs/bulk-solid-materials-storage">
                        <span>Bulk Solid Materials Storage</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/environmental-affairs/right-entry">
                        <span>Right of Entry</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department/environmental-affairs/floodplain">
                        <span>Floodplain</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/911">
                    <span>Construction</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/961">
                        <span>Plumbing</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2836">
                            <span>Plumbing Checklist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/956">
                        <span>Mechanical Inspection Team</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3386">
                        <span>Elevator Inspection Team Information</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3621">
                            <span>Elevator Journeyperson Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3571">
                            <span>Elevator Contractor Checklist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/936">
                        <span>Electrical Inspection Team</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2651">
                            <span>Electrical Apprentice Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2671">
                            <span>Electrical Contractor Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2691">
                            <span>Electrical Journeyman Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3276">
                            <span>Electrical License Fee</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/946">
                            <span>Electrical Inspection Links</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3596">
                            <span>Fire Alarm Apprentice Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5036">
                            <span>Fire Alarm Contractor Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5041">
                            <span>Fire Alarm Technician Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3601">
                            <span>Master Electrician Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5046">
                            <span>Sign Specialist Checklist</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5031">
                            <span>Sign Specialist Contractor Checklist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/926">
                        <span>Building Inspection Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4586">
                        <span>Building Codes, Ordinances and Acts</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/921">
                        <span>Boiler Inspection Team</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/916">
                    <span>Business License Center</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/981">
                    <span>Building Permit Information</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3751">
                        <span>
                          Electronic Plan Review (ePlans) for Building Permits
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2361">
                        <span>Building Permit Requirements</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3306">
                    <span>Building License Information</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4461">
                        <span>Buildings License Checklist</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4581">
                    <span>District Inspectors</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1526">
                    <span>Zoning / Special Land Use</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2631">
                        <span>Zoning Map Index</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2876">
                    <span>Sign Permits</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2801">
                    <span>Right of Entry</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3261">
                    <span>Resources</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/901">
                    <span>Rental Property Information</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5131">
                        <span>Rental Property Escrow</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4836">
                        <span>
                          Commercial Inspections, Requirements and
                          Responsibilities
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4516">
                        <span>Rental Property</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1786">
                            <span>Rental Requirements</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4491">
                            <span>Rental Property Forms</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1751">
                        <span>Maintaining Your Property</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4511">
                        <span>Landlord Compliance Manual</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4496">
                        <span>Inspection Tips</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4506">
                        <span>Certificate of Compliance</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2896">
                            <span>
                              Quick Steps to Obtain a Certificate of Compliance
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4481">
                            <span>Schedule Inspection</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4471">
                            <span>Obtain a Certificate of Compliance</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4501">
                        <span>Addressing Lead</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/906">
                    <span>Medical Marijuana</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/121">
                <span>
                  Civil Rights, Inclusion &amp; Opportunity Department
                </span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1001">
                    <span>Civil Rights</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1006">
                    <span>Language Access Program</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1181">
                    <span>Skilled Trades Employment Program</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1176">
                    <span>
                      Executive Order 2016-1 Summary Construction Inclusion
                      Report
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/986">
                    <span>Detroit Business Opportunity Program</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/46">
                <span>Department of Appeals and Hearings</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3216">
                    <span>Blight Ticket Information</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2881">
                        <span>Blight Ticket Fees</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2846">
                    <span>Blight Ticket Appeal</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/41">
                <span>Department of Innovation and Technology</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5606">
                    <span>Data Detroit</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5611">
                        <span>About Detroit Open Data</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5616">
                        <span>Developers</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/1">
                <span>Department of Neighborhoods</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5011">
                    <span>Halloween in the D</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5186">
                    <span>Neighborhood Newsletter</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2291">
                    <span>MotorCity Makeover Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4401">
                    <span>District 1</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4406">
                    <span>District 2</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4411">
                    <span>District 3</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4416">
                    <span>District 4</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4421">
                    <span>District 5</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4426">
                    <span>District 6</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4431">
                    <span>District 7</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1946">
                    <span>Serve Detroit</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1951">
                        <span>Volunteer Information</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/26">
                <span>Department of Public Works</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/811">
                    <span>ADA Ramp and Sidewalk Requirements</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5266">
                    <span>Scooters</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/801">
                    <span>Contact Us</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2276">
                    <span>Dead Animal Removal</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2751">
                    <span>Environmental Enforcement</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2756">
                    <span>Handicap Sign Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/821">
                    <span>Oversize / Overweight Load Move</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/861">
                    <span>Pothole Repair</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3666">
                    <span>Refuse Collection</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3211">
                        <span>Recycling Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2211">
                        <span>Recycle</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/816">
                        <span>Household Hazardous Waste Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1996">
                        <span>Free Recycling Container Form</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/856">
                        <span>Bulk &amp; Yard Waste</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/891">
                            <span>Paid Pick-Up Bulk Collection Service</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/896">
                            <span>Free Citizen Bulk Drop Off Centers</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/886">
                            <span>Curbside Bulk Waste Pickup</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/881">
                            <span>Bulk Waste Disposal</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2781">
                    <span>Right of Way Permit Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/871">
                    <span>Snow / Ice Management</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2196">
                    <span>Street Maintenance</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4931">
                        <span>Driveway Approaches and Curb Cuts</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4911">
                        <span>Sidewalk Program</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4926">
                        <span>Street Paving and Resurfacing</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/876">
                    <span>Street Sweeping Schedule</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/836">
                    <span>Traffic Control Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2661">
                    <span>Traffic Signals</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1811">
                    <span>Valet Permit Fee Schedule</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/841">
                    <span>Weight Restrictions</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/6">
                <span>Detroit Building Authority</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5386">
                    <span>About the DBA</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4571">
                    <span>Building Authority Advertisements</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5236">
                        <span>Professional Service Agreements</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5121">
                        <span>Personal Service Contracts</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1856">
                    <span>Detroit Demolition Program</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1991">
                        <span>
                          Protecting Our Neighbors and the Environment
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1866">
                        <span>View All Demolitions</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1871">
                        <span>Impact of Demo on Property Values</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1861">
                        <span>Become a Demolition Contractor</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/166">
                <span>Detroit Department of Transportation</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3376">
                    <span>DDOT GTFS Files</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3226">
                    <span>Buy A Pass</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3286">
                    <span>Bus Stop Optimization Project</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3241">
                    <span>Bus Schedules Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4311">
                    <span>Bus Schedules</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3456">
                    <span>Adopt-A-Shelter Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4871">
                    <span>Equal Employment Opportunity</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3411">
                    <span>Disadvantaged Business Enterprise</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3311">
                    <span>Fresh Wagon</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2796">
                    <span>JARC</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5461">
                    <span>New Fare Effective May 1, 2019</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2826">
                    <span>Transportation Fares</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4706">
                    <span>Title VI</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3361">
                    <span>Text My Bus</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2611">
                    <span>MetroLift Paratransit Services</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5086">
                    <span>NightShift</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3451">
                    <span>Opportunities</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4576">
                    <span>New Freedom</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/111">
                <span>Detroit Fire Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4986">
                    <span>Fire Operations</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4976">
                    <span>Emergency Medical Services</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2786">
                        <span>Medical Emergency</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5391">
                    <span>Plans and Exams</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4966">
                    <span>Communications</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4916">
                    <span>Arson/Fire Investigation</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4921">
                    <span>Fire Department Training</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4981">
                    <span>Fire Prevention</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1941">
                        <span>Safe Fireworks</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1431">
                        <span>Fire Hydrant Use Information</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4971">
                    <span>Community Relations</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3576">
                        <span>Mobile Fire Safety House</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1406">
                        <span>Fire Department Speakers</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1426">
                        <span>Smoke Detectors</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2806">
                        <span>Fire Safety Tips</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1066">
                        <span>Holiday Fire Safety</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1421">
                        <span>DFD Community Event Programs</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2816">
                        <span>Change your Clock, Change your Battery</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2901">
                        <span>Firehouse Tours</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/106">
                <span>Detroit Health Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3851">
                    <span>About the Health Department</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3876">
                        <span>From the Director</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3501">
                        <span>Quality and Accreditation</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2641">
                        <span>Special Projects</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3616">
                        <span>Data Planning and Evaluation</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2646">
                        <span>Provider Education</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5106">
                    <span>Programs and Services</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5481">
                        <span>Bed Bugs</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3511">
                        <span>Lead Program</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/791">
                        <span>Detroit Animal Care and Control</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1206">
                            <span>Dog Licensing</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2626">
                        <span>961-BABY HOTLINE</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2201">
                        <span>Detroit ID</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5396">
                            <span>Benefits</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2871">
                            <span>Detroit ID FAQs</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2841">
                            <span>Homelessness Service Providers</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2856">
                            <span>Homeless Residents</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2861">
                            <span>Become a Detroit ID Community Partner</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2866">
                            <span>Schedule An Appointment</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2331">
                        <span>Immunizations</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3021">
                            <span>Hepatitis</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3236">
                            <span>Sentinel Flu Surveillance Network</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2206">
                        <span>Food Safety</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3626">
                        <span>STD/HIV Prevention</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5096">
                            <span>Order Free Condoms by Mail</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3881">
                            <span>HIV Program</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2461">
                        <span>Sexually Transmitted Diseases Clinic</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1986">
                        <span>Children's Special Health Care Services</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3001">
                        <span>Hearing Screening</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3006">
                        <span>Vision Screening</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3951">
                        <span>Women, Infants and Children (WIC) Program</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2636">
                        <span>Reproductive Health</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4521">
                        <span>iDecide Detroit</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3031">
                        <span>Maternal Child Health</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2996">
                        <span>Family and Community Health</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3036">
                        <span>Environmental Health and Safety</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3861">
                        <span>Communicable Disease</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3631">
                        <span>Birth and Death Certificates</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2011">
                        <span>
                          Water Testing Results in Schools and Childcare Centers
                        </span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2086">
                            <span>Day Care Water Testing</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2081">
                            <span>Charter and EAA Water Testing</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2076">
                            <span>DPS Water Testing</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3011">
                        <span>Public Health Emergency Preparedness</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3856">
                    <span>Come Work With Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/101">
                <span>General Services Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3731">
                    <span>City Walls</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3736">
                        <span>Detroit Viaduct Beautification</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3741">
                        <span>Blight Abatement Artist Residency</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5051">
                        <span>District Impact Project</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5056">
                        <span>Parkside Residency</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5061">
                        <span>AlwaysHandPaint Residency</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3786">
                        <span>Ticketed Properties</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5066">
                        <span>City Walls Gallery</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3716">
                    <span>Adopt-A-Park Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3721">
                    <span>Adopt-A-Park FAQ</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2191">
                    <span>Tree Services</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2791">
                    <span>Tree Down</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/116">
                <span>
                  Homeland Security &amp; Emergency Management, Detroit
                </span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5166">
                    <span>Adverse Weather</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1076">
                        <span>
                          National Weather Service Advisories, Watches and
                          Warnings
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1091">
                        <span>Severe Weather Hazards Safety Tips</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1116">
                            <span>Beach Hazards / Rip Currents</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1126">
                            <span>Floods</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1131">
                            <span>Frostbite</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1136">
                            <span>Heat / Heat Stroke</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1141">
                            <span>Lightning / Severe Thunderstorms</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1146">
                            <span>Tornadoes</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3816">
                            <span>Winter Emergency Preparedness</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1151">
                            <span>Winter Weather Hazards</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1046">
                    <span>Community Emergency Response Team (CERT)</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2521">
                    <span>Detroit Local Emergency Planning Committee</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5171">
                    <span>Emergency Preparedness</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1051">
                        <span>Emergency Planning</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1061">
                        <span>Evacuation and Shelter-In-Place</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1081">
                        <span>Pet Safety</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5176">
                    <span>Homeland Security</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1071">
                        <span>Hometown Security</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1101">
                        <span>See Something Say Something</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5136">
                    <span>Informational Safety Videos</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5161">
                    <span>Shelters, Warming and Cooling Centers</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1041">
                        <span>Cooling Centers</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1086">
                        <span>Red Cross Shelters -- What To Bring</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1111">
                        <span>Warming Centers</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1096">
                    <span>Sirens</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5211">
                    <span>Training and Volunteer Opportunities</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/91">
                <span>Housing and Revitalization Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3896">
                    <span>About HRD</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3936">
                        <span>Administration&nbsp;and Finance</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3921">
                        <span>Housing Underwriting</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3926">
                        <span>Programmatic Underwriting</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3931">
                        <span>Public-Private Partnerships</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5436">
                    <span>Affordable Housing</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5451">
                        <span>City Initiatives</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5456">
                        <span>Definitions</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5441">
                        <span>What is affordable housing?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5446">
                        <span>Who is eligible?</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4111">
                    <span>For Residents</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4206">
                    <span>For Developers and Contractors</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4181">
                        <span>Compliance for Federally-Funded Projects</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4231">
                    <span>For Nonprofits and Community Groups</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5196">
                    <span>HUD Programs and Information</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2761">
                        <span>Community Development Block Grants</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4261">
                        <span>HUD Consolidated Plans</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5206">
                        <span>Neighbohood Stabilization Program</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4266">
                            <span>NSP Maps</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4256">
                    <span>Resources and Archives</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5201">
                    <span>Public Notices</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/76">
                <span>Human Resources Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1971">
                    <span>Employee New Hire Forms</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2551">
                    <span>Employee Forms</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2531">
                    <span>City Employee Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2121">
                    <span>Apply for a Job</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2891">
                        <span>Job Opening FAQs</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4441">
                    <span>Workplace Policies</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/141">
                <span>Law Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1226">
                    <span>Project Clean Slate</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4846">
                        <span>PCS Training</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1221">
                    <span>Blight</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2666">
                    <span>Law Claims Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1211">
                    <span>Submit A FOIA Request</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1241">
                        <span>Routine Police Feedom Of Information Act</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1246">
                        <span>Non-Routine or Complex Police FOIA Request</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1251">
                        <span>
                          Non-Police Freeedom Of Information Act Request
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2741">
                    <span>Police Claims Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1216">
                    <span>Orders and Ordinances</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1936">
                        <span>Medical Marijuana Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1266">
                        <span>Executive Orders</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1261">
                        <span>Emergency Manager Orders</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/146">
                <span>Media Services Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4451">
                    <span>Media Requests</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1236">
                    <span>Special Events</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/131">
                    <span>Detroit Film Office</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/1976">
                <span>Municipal Parking Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2976">
                    <span>Pay Parking Ticket</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/81">
                <span>Office of the Chief Financial Officer</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4906">
                    <span>Mission, Vision, and Values</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5071">
                    <span>Administrative Issuance System</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4896">
                    <span>OCFO Divisions</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1376">
                        <span>Office of the Assessor</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2216">
                            <span>Renaissance Zones</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1846">
                            <span>Property Tax Assistance</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3026">
                            <span>Property Assessment FAQs</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4476">
                            <span>Property Assessment Documents</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1436">
                            <span>Property Assessment Appeal Information</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1441">
                            <span>City of Detroit Reappraisal</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1851">
                            <span>Avoid Property Tax Foreclosure</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1381">
                        <span>Office of Budget</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5251">
                            <span>
                              FY 2019-2022 Approved Four-Year Financial Plan
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5256">
                            <span>
                              FY 2019-2022 Mayor's Recommended Four-Year
                              Financial Plan
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3711">
                            <span>Detroit Budget Archives Information</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2421">
                        <span>Office of the Controller</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1366">
                        <span>Office of Contracting and Procurement</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3486">
                            <span>Procurement News, Outreaches and Events</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1391">
                            <span>
                              Supplier Portal Information and Instructions
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1396">
                            <span>
                              Introduction to the BidSync Bid Notification
                              System
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1401">
                            <span>Open Bids for the City of Detroit</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3671">
                            <span>
                              Procurement City Council Agendas and Contracts
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1416">
                            <span>HUD Section 3</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1551">
                            <span>HUD Bid Opportunities</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2431">
                        <span>Office of Departmental Financial Services</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2441">
                        <span>Office of Development and Grants</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2436">
                        <span>Office of Financial Planning and Analysis</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1831">
                        <span>Office of the Treasury</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2326">
                            <span>Property Taxes Information</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2001">
                            <span>Treasury Tax Division</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2306">
                            <span>
                              Senior Citizen Solid Waste Discount Information
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2321">
                            <span>Pay Property Tax</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1881">
                            <span>Income Tax</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2226">
                            <span>Delinquent Property Tax Information</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4531">
                            <span>Earned Income Tax Credit</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4381">
                    <span>Financial Reports</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4376">
                    <span>History of OCFO</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/161">
                <span>Parks &amp; Recreation</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2096">
                    <span>About Parks and Recreation</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3981">
                    <span>Adopt A Park</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3971">
                    <span>After-School Recreation Program</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3841">
                    <span>Belle Isle</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3961">
                    <span>Cemeteries</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2241">
                        <span>Forest Hill Cemetery</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2246">
                        <span>Mt. Hazel Cemetery</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2236">
                        <span>Gethsemane Cemetery</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2006">
                    <span>Community Recreation Centers</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2016">
                        <span>Adams Butzel Complex</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2031">
                        <span>Farwell Recreation Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2071">
                        <span>Butzel Family Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2101">
                        <span>Clemente Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2146">
                        <span>Coleman A. Young Community Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2151">
                        <span>Considine Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2111">
                        <span>Crowell Community Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2161">
                        <span>Delray Community Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2116">
                        <span>Heilmann Community Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2166">
                        <span>Tindal Recreation Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2141">
                        <span>Joseph Walker Williams Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2131">
                        <span>Kemeny Recreation Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2136">
                        <span>Lasky Recreation Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2156">
                        <span>Northwest Activities Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2126">
                        <span>Patton Community Center</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4106">
                        <span>Riverside Park Conversion Project</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2171">
                    <span>Fort Wayne</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2931">
                    <span>Golf Courses</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2951">
                        <span>Rouge Park Golf Course</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2946">
                        <span>Rackham Golf Course</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2936">
                        <span>Chandler Park Golf Course</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2181">
                    <span>Hart Plaza</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2971">
                    <span>Marinas</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2981">
                        <span>Riverside Marina</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2986">
                        <span>Erma Henderson Marina</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2106">
                    <span>Park Rules</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2566">
                    <span>Recreation Centers Programs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2091">
                        <span>Recreation Policies</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2556">
                        <span>Recreation Fees</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2561">
                        <span>Recreation Center Boxing</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2261">
                        <span>Recreation Center Baseball</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2256">
                        <span>Recreation Center Aquatics</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5401">
                    <span>Spirit Plaza</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/156">
                <span>Pension Department</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/86">
                <span>Planning and Development Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2911">
                    <span>East Design Region</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4956">
                        <span>Jefferson Chalmers</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3066">
                        <span>
                          Islandview Greater Villages Planning Strategy
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2411">
                        <span>Campau-Davison-Banglatown</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3156">
                        <span>Give A Park, Get A Park</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2916">
                    <span>Central Design Region</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3081">
                        <span>Rosa Parks and Clairmount</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4951">
                        <span>Greater Corktown</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3076">
                        <span>East Riverfront</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3071">
                        <span>Brush Park</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3086">
                        <span>West Vernor</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3041">
                    <span>West Design Region</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3096">
                        <span>O'Shea Solar Park</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4961">
                        <span>Russell Woods Nardin Park</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4996">
                        <span>Warrendale Cody Rouge</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3101">
                        <span>Livernois - McNichols</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3091">
                        <span>Grand River - Northwest</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3106">
                        <span>7 Mile and Livernois</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3046">
                    <span>Strategic Planning</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3111">
                        <span>Master Planning</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4851">
                    <span>Transportation and Mobility</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4866">
                        <span>Streetscape Design</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4886">
                        <span>Roadway Safety and Multimodal Planning</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4936">
                        <span>Joe Louis Greenway</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4941">
                        <span>Downtown Transportation Study</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4946">
                        <span>East Jefferson Improvements</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5141">
                    <span>Urban Research and Outreach</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3051">
                    <span>Zoning Innovation and Historic Preservation</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4186">
                        <span>Sign Ordinance</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4171">
                        <span>Historic District Commission Information</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5431">
                            <span>
                              Making Exterior Changes within Local Historic
                              Districts
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4176">
                        <span>Concept Plan Review</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3166">
                        <span>Pink Zoning</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3056">
                    <span>Office Of Yes!</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3061">
                    <span>Citywide Initiatives</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3131">
                        <span>Business Tax Incentives</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5406">
                        <span>Landscape Design and Process Standards</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3151">
                        <span>Community Benefits Ordinance</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5016">
                            <span>Ongoing CBO Engagement</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5021">
                            <span>Past CBO Engagement</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3791">
                        <span>Greater Downtown Area Bicycle Network Plan</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3171">
                        <span>Detroit Rides</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/4386">
                            <span>East Side Network</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5191">
                    <span>Neighborhood Plans</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/21">
                <span>Police Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5271">
                    <span>Project Green Light Detroit</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5291">
                        <span>Agreements</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5301">
                            <span>Corridor Agreement</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5296">
                            <span>Partnership Agreement</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5306">
                            <span>Tier One Installer Agreement</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5311">
                            <span>Tier Two Installer Agreement</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5276">
                        <span>Approved Vendors</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5281">
                        <span>Costs to Get Involved</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5426">
                        <span>Steps to Get Involved</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3611">
                    <span>Senior Citizens 911 Profile</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3381">
                    <span>Victim's Assistance</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1321">
                    <span>Report Crime</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4071">
                    <span>2016 Crime Statistics</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2281">
                    <span>Abandoned Vehicle</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1446">
                    <span>Auto Theft</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1301">
                    <span>Community and Police Advocacy (C.A.P.P.A.)</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1291">
                    <span>Detroit Police Department Jobs</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1286">
                    <span>
                      Detroit Police Department Office of Civil Rights
                    </span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2656">
                        <span>Definitions of Consent Decree</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1306">
                    <span>Detroit Police Department Records and Reports</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2341">
                    <span>Precincts and Neighborhood Police Officers</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2606">
                    <span>Gun Permits Information</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/171">
                <span>Water and Sewerage Department</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5076">
                    <span>Water Saving Tips</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4681">
                    <span>Resources</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3176">
                        <span>What to Do If You Have a Sewer Backup</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2991">
                        <span>Water Quality Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/356">
                        <span>Stormwater Drainage</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2961">
                            <span>Drainage Fees</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/366">
                        <span>Payment Plan</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3256">
                        <span>Payment Kiosks</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3356">
                        <span>DWSD Associations</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1661">
                        <span>Director's Report</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2776">
                        <span>Broken Watermain</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4701">
                        <span>
                          Board of Water Commissioners Agendas and Documents
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2771">
                        <span>Awards</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1621">
                        <span>About DWSD</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3196">
                        <span>DWSD Annual Reports</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4631">
                    <span>Bill Assistance and Credits</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4636">
                        <span>Outreach and Service Credits</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2601">
                        <span>How Do I Keep My Water Flowing?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4641">
                        <span>Capital Partnership Program</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1891">
                        <span>Blue Ribbon Panel on Affordability</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/351">
                    <span>Customer Care</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4596">
                        <span>How Do I Dispute My Bill</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2966">
                        <span>How Am I Charged?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4616">
                        <span>DWSD Legal Notices</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2681">
                        <span>
                          DWSD Landlord and Tenant Agreements Information
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4611">
                        <span>Customer Policies</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4686">
                        <span>How Does DWSD Use My Data?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4591">
                        <span>
                          How Do I Turn On/Transfer/Turn Off Water Service
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4876">
                        <span>Learn About Your Water and Sewer Bill</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/376">
                        <span>Pay My Bill and Manage My Account</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4601">
                        <span>Protect My Pipes</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4606">
                        <span>Request a Permit</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3756">
                        <span>Sewerage Backup Claims</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3321">
                        <span>Where Do I Pay?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1631">
                        <span>Stormwater Management Codes and Ordinances</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4671">
                    <span>Construction</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5466">
                        <span>
                          DWSD Unplanned Full Lead Service Line Replacement
                          Program
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4696">
                        <span>Training and Jobs</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4676">
                        <span>Projects in 2018</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3181">
                        <span>Procurement</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3281">
                        <span>Master Specification for DWSD Projects</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3271">
                        <span>DWSD System Plans</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4656">
                    <span>Programs and Initiatives</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4666">
                        <span>Toilet Replacement Pilot Program</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3201">
                        <span>Stormwater Management Group (SMG)</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2926">
                        <span>Making Detroit Lead Safe</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2956">
                            <span>
                              Residential Lead Service Line Replacement Program
                            </span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/2941">
                            <span>Lead and Water Testing</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/361">
                            <span>Lead and Drinking Water</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/3146">
                            <span>Lead and Copper</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3396">
                        <span>Green Infrastructure Projects</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1626">
                        <span>Capital Improvement Program</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2456">
                    <span>Drainage Charge</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3371">
                        <span>Nonresidential Drainage Credits</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4621">
                        <span>What is My Hard Surface Area?</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4626">
                        <span>Drainage Guides and Forms</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/176">
                <span>Youth Services</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4216">
                    <span>High School Programs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4121">
                        <span>High School Sports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4126">
                        <span>High School Mentoring</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4131">
                        <span>High School E &amp; E</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4146">
                        <span>High School Day Camps</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3871">
                        <span>High School Arts</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3846">
                        <span>Drivers Training</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3886">
                        <span>Scholarships</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4316">
                        <span>High School Youth Volunteer Opportunities</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4211">
                    <span>Middle School Programs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4101">
                        <span>Middle School Arts</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4046">
                        <span>Middle School Youth Volunteer Opportunities</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4051">
                        <span>Middle School Sports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4066">
                        <span>Middle School Mentoring</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4076">
                        <span>Middle School E &amp; E</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4096">
                        <span>Middle School Day Camps</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4221">
                    <span>Elementary School Programs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4151">
                        <span>Elementary Youth Volunteer Opportunity</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4156">
                        <span>Elementary Sports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4166">
                        <span>Elementary Mentoring</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4161">
                        <span>Elementary E &amp; E</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4191">
                        <span>Elementary Day Camp</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4196">
                        <span>Elementary Arts</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4371">
                    <span>Post High School Programs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3891">
                        <span>
                          Post High School Youth Volunteer Opportunities
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4036">
                        <span>Post High School Arts</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3911">
                        <span>Post High School Sports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3956">
                        <span>Post High School Skilled Trades</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4201">
                        <span>Post High School Mentoring</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3976">
                        <span>Post High School E &amp; E</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4021">
                        <span>Post High School Day Camps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : ''}
        </div>
        <div className="nav-item lvl-1" id="government">
          <a href="/government">
            <span>GOVERNMENT</span>
          </a>

          <div className="sub-items-btn"  onClick={(e) => {props.subMenuClick(e, {departments: false, government: true, howDoI: false})}} />
          {props.status.government ? 
          <div className="nav-container">
            <div className="nav-item back" onClick={(e) => {props.subMenuClick(e, {departments: false, government: false, howDoI: false})}}>
              <i className="fas fa-angle-left" /> BACK
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/3686">
                <span>Office of the Auditor General</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/941">
                <span>Boards</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1671">
                    <span>Board of Wrecking Contractors Examiners</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2676">
                        <span>Board of Wrecking Contractors Meetings</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2301">
                        <span>
                          Board of Wrecking Contractors Examiners Members
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1536">
                    <span>Board of Zoning Appeals</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3481">
                        <span>Zoning Appeals Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2316">
                        <span>
                          Board of Zoning Appeals Rules and Procedures
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3506">
                        <span>Board of Zoning Appeals Meetings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1461">
                    <span>Detroit Local Emergency Planning Committee</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1471">
                        <span>Open Meetings Act</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2736">
                    <span>
                      Detroit Promise Zone Authority ( DPZA) Information
                    </span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2726">
                        <span>Detroit Promise Zone Members</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5111">
                        <span>Detroit Promise Zone Authority Meetings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1801">
                    <span>Historic Designation Advisory Board</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4566">
                        <span>Local Historic District Final Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5321">
                        <span>Other HDAB Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1806">
                        <span>Historic Designation Process</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2716">
                        <span>
                          Historic Designation Advisory Board Meeting Schedule
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2711">
                        <span>
                          Historic Designation Advisory Board Information
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1361">
                    <span>Board of Water Commissioners</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1876">
                    <span>Board of Administrative Rules &amp; Public Acts</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1546">
                    <span>Board of Electrical Examiners</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3221">
                        <span>Board of Electrical Examiners Meetings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1356">
                    <span>Board of Ethics</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4556">
                        <span>Kristin A. Lusn, Esq.</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5116">
                        <span>Board of Ethics Annual Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5101">
                        <span>Board of Ethics Meeting Minutes</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4561">
                        <span>Alma G. Stallworth</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4391">
                        <span>Beth Greenberg Morrow, Esq.</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2886">
                        <span>Board of Ethics Members</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1386">
                        <span>Hearing Procedures</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1676">
                    <span>Board of Police Commissioners</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1826">
                        <span>
                          Board of Police Commissioners Hearing Appeals
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5151">
                        <span>
                          Board of Police Commissioners Meeting Minutes
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4346">
                        <span>Chair, District 4</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4331">
                        <span>Co-Chair, District 1</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4336">
                        <span>District 2</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4341">
                        <span>District 3</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4351">
                        <span>District 5</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4321">
                        <span>District 6</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4356">
                        <span>District 7</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4361">
                        <span>Member At Large</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4366">
                        <span>Member At Large</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4326">
                        <span>Member At Large</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1816">
                        <span>Board of Police Commissioners News Releases</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2336">
                        <span>Police Commissioners History</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1821">
                        <span>Board of Police Commissioners Newsletters</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1896">
                        <span>
                          Board of Police Commissioners Policy Directives
                        </span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1906">
                            <span>Police Towing Information</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/1901">
                            <span>Proposed Changes to Police Procedures</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1836">
                        <span>
                          Office of the Chief Investigator (Police Complaints)
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3701">
                        <span>Police Commissioners Annual Reports</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1666">
                    <span>Property Assessment Board of Review</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2371">
                        <span>Property Assessment Board of Review Process</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3771">
                        <span>Property Assessment Forms</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2721">
                    <span>Secretary of the Interior Standards</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/291">
                <span>City Clerk</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2581">
                    <span>Appear Before Council</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2586">
                    <span>Banner Permits Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2576">
                    <span>City Clerk Archive Records Fees</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2296">
                    <span>City Clerk's Archives and Records Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2346">
                    <span>
                      City Council Proceedings 2000 - 2014 Information
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2621">
                    <span>City of Detroit Charter Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/306">
                    <span>Elections</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3521">
                        <span>Become an Election Day Pollworker</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3316">
                        <span>Election Information</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3546">
                        <span>Election Results</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3516">
                        <span>Request Absentee Ballot</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2571">
                    <span>Lobbyist Registration and Reporting Information</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/296">
                <span>City Council</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1501">
                    <span>City Council President - Brenda Jones</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5696">
                        <span>Military and Veterans Affairs Task Force</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2446">
                        <span>Skilled Trades Task Force</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1496">
                    <span>City Council At Large - Janeé Ayers</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2416">
                        <span>Returning Citizen's Task Force</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2451">
                        <span>Letter to Residents of Detroit</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1276">
                    <span>City Council District 1 - James Tate</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2366">
                        <span>Task Force</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1476">
                    <span>City Council District 2 - Roy McCalister Jr.</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4841">
                        <span>Mental Health Task Force</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1481">
                    <span>City Council District 3 - Scott Benson</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5126">
                        <span>Airport Task Force</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2406">
                        <span>Green Task Force</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1486">
                    <span>City Council District 4 - André L. Spivey</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2401">
                        <span>Task Forces</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1346">
                    <span>
                      City Council District 5 - Pro Tem - Mary Sheffield
                    </span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4116">
                        <span>District 5 Neighborhood Police</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4136">
                        <span>Statements</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1491">
                    <span>
                      City Council District 6 - Raquel Castañeda-López
                    </span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2386">
                        <span>Immigration Task Force</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1511">
                    <span>City Council District 7 - Gabe Leland</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2381">
                    <span>City Council Standing Committees Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2271">
                    <span>Council Awards and Resolutions</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4396">
                    <span>Legislative Policy Division</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5711">
                        <span>Budget Analysis Reports 2019 -2020</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3691">
                        <span>Legislative Policy Division Reports</span>
                      </a>
                      <div className="sub-items-btn" />
                      <div className="nav-container">
                        <div className="nav-item back">
                          <i className="fas fa-angle-left" /> BACK
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5326">
                            <span>Contract Reviews</span>
                          </a>
                        </div>
                        <div className="nav-item">
                          <a href="https://detroitmi.gov/taxonomy/term/5331">
                            <span>Division Reports</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4651">
                        <span>Research &amp; Analysis Division</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4436">
                        <span>Fiscal Analysis Reports</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/1576">
                <span>Commissions</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1581">
                    <span>Belle Isle Advisory Committee</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5621">
                    <span>Charter Revision Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1586">
                    <span>Citizens Review Committee</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1591">
                    <span>City Planning Commission</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4646">
                        <span>About the City Planning Commission</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3766">
                        <span>
                          City Planning Commission Archive Agendas &amp; Minutes
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2731">
                        <span>City Planning Commission Members</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3781">
                        <span>City Planning Commission Meetings</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3761">
                        <span>City Planning Commission Minutes</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5316">
                        <span>City Planning Commission Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4901">
                        <span>
                          Community Organization / Block Club Registry
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1646">
                    <span>Detroit Promise Zone Authority</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1651">
                    <span>Election Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1656">
                    <span>Human Rights Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1596">
                    <span>Civil Service Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1981">
                    <span>Detroit Housing Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1601">
                    <span>
                      Community Advisory Committee - Brownfield Redevelopment
                      Authority
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1606">
                    <span>Detroit Building Authority Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1611">
                    <span>
                      Detroit Elected Officials Compensation Commission
                    </span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1616">
                    <span>Detroit Entertainment Commission</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1636">
                    <span>Historic District Commission</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/301">
                <span>Mayor's Office</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5471">
                    <span>Graduate Summer Internship Program</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1681">
                    <span>Mayor</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5476">
                    <span>Undergraduate Summer Internship Program</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5216">
                    <span>Doing Business in Detroit</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5221">
                        <span>Contractor for Rehabbed and Ready Program</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1746">
                    <span>Police Chief</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1741">
                    <span>Chief of Staff</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1736">
                    <span>Corporation Counsel</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1731">
                    <span>Chief Financial Officer</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1726">
                    <span>Chief Information Officer</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1771">
                    <span>Correspondence</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1721">
                    <span>Group Executive for Operations</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3246">
                    <span>Detroit Neighborhood Initiative</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2351">
                    <span>Detroit Opportunities</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4226">
                        <span>Detroit Experiences</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/2356">
                        <span>Find A Job</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1716">
                    <span>Water and Sewerage Director</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1711">
                    <span>Group Executive for Jobs and Economic Growth</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1706">
                    <span>Group Executive - Neighborhoods</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1701">
                    <span>Interim Transportation Director</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1776">
                    <span>Goal Detroit</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1696">
                    <span>Human Resources Director</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1691">
                    <span>Chief Learning Officer</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1686">
                    <span>Director and Health Officer</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1966">
                    <span>LEAN</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2546">
                    <span>Mayor's Help Desk</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3986">
                    <span>Office of Immigrant Affairs</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3996">
                        <span>Community Resources</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3531">
                        <span>Economic Empowerment</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4001">
                        <span>Education / ESL Services</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4006">
                        <span>Employment Resources</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4011">
                        <span>Health Care</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4016">
                        <span>Housing</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4026">
                        <span>Legal Help</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3536">
                        <span>Mayor's Welcoming Letter</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4031">
                        <span>Social Services</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4041">
                        <span>Start a Business</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4061">
                        <span>Transportation</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4056">
                        <span>Think Detroit</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3421">
                    <span>Office of Sustainability</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3431">
                        <span>Current Focus Areas</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3426">
                        <span>Mission and Vision</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3436">
                        <span>Sustainability Action Agenda</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/2221">
                    <span>Properties</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3901">
                    <span>Real Estate Development</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4081">
                        <span>Development Financing</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4086">
                        <span>Development How To</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/4091">
                        <span>Development Success Stories</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/3946">
                        <span>Why Detroit?</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/3351">
                    <span>Tax Preparation Checklist</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/136">
                <span>Office of Inspector General</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5146">
                    <span>OIG Reports</span>
                  </a>
                  <div className="sub-items-btn" />
                  <div className="nav-container">
                    <div className="nav-item back">
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5231">
                        <span>Investigative Reports</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/5226">
                        <span>Quarterly Reports</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/5001">
                    <span>Complaint and Contact Information</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/4991">
                    <span>Debarment Information</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/151">
                <span>Ombudsman</span>
              </a>
              <div className="sub-items-btn" />
              <div className="nav-container">
                <div className="nav-item back">
                  <i className="fas fa-angle-left" /> BACK
                </div>
                <div className="nav-item">
                  <a href="https://detroitmi.gov/taxonomy/term/1351">
                    <span>Ombudsman Confidentiality Policy Statement</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/3366">
                <span>Tax Preparation Sites</span>
              </a>
            </div>
          </div>
          : ''}
        </div>
        <div className="nav-item lvl-1" id="how-do-i">
          <a href="/how-do-i">
            <span>HOW DO I</span>
          </a>
				  <div className="sub-items-btn"  onClick={(e) => {props.subMenuClick(e, {departments: false, government: false, howDoI: true})}} />
          {props.status.howDoI ? 
          <div className="nav-container" id="how-do-i-container">
            <div className="nav-item back" onClick={(e) => {props.subMenuClick(e, {departments: false, government: false, howDoI: false})}}>
              <i className="fas fa-angle-left" /> BACK
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/266">
                <span>Appeal</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/246">
                <span>Apply for or renew license</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/216">
                <span>Apply for or renew permit or certification</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/281">
                <span>Do Business with the City</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/241">
                <span>File information or documents</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/236">
                <span>Find information</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/1326">
                <span>Find or apply for employment</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/3866">
                <span>Find Youth Programs</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/261">
                <span>Locate something</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/3141">
                <span>Obtain Grant Information</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/211">
                <span>Pay fine, bill or tax</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/276">
                <span>Purchase</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/231">
                <span>Register</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/201">
                <span>Report problem</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/256">
                <span>Request document</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/226">
                <span>Request service or assistance</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/271">
                <span>Sign up</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="https://detroitmi.gov/taxonomy/term/286">
                <span>Volunteer</span>
              </a>
            </div>
          </div>
          : ''}
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/buses">
            <span>BUSES</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/jobs">
            <span>JOBS</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/pay">
            <span>PAY</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/water">
            <span>WATER</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/events">
            <span>EVENTS</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/news">
            <span>NEWS</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/documents">
            <span>DOCUMENTS</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/forms">
            <span>FORMS</span>
          </a>
        </div>
        <div className="nav-item lvl-1">
          <a href="https://detroitmi.gov/city-hotlines">
            <span>HOTLINES</span>
          </a>
        </div>
      </div>
    </BigMenuWrapper>
      : ''}
    </BigMenu>
  );
}

export default BigMenu;
