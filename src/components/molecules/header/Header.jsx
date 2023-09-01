import "./Header.scss";
import Logo from "../../atoms/logo/Logo";
import Nav from "../../molecules/nav/Nav";

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header;