import { useState } from "react";
import BrandLogo from "../../components/brand-logo/BrandLogo";
import Button from "../../components/button/Button";
import DropDown from "../../components/drop-down/DropDown";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import InputBox from "../../components/input-box/InputBox";
import Modal from "../../components/modal/Modal";
import "./header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSignUp = () => {
    setIsModalOpen(true);
  };
  const handleLogin = () => {
    setIsModalOpen(true);
  };
  return (
    <TopHeaderBar>
      <div className="header">
        <BrandLogo />
        <div className="header__navigation-option">
          <DropDown anchorEl={<Button isDropDown={true}>Create</Button>}>
            1
          </DropDown>
          <DropDown
            anchorEl={
              <Button isDropDown={true}>Social media management</Button>
            }>
            2
          </DropDown>
          <DropDown anchorEl={<Button isDropDown={true}>Services</Button>}>
            3
          </DropDown>
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
