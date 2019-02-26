import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo.js";
import Search from "./Search.js";
import Menu from "./Menu.js";
import BigMenu from "./BigMenu";

function App() {
  const [menu, setMenu] = useState(false);
  const [buses, setBuses] = useState(false);

  const toggleBuses = event => {
    console.log("how do it");
    console.log(event.target);
    setBuses(menuState => !menuState);
  };
  const toggleMenu = () => {
    setMenu(menuState => !menuState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleMenu}>open Menu</button>
        <Logo title="mikes button" type="primary" />
        <Menu />
        <Search />
        <BigMenu display={menu} buses={buses} setBuses={toggleBuses} />
        {/* {menu && } */}
      </header>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Logo title="mikes button" type="primary"/>
//           <Menu/>
//           <Search/>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
