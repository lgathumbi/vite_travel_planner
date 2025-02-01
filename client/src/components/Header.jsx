import { Link } from "react-router-dom";

const Header = () => {
    return  <header className="header" id="header">
    <nav className="nav container">
      <Link to="/" className="nav__logo">Tra<span>vlr</span></Link>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link active">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/itineraries" className="nav__link">Itineraries</Link>
          </li>
          <li className="nav__item">
            <Link to="/destinations" className="nav__link">Destinations</Link>
          </li>
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  </header>

}

export default Header;