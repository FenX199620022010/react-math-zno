import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">zno matematika</div>
          <nav className="header__menu nav">
              <NavLink to="/" className="nav__link">Main</NavLink>
              <NavLink to="/test" className="nav__link">Test</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
