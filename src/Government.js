import React from 'react'
class Government extends React.Component{
    render(){
    return(
        <div className="nav-container submenu-wrapper">
                  <div
                    className="nav-item back"
                    onClick={e => {
                      this.props.subMenuClick(e, {
                        departments: false,
                        government: false,
                        howDoI: false
                      });
                    }}
                  >
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
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/291">
                      <span>City Clerk</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/296">
                      <span>City Council</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/1576">
                      <span>Commissions</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/301">
                      <span>Mayor's Office</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/136">
                      <span>Office of Inspector General</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/151">
                      <span>Ombudsman</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="https://detroitmi.gov/taxonomy/term/3366">
                      <span>Tax Preparation Sites</span>
                    </a>
                  </div>
                </div>
    )
    }
}

export default Government