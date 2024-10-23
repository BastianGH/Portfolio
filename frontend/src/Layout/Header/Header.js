import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [burgerState, setBurgerState] = useState(false);

  const burgerMenu = () => {
    setBurgerState(!burgerState);
  };

  return (
    <>
      <header className="header">
        <NavLink to="Portfolio/">
          <span className="title-name">Bastian PUSSEY</span>
          <span className="title-abbreviated">BP</span>
        </NavLink>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <NavLink to="Portfolio/about">À Propos de moi</NavLink>
            </li>
            <li>
              <NavLink to="Portfolio/experience">Expérience</NavLink>
            </li>
            <li>
              <NavLink to="Portfolio/achievements">Réalisations</NavLink>
            </li>
          </ul>
        </nav>
        <div className="icon" onClick={burgerMenu}>
          {!burgerState ? (
            <div className="burger-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              <div className="cross-icon">
                <div></div>
                <div></div>
              </div>
            </>
          )}
        </div>
      </header>
      <nav className={`burger-menu ${burgerState ? "open" : "closed"}`}>
        <ul className="header-nav-list">
          <li>
            <NavLink to="Portfolio/about" onClick={burgerMenu}>
              À Propos de moi
            </NavLink>
          </li>
          <li>
            <NavLink to="Portfolio/experience" onClick={burgerMenu}>
              Expérience
            </NavLink>
          </li>
          <li>
            <NavLink to="Portfolio/achievements" onClick={burgerMenu}>
              Réalisations
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
