import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo.js";
import Search from "./Search.js";
import Menu from "./Menu.js";
import BigMenu from "./BigMenu";

function App() {
  const [menu, setMenu] = useState(false);

  const [status, setStatus] = useState(
    {
      departments : false,
      government : false,
      howDoI : false
    }
  );

  const toggleMenu = event => {
    console.log(event.target);
    setMenu(menuState => !menuState);
  };

  const subMenuClick = (e, category) => {
    setStatus(
      category
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <Logo title="mikes button" type="primary" />
        <Menu />
        <Search/>
        <BigMenu display={menu} toggleMenu={toggleMenu} status={status} subMenuClick={subMenuClick}/>
      </header>
    </div>
  );
}

export default App;
