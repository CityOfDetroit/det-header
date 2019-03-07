import React from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from 'react-transition-group'
import Departments from './Departments'
import Government from './Government'
import Howdoi from './Howdoi'

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
      margin-top: -10px;
    }

    .sub-items-btn:hover {
      background: #004445;
    }

    .lvl-1 > .sub-items-btn {
      display: block;
    }

    .sub-items-btn:before {
      content: ">";
    }

    .sub-items-btn:hover {
      background: #004445;
    }

    .nav-item.lvl-1 {
      display: ${!props.status.departments &&
      !props.status.government &&
      !props.status.howDoI
        ? "block"
        : "none"};
    }

    .nav-item.lvl-1#departments {
      display: ${props.status.departments ? "block" : ""};
    }

    .nav-item.lvl-1#departments > a,
    .nav-item.lvl-1#departments > .sub-items-btn {
      display: ${props.status.departments ? "none" : "inline-block"};
    }

    .nav-item.lvl-1#government {
      display: ${props.status.government ? "block" : ""};
    }

    .nav-item.lvl-1#government > a,
    .nav-item.lvl-1#government > .sub-items-btn {
      display: ${props.status.government ? "none" : "inline-block"};
    }

    .nav-item.lvl-1#how-do-i {
      display: ${props.status.howDoI ? "block" : ""};
    }

    .nav-item.lvl-1#how-do-i > a,
    .nav-item.lvl-1#how-do-i > .sub-items-btn {
      display: ${props.status.howDoI ? "none" : "inline-block"};
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

    .example-appear {
      background: red;
    }

    .example-leave.example-leave-active {
      animation: slide-out 0.5s ease;
    }

    .submenu-wrapper {
      animation: slide-in 0.5s ease;
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

  return (
    <BigMenu>
      <MenuButton onClick={props.toggleMenu} id="main-menu">
        <label>
          <span />
          <span />
          <span />
          MENU
        </label>
      </MenuButton>
      {props.display ? (
        <BigMenuWrapper id="big-nav">
          <div className="search-box">
            <div id="close-button" onClick={props.toggleMenu}>
              X
            </div>
            <input id="menu-search" type="text" name="" placeholder="SEARCH" />
          </div>
          <div>
            <div className="nav-item lvl-1" id="departments">
              <a href="https://detroitmi.gov/departments">
                <span>DEPARTMENTS</span>
              </a>
              <div
                className="sub-items-btn"
                onClick={e => {
                  props.subMenuClick(e, {
                    departments: true,
                    government: false,
                    howDoI: false
                  });
                }}
              />
           
              {props.status.departments ? (
                <Departments subMenuClick={props.subMenuClick} />
              ) : (
                ""
              )}
            </div>
            <div className="nav-item lvl-1" id="government">
              <a href="/government">
                <span>GOVERNMENT</span>
              </a>

              <div
                className="sub-items-btn"
                onClick={e => {
                  props.subMenuClick(e, {
                    departments: false,
                    government: true,
                    howDoI: false
                  });
                }}
              />
              {props.status.government ? (
                <Government subMenuClick={props.subMenuClick} />
              ) : (
                ""
              )}
            </div>
            <div className="nav-item lvl-1" id="how-do-i">
              <a href="/how-do-i">
                <span>HOW DO I</span>
              </a>
              <div
                className="sub-items-btn"
                onClick={e => {
                  props.subMenuClick(e, {
                    departments: false,
                    government: false,
                    howDoI: true
                  });
                }}
              />
              {props.status.howDoI ? (
                <Howdoi subMenuClick={props.subMenuClick} />
              ) : (
                ""
              )}
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
      ) : (
        ""
      )}
    </BigMenu>
  );
}

export default BigMenu;
