import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

function Howdoi(props){
    return(
  
        <div
                  className="nav-container submenu-wrapper"
                  id="how-do-i-container"
                >
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
                
    )
}
export default Howdoi