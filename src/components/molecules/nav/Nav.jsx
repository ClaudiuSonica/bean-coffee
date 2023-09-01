import SignUp from "../signUp/SignUp";
import NavItem from "../../atoms/navItem/NavItem";
import "./Nav.scss";

const Nav = () => {
  const items = ["Home", "Menu", "About Us", "Contact Us"]

  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((item, i) => (
          <NavItem key={i} link={item} />
        ))}
      </ul>
      <SignUp />
    </nav>
  );
};

export default Nav;
