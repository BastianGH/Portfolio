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
        <NavLink to="/">
          <span className="title-name">Bastian PUSSEY</span>
          <span className="title-abbreviated">BP</span>
        </NavLink>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <NavLink to="about">À Propos de moi</NavLink>
            </li>
            <li>
              <NavLink to="experience">Expérience</NavLink>
            </li>
            <li>
              <NavLink to="achievements">Réalisations</NavLink>
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
      {burgerState ? (
        <nav className="burger-menu">
          <ul className="header-nav-list">
            <li>
              <NavLink to="about">À Propos de moi</NavLink>
            </li>
            <li>
              <NavLink to="experience">Expérience</NavLink>
            </li>
            <li>
              <NavLink to="achievements">Réalisations</NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
