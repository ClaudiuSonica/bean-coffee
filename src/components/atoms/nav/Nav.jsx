import SignUp from "../signUp/SignUp";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nam__item">
          <a className="nav__link" href="#">
            Home
          </a>
        </li>
        <li className="nam__item">
          <a className="nav__link" href="#">
            Menu
          </a>
        </li>
        <li className="nam__item">
          <a className="nav__link" href="#">
            About Us
          </a>
        </li>
        <li className="nam__item">
          <a className="nav__link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <SignUp />
    </nav>
  );
};

export default Nav;
