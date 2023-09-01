/* eslint-disable react/prop-types */
import "./MobileNav.scss";
import NavItem from "../../atoms/navItem/NavItem";

const MobileNav = () => {
  const items = ["Home", "Menu", "About Us", "Contact Us", "Sign In", "Sign Up"];

  return (
    <nav className="nav__mobile">
      <ul className="nav__list__mobile">
        {items.map((item, i) => (
          <NavItem key={i} link={item} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
