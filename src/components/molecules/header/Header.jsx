import "./Header.scss";
import Logo from "../../atoms/logo/Logo";
import Nav from "../../molecules/nav/Nav";
import { useState } from "react";
import MobileNav from "../mobileNav/MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Logo />
      {isOpen ? <MobileNav /> : <Nav />}
      <div
        onClick={() => setIsOpen((cur) => !cur)}
        className={`menu-toggle ${isOpen ? "menu__toggle-open" : ""}`}>
        {isOpen ? "x" : "="}
      </div>
    </header>
  );
};

export default Header;
