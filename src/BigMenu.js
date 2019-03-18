import React from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import Departments from "./Departments";
import Government from "./Government";
import Howdoi from "./Howdoi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const BigMenuContainer = styled.div`
  grid-area: menu;

  .active {
    right: 0px;
    transition: right 500ms ease;
    width: 100%;
    max-width: 480px;
  }
  .closed {
    right: -500px;
    transition: right 500ms ease;
  }
`;

const MenuButton = styled.div`
  float: left;
  position: relative;
  left: 3px;
  width: 57px;
  height: 57px;
  label {
    background: #feb70d;
    color: #18252a;
    transition: transform 250ms ease;
    cursor: pointer;
    z-index: 20;
    font-size: 10px;
    letter-spacing: -0.13em;
    padding: 13px;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 10px;
    :checked ~ span {
      background-color: #18252a;
      transition: transform 250ms ease;
    }
    :checked ~ span:nth-of-type(1) {
      transform: translateY(3px) rotate(45deg);
    }
    :checked ~ span:nth-of-type(2) {
      display: none;
    }
    :checked ~ span:nth-of-type(3) {
      transform: translateY(-3px) rotate(-45deg);
      margin-bottom: 5px;
    }
    :checked ~ main {
      transform: translateX(250px);
      transition: transform 500ms ease;
    }
  }
  span {
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
  display: block;
  position: fixed;
  right: -480px;
  top: 0px;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  overflow-y: scroll;
  z-index: 100;

  #close-button {
    height: 59px;
    width: 69px;
    top: 10px;
    background: #feb70d;
    cursor: pointer;
    order: 1;
    margin-left: 10px;
    display: flex;
    align-items: center;    
  }

  #close-button svg{
    margin: auto;
  }

  .nav-item.lvl-1 {
    height: 45px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .sub-items-btn {
    width: 5em;
    text-align: center;
    padding: 1em;
    font-weight: bold;
    color: #9fd5b3;
    cursor: pointer;
    height: 25px;
    right: 0px;
    display: none;
    margin-top: -10px;
  }

   .sub-items-btn svg{
     color: white;
      font-size: 1.5em;
      transform: rotate(180deg);
   }

  .sub-items-btn:hover {
    background: #004445;
  }

  .lvl-1 > .sub-items-btn {
    display: block;
  }

  .sub-items-btn:before {
    content: ">"
  }

  .sub-items-btn:hover {
    background: #004445;
  }

  /* .nav-item.lvl-1 {
    display: ${props =>
      !props.status.departments &&
      !props.status.government &&
      !props.status.howDoI
        ? "block"
        : "none"};
  } */

  .nav-item.lvl-1#departments {
    display: ${props => (props.status.departments ? "block" : "")};
  }

  .nav-item.lvl-1#departments > a,
  .nav-item.lvl-1#departments > .sub-items-btn {
    display: ${props => (props.status.departments ? "none" : "inline-block")};
  }

  .nav-item.lvl-1#government {
    display: ${props => (props.status.government ? "block" : "")};
  }

  .nav-item.lvl-1#government > a,
  .nav-item.lvl-1#government > .sub-items-btn {
    display: ${props => (props.status.government ? "none" : "inline-block")};
  }

  .nav-item.lvl-1#how-do-i {
    display: ${props => (props.status.howDoI ? "block" : "")};
  }

  .nav-item.lvl-1#how-do-i > a,
  .nav-item.lvl-1#how-do-i > .sub-items-btn {
    display: ${props => (props.status.howDoI ? "none" : "inline-block")};
  }

  .nav-item.lvl-1 > .nav-container .nav-item .nav-container {
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
    padding: 9px;
    font-size: 30px;
    display: flex;
    justify-content: space-between

  }

  #menu-search {
    height: 57px;
    flex-grow: 1;
    width: 100%;
    background: transparent;
    color: white;
    font-family: "Montserrat";
    border: none;
    border-bottom: 2px solid #fff;
    padding: 0 0 0 8px;
    font-size: 1em;
  }

  #menu-search::placeholder {
    color: white;  
  }

  .nav-container {
    width: 480px;
    z-index: 9999px;
    position: fixed;
    background: black;
    height: 100%;
  }

  .fade-enter-active.nav-container {
    animation: slide-in 0.5s ease;
  }

  .fade-exit-active.nav-container {
    animation: slide-out 0.5s ease;
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(20px);
    }
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

class BigMenu extends React.Component {
  render() {
    return (
      <BigMenuContainer>
        <MenuButton onClick={this.props.toggleMenu} id="main-menu">
          <label>
            <span />
            <span />
            <span />
            MENU
          </label>
        </MenuButton>
        <BigMenuWrapper
          id="big-nav"
          status={this.props.status}
          display={this.props.display}
          className={`${this.props.display ? "active" : "closed"}`}
        >
          <div className="search-box">
            <div id="close-button" onClick={this.props.toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <input id="menu-search" type="text" name="" placeholder="SEARCH" />
          </div>
          <div className="big-nav-container">
            <CSSTransition
              in={this.props.status.departments}
              timeout={400}
              classNames="fade"
              unmountOnExit
            >
              <Departments subMenuClick={this.props.subMenuClick} />
            </CSSTransition>

            <CSSTransition
              in={this.props.status.government}
              timeout={400}
              classNames="fade"
              unmountOnExit
            >
              <Government subMenuClick={this.props.subMenuClick} />
            </CSSTransition>

            <CSSTransition
              in={this.props.status.howDoI}
              timeout={400}
              classNames="fade"
              unmountOnExit
            >
              <Howdoi subMenuClick={this.props.subMenuClick} />
            </CSSTransition>

            <div className="nav-item lvl-1" id="departments">
              <a href="https://detroitmi.gov/departments">
                <span>DEPARTMENTS</span>
              </a>
              <div
                className="sub-items-btn"
                onClick={e => {
                  this.props.subMenuClick(e, {
                    departments: true,
                    government: false,
                    howDoI: false
                  });
                }}
              >
                {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
              </div>
            </div>
            <div className="nav-item lvl-1" id="government">
              <a href="/government">
                <span>GOVERNMENT</span>
              </a>

              <div
                className="sub-items-btn"
                onClick={e => {
                  this.props.subMenuClick(e, {
                    departments: false,
                    government: true,
                    howDoI: false
                  });
                }}
              >
                {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
              </div>
            </div>
            <div className="nav-item lvl-1" id="how-do-i">
              <a href="/how-do-i">
                <span>HOW DO I</span>
              </a>
              <div
                className="sub-items-btn"
                onClick={e => {
                  this.props.subMenuClick(e, {
                    departments: false,
                    government: false,
                    howDoI: true
                  });
                }}
              >
                {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
              </div>
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
      </BigMenuContainer>
    );
  }
}

export default BigMenu;
