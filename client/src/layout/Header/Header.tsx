import brandLogo from "../../assets/SocialO-logo.png";
import Button from "../../components/button/Button";
import DropDown from "../../components/drop-down/DropDown";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import InputBox from "../../components/input-box/InputBox";
import "./header.css";

function Header() {
  return (
    <TopHeaderBar>
      <div className="header">
        <div className="header__brand-logo-wrapper">
          <img
            className="header__brand-logo-wrapper__logo"
            src={brandLogo}
            style={{ height: "50px" }}
          />
        </div>
        <div className="header__navigation-option">
          <DropDown>Create</DropDown>
        </div>
        <div className="header__search-bar">
          <InputBox />
        </div>
        <div className="header__auth">
          <Button>Login</Button>
          <Button variant="contained">Sign up</Button>
        </div>
      </div>
    </TopHeaderBar>
  );
}

export default Header;
