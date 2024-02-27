import "../css/Header.css";
import logo from "../asserts/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="header-logo" />
    </div>
  );
};

export default Header;
