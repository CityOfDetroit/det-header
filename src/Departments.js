import React from 'react'
function Departments(props){
    return(
        <div className="nav-container submenu-wrapper">
                    <div
                      className="nav-item back"
                      onClick={e => {
                        props.subMenuClick(e, {
                          departments: false,
                          government: false,
                          howDoI: false
                        });
                      }}
                    >
                      <i className="fas fa-angle-left" /> BACK
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/airport-coleman-young-international">
                        <span>Airport, Coleman A. Young International</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/departments/buildings-safety-engineering-and-environmental-department">
                        <span>
                          Buildings, Safety Engineering and Environmental
                          Department
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/121">
                        <span>
                          Civil Rights, Inclusion &amp; Opportunity Department
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/46">
                        <span>Department of Appeals and Hearings</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/41">
                        <span>Department of Innovation and Technology</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1">
                        <span>Department of Neighborhoods</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/26">
                        <span>Department of Public Works</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/6">
                        <span>Detroit Building Authority</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/166">
                        <span>Detroit Department of Transportation</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/111">
                        <span>Detroit Fire Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/106">
                        <span>Detroit Health Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/101">
                        <span>General Services Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/116">
                        <span>
                          Homeland Security &amp; Emergency Management, Detroit
                        </span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/91">
                        <span>Housing and Revitalization Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/76">
                        <span>Human Resources Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/141">
                        <span>Law Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/146">
                        <span>Media Services Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/1976">
                        <span>Municipal Parking Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/81">
                        <span>Office of the Chief Financial Officer</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/161">
                        <span>Parks &amp; Recreation</span>
                      </a>
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
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/21">
                        <span>Police Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/171">
                        <span>Water and Sewerage Department</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a href="https://detroitmi.gov/taxonomy/term/176">
                        <span>Youth Services</span>
                      </a>
                    </div>
                </div>
    )
}

export default Departments