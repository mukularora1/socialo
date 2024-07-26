import { useState } from "react";
import brandLogo from "../../assets/SocialO-logo.png";
import Button from "../../components/button/Button";
import DropDown from "../../components/drop-down/DropDown";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import InputBox from "../../components/input-box/InputBox";
import Modal from "../../components/modal/Modal";
import "./header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSignUp = () => {
    console.log("sign up");
    setIsModalOpen(true);
  };
  const handleLogin = () => {
    console.log("login");
    setIsModalOpen(true);
  };
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
          <DropDown>Social media management</DropDown>
          <DropDown>Services</DropDown>
        </div>
        <div className="header__auth">
          <div className="header__search-bar">
            <InputBox />
          </div>
          <Button handleClick={handleLogin}>Login</Button>
          <Button variant="contained" handleClick={handleSignUp}>
            Sign up
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          backdrop={true}
          onClose={() => setIsModalOpen(false)}></Modal>
      )}
    </TopHeaderBar>
  );
}

export default Header;
