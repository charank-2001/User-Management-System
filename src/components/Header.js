import React from "react";
import "./Header.css";
const logo = require("./logo.jpg");
function Header() {
  return (
    <div className="header">
      <img className="img" src={logo} alt="" />
      <div className="header-text">
        <h2>YOUR SPOTTABL TEAM</h2>
        <p>Spottabl supports you all throughout</p>
      </div>
    </div>
  );
}

export default Header;
