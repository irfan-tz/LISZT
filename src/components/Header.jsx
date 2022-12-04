import React from "react";
import ReactLogo from './icon.png';

function Header() {
  const logo = (
    <img
      src="https://w7.pngwing.com/pngs/93/40/png-transparent-notepad-illustration-computer-icons-iconfinder-action-item-list-icon-miscellaneous-angle-text.png"
      alt="icon" width="4%" height="4%"
    />
  );
  return (
    <div className="header">
      {logo}
      <h1>Liszt</h1>
    </div>
  );
}

export default Header;
