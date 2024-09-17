import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">Bastian PUSSEY</NavLink>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <NavLink to="about">À Propos de moi</NavLink>
          </li>
          <li>
            <NavLink to="experience">Expérience</NavLink>
          </li>
          <li>
            <NavLink to="realisations">Réalisations</NavLink>
          </li>
          <li>
            <NavLink to="tools">Mes outils</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
