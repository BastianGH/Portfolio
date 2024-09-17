import "./Header.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <a to="/">Bastian PUSSEY</a>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <a to="#about">À Propos de moi</a>
          </li>
          <li>
            <a to="#experience">Expérience</a>
          </li>
          <li>
            <a to="#realisations">Réalisations</a>
          </li>
          <li>
            <a to="#tools">Mes outils</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
