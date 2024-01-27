import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <input
        type="search"
        placeholder="Enter a city..."
        required
        className="Search"
      />
      <input type="submit" value="Search" className="Button" />
    </div>
  );
}
export default Header;